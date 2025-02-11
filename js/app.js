const rightBtn = document.querySelector("#scrolling-button-right2");
const leftBtn = document.querySelector("#scrolling-button-left2");

const content = document.querySelector(".scrolling-container2");

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value
const maxScrollLeft = content.scrollWidth - content.clientWidth;
slider.max = maxScrollLeft / 10;

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function () {
  output.innerHTML = this.value;
  content.scrollLeft = this.value * 10;
};

rightBtn.addEventListener("click", () => {
  content.scrollLeft = content.scrollLeft + 200;

  const maxScrollLeft = content.scrollWidth - content.clientWidth;
  alert(maxScrollLeft + " " + content.scrollLeft);
});

leftBtn.addEventListener("click", () => {
  content.scrollLeft -= 200;
});
