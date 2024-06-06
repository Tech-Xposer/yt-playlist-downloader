const ytdl = require('ytdl-core');
const fs = require('fs');

function downloadVideo(videoUrl, filePath) {
    return new Promise((resolve, reject) => {
        ytdl(videoUrl)
            .pipe(fs.createWriteStream(filePath))
            .on('finish', () => {
                console.log('Video downloaded successfully');
                resolve();
            })
            .on('error', (error) => {
                console.error('Error downloading video:', error);
                reject(error);
            });
    });
}

module.exports = {downloadVideo}