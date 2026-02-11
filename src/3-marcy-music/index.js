const playlists = [
  {
    title: 'Chill Vibes',
    image: './img/playlist-chill.jpg',
    description: 'A playlist for chill vibes',
  },
  {
    title: 'Focus',
    image: './img/playlist-focus.jpg',
    description: 'A playlist for focus',
  },
  {
    title: 'Late Night',
    image: './img/playlist-late-night.jpg',
    description: 'A playlist for late night',
  },
  {
    title: 'Love Songs',
    image: './img/playlist-love.jpg',
    description: 'A playlist for love songs',
  },
  {
    title: 'Oldies',
    image: './img/playlist-oldies.jpg',
    description: 'A playlist for oldies',
  },
  {
    title: 'Sad',
    image: './img/playlist-sad.jpg',
    description: 'A playlist for sad songs',
  },
];

// Add your code here...
const playlistList = document.getElementById("playlist-list");
const nowPlayingTitle = document.getElementById("now-playing-title");

let selectedCard = null;

// render playlists
playlists.forEach((playlist) => {
  const li = document.createElement("li");
  li.classList.add("playlist-card");
  li.dataset.title = playlist.title;

  li.innerHTML = `
    <img src="${playlist.image}" alt="${playlist.title} playlist cover" />
    <p>${playlist.title}</p>
  `;

  playlistList.appendChild(li);
});

// event delegation
playlistList.addEventListener("click", (event) => {
  const card = event.target.closest(".playlist-card");
  if (!card) return;

  // remove selected from previous
  if (selectedCard) {
    selectedCard.classList.remove("selected");
  }

  // select new card
  card.classList.add("selected");
  selectedCard = card;

  // update now playing text
  nowPlayingTitle.textContent = card.dataset.title;
});
