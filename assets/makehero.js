// js

// Increase Stat Bar by Increments of 1, max 10
let width = 0;

// ADD STATS

// Add Strength 
function addStr() {
  let strengthBar = document.getElementById("strBar");
  strengthBar.addEventListener('click', function(ev) {
    if (ev.target.id === "strBar") {
      if (width < 80) {
        strengthBar.onclick (
        width += 10 ,
        strengthBar.style.width = width + "%" ,
        )
      }
    else {
      console.log("max-strength");
      return;
    }}
  })
};

// Add Vitality
function addVit() {
};
// Add Agility
function addAgi() {
};
// Add Intelligence
function addInt() {
};
// Add Luck
function addLuck() {
};

// SUBTRACT STATS

// Subtract Strength
function subtractStr() {
};
// Subtract Vitality
function subtractVit() {
};
// Subtract Agility
function subtractAgi() {
};
// Subtract Intelligence
function subtractInt() {
};
// Subtract Luck
function subtractLuck() {
};
