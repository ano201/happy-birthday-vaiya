const candle = () => {
  const candle = document.getElementsByClassName('candle');
  setTimeout(() => {
    candle[0].style.top = "289px";
    wishes();
  }, 4500);
}

const wishes = () => {
  const text = document.querySelectorAll('h2');
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
