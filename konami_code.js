const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

let index = 0;

function init() {
  // your code here
  
  function onKeyDownHandler(e) {
    const key = e.which;
    
    if(key === codes[index]) {
      index++;
      
      if(index === codes.length) {
        alert("Congratulations! You found an easter egg!");
        index = 0;
      }
    } else {
        index = 0;
      }
    
  }
}
