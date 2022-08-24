const candle = () => {
  confetti()
  const candle = document.getElementsByClassName('candle');
  setTimeout(() => {
    candle[0].style.top = "289px";
    wishes();
  }, 4500);
}

const wishes = () => {
  const text = document.querySelectorAll('h2');
  const lastText = document.getElementsByClassName('text');
  lastText[1].style.opacity = 1;
  let index = 0;
  const interval = setInterval(() => {
    if (index <= 3) {
      text[index].style.margin = 0;
      index++;
    }
    else {
      clearInterval(interval);
    }
  }, 1500)
};

confetti = () => {
  const body = document.body;
  const script = document.createElement("script");
  script.setAttribute("src", "confetti.js")
  const script2 = document.createElement("script");
  script2.innerHTML = `setTimeout(() => {
startConfetti();
}, 5000);
setTimeout(() => {
  stopConfetti();
}, 20000);`
  body.append(script, script2)
}
