const ytpl = require('ytpl');
const {downloadVideo} = require('./download.js')
const fs = require('fs');
const path = require('path');
const readline = require('readline');

// Create readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Ask for playlist URL
rl.question('Enter Playlist URL: ', async (playlistUrl) => {
    try {
        // Extract playlist name from URL
        const videoUrls = await extractPlaylistUrls(playlistUrl);
        
        // Create directory with playlist name if it doesn't exist
        const playlistFolder = path.join(__dirname, 'Downloads');
        if (!fs.existsSync(playlistFolder)) {
            fs.mkdirSync(playlistFolder);
        }

        console.log('Total Videos:', videoUrls.length);

        // Download each video
        for (let i = 0; i < videoUrls.length; i++) {
            const videoUrl = videoUrls[i];
            console.log(`Downloading Video ${i + 1}: ${videoUrl}`);
            const filePath = path.join(playlistFolder, `Video ${i + 1}.mp4`);
            await downloadVideo(videoUrl, filePath);
        }
    } catch (error) {
        console.error('Error:', error);
    } finally {
        console.log('All videos downloaded successfully.');
        rl.close();
    }
});

// Function to extract video URLs from a YouTube playlist
async function extractPlaylistUrls(playlistUrl) {
    try {
        const playlist = await ytpl(playlistUrl);
        const videoUrls = playlist.items.map(item => item.shortUrl);
        return videoUrls;
    } catch (error) {
        throw new Error('Error extracting playlist URLs:', error);
    }
}

// Function to download the video
