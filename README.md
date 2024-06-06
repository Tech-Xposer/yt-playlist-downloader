
# YouTube Playlist Video Downloader

This project is a Node.js script that downloads all videos from a specified YouTube playlist and saves them into a "Downloads" folder.

## Features

- Extracts all video URLs from a YouTube playlist.
- Downloads each video one by one.
- Saves the videos in the "Downloads" folder with sequential filenames.

## Requirements

- Node.js
- npm (Node Package Manager)

## Dependencies

- `ytpl`: To fetch the playlist details.
- `ytdl-core`: To download individual YouTube videos.
- `fs`: For file system operations (built-in Node.js module).
- `path`: For handling file paths (built-in Node.js module).
- `readline`: For reading user input (built-in Node.js module).

## Installation

1. Clone the repository or download the script files.
   
   ```bash
   git clone https://github.com/your-username/yt-playlist-downloader.git
   cd yt-playlist-downloader
   ```

2. Install the required npm packages.
    ```bash
    npm install
    ```
3. Run the script.
    ```bash
    node index.js
    ```


# Where Videos Will Be Stored
The downloaded videos will be stored in a folder named **Downloads** in the same directory where the script (index.js) is located. Each video will be saved with a filename in the format Video X.mp4, where X is the sequential number of the video in the playlist.

# License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

# Author Details
- **Name:** Ashutosh Sharma
- **Email:** [asharma89505@gmail.com](mailto:asharma89505@gmail.com)
- **GitHub:** [github.com/Tech-Xposer](https://github.com/Tech-Xposer/)
- **LinkedIn:** [linkedin.com/in/asharma73](https://linkedin.com/in/asharma73)
