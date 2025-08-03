// This file contains the JavaScript code for the music website. It handles user interactions, such as playing songs, managing playlists, and dynamically updating the content on the page.

document.addEventListener('DOMContentLoaded', () => {
    const playButtons = document.querySelectorAll('.play-button');
    const audioPlayer = document.getElementById('audio-player');

    playButtons.forEach(button => {
        button.addEventListener('click', () => {
            const songSrc = button.getAttribute('data-song-src');
            audioPlayer.src = songSrc;
            audioPlayer.play();
        });
    });

    const playlist = [
        {
            title: "Song 1",
            artist: "Artist 1",
            src: "assets/music/song1.mp3"
        },
        {
            title: "Song 2",
            artist: "Artist 2",
            src: "assets/music/song2.mp3"
        },
        {
            title: "Song 3",
            artist: "Artist 3",
            src: "assets/music/song3.mp3"
        }
    ];

    const playlistContainer = document.getElementById('playlist');

    playlist.forEach(song => {
        const songElement = document.createElement('div');
        songElement.classList.add('song');
        songElement.innerHTML = `
            <span>${song.title} - ${song.artist}</span>
            <button class="play-button" data-song-src="${song.src}">Play</button>
        `;
        playlistContainer.appendChild(songElement);
    });
});