
// Image processing script

const fs = require('fs')
const path = require('path')
const sharp = require('sharp')
const s3 = require('s3')

const keys = require('./.aws.json')

const DIR = path.join(__dirname, 'tmp')
const BUCKET = 'bst-fornyc'

const QUALITY = 50
const sizes = [
    320,
    640,
    1280,
    2560
]

const client = s3.createClient({
  s3Options: {
    accessKeyId: keys.AWS_ACCESS_KEY_ID,
    secretAccessKey: keys.AWS_SECRET_ACCESS_KEY
  }
})

const processImage = (filepath) => {
    return new Promise((resolve, reject) => {
        if (!/\.jpg$/.test(filepath)) {
            console.log('Not a jpg. Skipping resize processing.', filepath)
            reject(filepath)
            return
        }

        const orig = filepath.replace(/\.jpg$/, '_orig.jpg')
        fs.renameSync(path.join(DIR, filepath), path.join(DIR, orig))

        console.log('resizing', filepath)
        const results = []

        sharp(path.join(DIR, orig))
            .resize(1280)
            .quality(QUALITY)
                .toFile(path.join(DIR, filepath))
                .then((info) => {
                    console.log(info)
                    results.push(filepath)
                    if (results.length >= sizes.length + 1) {
                        fs.renameSync(path.join(DIR, orig), path.join(DIR, 'processed', orig))
                        resolve(results)
                    }
                })
                .catch((err) => {
                    console.error('Error', err)
                })

        sizes.forEach((size, i) => {
            const filename = filepath.replace(/\.jpg$/, `_w${size}.jpg`)
            console.log('processing', filename, size)
            const src = path.join(DIR, orig)

            sharp(src)
                .resize(size)
                .quality(QUALITY)
                .toFile(path.join(DIR, filename))
                .then((info) => {
                    console.log(info)
                    results.push(filename)
                    console.log('processed', filename, results.length + '/' + sizes.length + 1)
                    if (results.length >= sizes.length + 1) {
                        fs.renameSync(path.join(DIR, orig), path.join(DIR, 'processed', orig))
                        resolve(results)
                    }
                })
                .catch((err) => {
                    console.error('Error', err)
                })
        })
    })
}

const upload = (filename, i) => {
    console.log('uploading...', filename)
    const localFile = path.join(DIR, filename)

    const uploader = client.uploadFile({
        s3Params: {
            Bucket: BUCKET,
            Key: filename,
            ACL: 'public-read'
        },
        localFile
    })

    return new Promise((resolve, reject) => {
        uploader.on('error', (err) => {
            console.error('Error', err)
            reject(err)
        })

        uploader.on('progress', () => {
            console.log('uploading...', uploader.progressMd5Amount, uploader.progressAmount, uploader.progressTotal)
        })

        uploader.on('end', function() {
            const url = s3.getPublicUrl(BUCKET, filename)
            try {
                fs.renameSync(path.join(DIR, filename), path.join(DIR, 'processed', filename))
            } catch(e) {
                console.log('Could not delete', filename)
            }
            resolve({ filename, url })
        })
    })
}

const images = fs.readdirSync(DIR)
    .filter(f => /\.jpg$|\.png$/.test(f))

console.log('Processing ' + images.length + ' images')

images.forEach((filepath) => {
    // Normalize file name
    const file = filepath.replace(/\s|[^a-zA-Z0-9.]/g, '-')
    fs.renameSync(path.join(__dirname, 'tmp', filepath), path.join(__dirname, 'tmp', file))

    processImage(file)
        .then((results) => {
            console.log(results)
            results.forEach((filename) => {
                let uploaded = 0
                upload(filename)
                    .then((result) => {
                        uploaded++
                        console.log('Uploaded', result, uploaded + '/' + results.length)
                    })
                    .catch((err) => {
                        console.error('Error uploading', err)
                    })
            })
        })
        .catch((file) => {
            console.error('Error processing', file)
        })
})

