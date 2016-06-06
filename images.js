
// Image processing script

const fs = require('fs')
const path = require('path')
const sharp = require('sharp')

const INPUT_PATH = path.join(__dirname, 'static/images/src')
const OUTPUT_PATH = path.join(__dirname, 'static/images')

const quality = 40
const sizes = [
    1280,
    768
]

const images = fs.readdirSync(INPUT_PATH)
    .filter(f => /\.jpg$/.test(f))

images.forEach((filename) => {
    sizes.forEach((size) => {
        sharp(path.join(INPUT_PATH, filename))
            .resize(size)
            .quality(quality)
            .toFile(path.join(OUTPUT_PATH, filename.replace('.jpg', `_q${quality}_w${size}.jpg`)), (err) => {
                if (err) {
                    console.log('Error', err)
                }
            })
    })
})

