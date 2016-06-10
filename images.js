
// Image processing script

const fs = require('fs')
const path = require('path')
const sharp = require('sharp')

const INPUT_PATH = path.join(__dirname, 'static/src/images')
const OUTPUT_PATH = path.join(__dirname, 'static/images')

const quality = 40
const sizes = [
    2048
]

const images = fs.readdirSync(INPUT_PATH)
    .filter(f => /\.jpg$|\.png$/.test(f))

console.log('Processing ' + images.length + ' images')

images.forEach((filename) => {
    console.log('Resizing ', filename)

    sizes.forEach((size) => {
        // const name = filename.replace('.jpg', `_w${size}.jpg`)
        sharp(path.join(INPUT_PATH, filename))
            .resize(size)
            .quality(quality)
            .toFile(path.join(OUTPUT_PATH, filename), (err) => {
                if (err) {
                    console.log('Error', err)
                } else {
                    console.log('Resized ', filename)
                }
            })
    })
})

