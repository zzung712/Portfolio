const stopBtn = document.querySelector(".stop_btn");
const delBtn = document.querySelector(".del_btn");
const stopBox = document.querySelector(".stop_box");
const delBox = document.querySelector(".del_box");

let moveBtn = true;

stopBtn.addEventListener("click", function() {
  if (moveBtn) {
    stopBox.style.background = "#5f64ca";
    this.style.transform = "translateX(30px)";
    this.style.transition = "all 0.1s";
  } else {
    stopBox.style.background = "#ecedff";
    this.style.transform = "translateX(0px)";
    this.style.transition = "all 0.1s";
  }

  moveBtn = !moveBtn;

});

delBtn.addEventListener("click", function() {
  if (moveBtn) {
    delBox.style.background = "#5f64ca";
    this.style.transform = "translateX(30px)";
    this.style.transition = "all 0.1s";
  } else {
    delBox.style.background = "#ecedff";
    this.style.transform = "translateX(0px)";
    this.style.transition = "all 0.1s";
  }

  moveBtn = !moveBtn;
});