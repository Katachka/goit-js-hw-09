const refs = {
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
// function setBodyBgColor(color) {
//   document.body.style.backgroundColor = color;
// }
class ColorSwitcher {
  constructor() {
    this.intervalID = null;
    this.isActive = false;
  }

  start() {
    if (this.isActive) {
      return;
    }
    refs.startBtn.disabled = true;
    refs.stopBtn.disabled = false;

    this.isActive = true;
    this.intervalID = setInterval(() => {
      document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
  }
  stop() {
    this.isActive = false;
    refs.startBtn.disabled = false;
    refs.stopBtn.disabled = true;
    clearInterval(this.intervalID);
  }
}
const colorSwitcher = new ColorSwitcher();

refs.startBtn.addEventListener('click', colorSwitcher.start());
refs.stopBtn.addEventListener('click', colorSwitcher.stop());
