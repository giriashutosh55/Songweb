// Song data (should match index.html)
const songs = [
  {
    img: 'images/tumhiho.png',
    artist: 'Arijit Singh',
    title: 'Tum Hi Ho',
    desc: 'A soulful romantic track from the movie Aashiqui 2, sung by Arijit Singh.',
    src: 'assets/tumhiho.mp3'
  },
  {
    img: 'images/dilber.png',
    artist: 'Neha Kakkar',
    title: 'Dilbar',
    desc: 'A peppy dance number from Satyameva Jayate, featuring Neha Kakkar\'s energetic vocals.',
    src: 'assets/PaisaPaisa.mp3'
  },
  {
    img: 'images/djwalebabu.png',
    artist: 'Badshah',
    title: 'DJ Waley Babu',
    desc: 'A popular party anthem by Badshah, known for its catchy beats and fun lyrics.',
    src: 'assets/djwalababu.mp3'
  },
  {
    img: 'images/teriore.png',
    artist: 'Shreya Ghoshal',
    title: 'Teri Ore',
    desc: 'A melodious love song from Singh Is Kinng, beautifully sung by Shreya Ghoshal.',
    src: 'assets/teriore.mp3'
  },
  {
    img: 'images/boldo.png',
    artist: 'Armaan Malik',
    title: 'Bol Do Na Zara',
    desc: 'A romantic ballad from Azhar, featuring Armaan Malik\'s soothing voice.',
    src: 'assets/Boldonazara.mp3'
  },
  {
    img: 'images/lut.png',
    artist: 'Jubin Nautiyal',
    title: 'Lut Gaye',
    desc: 'A heartfelt romantic song by Jubin Nautiyal from the movie Lut Gaye.',
    src: 'assets/hedil.mp3'
  },
  {
    img: 'images/teriore.png',
    artist: 'Shreya Ghoshal',
    title: 'Sun Raha Hai',
    desc: 'A soulful track from Aashiqui 2, sung by Shreya Ghoshal.',
    src: 'assets/teriore.mp3'
  },
  {
    img: 'images/tumhiho.png',
    artist: 'Arijit Singh',
    title: 'Channa Mereya',
    desc: 'A beautiful emotional song from Ae Dil Hai Mushkil, sung by Arijit Singh.',
    src: 'assets/tumhiho.mp3'
  },
  {
    img: 'images/djwalebabu.png',
    artist: 'Neha Kakkar',
    title: 'Aankh Marey',
    desc: 'A fun dance number from Simmba, sung by Neha Kakkar.',
    src: 'assets/djwalebabu.mp3'
  },
  {
    img: 'images/dilber.png',
    artist: 'Armaan Malik',
    title: 'Main Rahoon Ya Na Rahoon',
    desc: 'A touching romantic song by Armaan Malik.',
    src: 'assets/tujhepaneko.mp3'
  },
  {
    img: 'images/lutgaye.png',
    artist: 'Jubin Nautiyal',
    title: 'Lut Gaye Jubin',
    desc: 'A hit romantic song by Jubin Nautiyal.',
    src: 'assets/lutgaye.mp3'
  },
  {
    img: 'images/teriore.png',
    artist: 'Ami Mishra',
    title: 'Hasi Ban Gaye',
    desc: 'A soothing love song from Hamari Adhuri Kahani.',
    src: 'assets/hasibangaye.mp3'
  }
];

function getQueryParam(name) {
  const url = new URL(window.location.href);
  return url.searchParams.get(name);
}

const songIndex = parseInt(getQueryParam('id'), 10);
const song = songs[songIndex];

if (song) {
  document.getElementById('player-img').src = song.img;
  document.getElementById('player-img').alt = song.title;
  document.getElementById('player-img').style.display = 'block';
  document.getElementById('player-title').textContent = song.title;
  document.getElementById('player-artist').textContent = song.artist;
  document.getElementById('player-desc').textContent = song.desc;
  document.getElementById('audio-player').src = song.src;
} else {
  document.getElementById('player-container').innerHTML = '<p>Song not found.</p>';
}
