/* === script.js === */
// Buat efek cinta jatuh ❤️
const loveContainer = document.getElementById("love-container");

setInterval(() => {
  const love = document.createElement("div");
  love.className = "love";
  love.style.left = Math.random() * 100 + "vw";
  love.style.animationDuration = 2 + Math.random() * 3 + "s";
  love.innerHTML = "❤️";
  loveContainer.appendChild(love);

  setTimeout(() => {
    love.remove();
  }, 5000);
}, 300);

// Efek love saat klik gambar pacar
const heroImg = document.querySelector('.hero-img');
const sound = new Audio('audio/click.mp3');

heroImg.addEventListener('click', (e) => {
  const emojis = ['❤️', '💖', '💘', '😍', '😘'];
  const lovePop = document.createElement('div');
  lovePop.className = 'love-pop';
  lovePop.style.left = `${e.clientX}px`;
  lovePop.style.top = `${e.clientY}px`;
  lovePop.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
  document.body.appendChild(lovePop);

  sound.currentTime = 0;
  sound.play();

  setTimeout(() => {
    lovePop.remove();
  }, 1000);
});

