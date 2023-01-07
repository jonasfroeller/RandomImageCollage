let images = "";
let rows = 1;
let amount = 0;

function addRow() {
  for (let j = amount; j < amount + 3; j++) {
    images += `<img src="https://picsum.photos/2000?random=${rows}" alt="galeriebild${rows}">`;
    toBottom();
    rows++;
  }
  amount += 3;

  document.getElementById("grid-container").innerHTML = images;
}

function toBottom() {
  setTimeout(() => {
    window.scrollTo(0, document.body.scrollHeight);
  }, 500);
}
