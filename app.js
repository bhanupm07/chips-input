const outputEl = document.querySelector(".output");
const input_btnEl = document.querySelector(".input_btn");
const item_nameEl = document.querySelector(".item_name");
const closeEl = document.querySelector(".close");
let chips = [];

input_btnEl.addEventListener("keypress", function (e) {
  //   console.log(e.target.value);
  if (e.keyCode === 13) {
    chips.push(e.target.value);
    input_btnEl.value = "";
    render_chips();
    // console.log(chips);
  }
});

function render_chips() {
  let html = "";
  chips.forEach(
    (chip) =>
      (html += `<div class="item">
    <span class="item_name">${chip}</span><span data-name="${chip}" class="close"> X</span>
  </div>`)
  );
  outputEl.innerHTML = html;
}

outputEl.addEventListener("click", function (e) {
  //   console.log(e.target.classList.contains("close"));
  if (e.target.classList.contains("close")) {
    const chipName = e.target.dataset.name;
    const chipIndex = chips.indexOf(chipName);
    if (chipIndex > -1) {
      chips.splice(chipIndex, 1);
      render_chips();
    }
  }
});
