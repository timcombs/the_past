const audio = new Audio('./poem-test.mp3');
const playbox = document.getElementById('playbox');

playbox.addEventListener("click", () => {
  audio.play();
});