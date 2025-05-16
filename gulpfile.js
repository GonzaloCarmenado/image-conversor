const gulp = require('gulp');
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

function generateImg(cb) {
    cb();
    const imageFolder = path.join(__dirname, 'images');
    const images = fs.readdirSync(imageFolder);

    images.forEach((image) => {
        const bufferArray = fs.readFileSync(path.join(imageFolder, image));
        transformImages(bufferArray, image.split('.')[0]);
    });
}

async function transformImages(bufferArray, fileName) {
    sharp(bufferArray)
        .toFile('reduced-images/' + fileName + '.avif', (err, info) => {
            if (err) console.error(`Error al procesar ${fileName}:`, err);
            else console.log(`Procesado ${fileName}:`, info);
        });
}

gulp.task('generateImg', generateImg);
