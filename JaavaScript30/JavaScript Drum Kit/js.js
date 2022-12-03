const getKeys = document.querySelectorAll(".key");

const keys = [...getKeys];

keys.forEach((key) => {
  key.addEventListener("mousedown", () => {
    key.classList.add("playing");
  });
  key.addEventListener("mouseup", () => {
    key.classList.remove("playing");
  });
  key.addEventListener("keydown", () => {
    key.classList.add("playing");
  });
});

document.addEventListener("keydown", (e) => {
  console.log(e.keyCode);
  const keydown = e.keyCode;
  const div = document.querySelector(`div[data-key="${keydown}"]`);
  const audio = document.querySelector(`audio[data-key="${keydown}"]`);
  console.log(audio);
  div.classList.add("playing");
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
});
document.addEventListener("keyup", (e) => {
  const keydown = e.keyCode;
  const div = document.querySelector(`div[data-key="${keydown}"]`);
  const audio = document.querySelector(`div[data-key="${keydown}"]`);
  div.classList.remove("playing");
});
