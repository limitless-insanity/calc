function display(val) {
  document.getElementById("result").value += val;
}
function solve() {
  let x = document.getElementById("result").value;
  let y = eval(x);
  document.getElementById("result").value = y;
}
function clearScreen() {
  document.getElementById("result").value = "";
}


const wrapper = document.getElementById("bubble-wrap");
const animateBubble = (x) => {
  const bubble = document.createElement("div");

  bubble.className = "bubble";

  bubble.style.left = `${x}px`;

  wrapper.appendChild(bubble);

  setTimeout(() => wrapper.removeChild(bubble), 800);
};
window.onmousemove = (e) => animateBubble(e.clientX);
window.onmouseup = (e) => animateBubble(e.clientX);
// window.onmousemove = (e) => animateBubble(e.clientY);
// window.onmouseout = (e) => {
//   const all = document.getElementsByTagName("html");
//   html = ``;
// };

const all = document.getElementsByTagName("UL")[0];

// const number = document.getElementsByClassName("");
let newMe = all.getElementsByTagName("div");
newMe.addEventListener(
  "mouseleave",
  (event) => {
    // highlight the mouseleave target
    event.target.style.color = "purple";

    // reset the color after a short delay
    setTimeout(() => {
      event.target.style.color = "";
    }, 1000);
  },
  false
);

newMe.addEventListener(
  "mouseout",
  (event) => {
    // highlight the mouseout target
    event.target.style.color = "orange";

    // reset the color after a short delay
    setTimeout(() => {
      event.target.style.color = "";
    }, 500);
  },
  false
);

// onmouseout = (e) => {
//   const all = document.getElementsByTagName("html");
//   html = ``;
//   e.target.style.color = "orange";
//   setTimeout(() => {
//     e.target.style.color = "";
//   }, 500);
// };
