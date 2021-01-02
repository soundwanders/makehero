// js

// Create Empty Variables for Each Stat
// numbers are used to manipulate width of stat bars
// to show addition and removal of stat points
let strength = 0;
let vitality = 0;
let agility = 0;
let intelligence = 0;
let luck = 0;

// get empty strength stat bar frame
const strengthFrame = document.getElementById("strFrame");
strengthFrame.addEventListener('click', addStr);

// get empty strength stat bar frame
const vitalityFrame = document.getElementById("vitFrame");
vitalityFrame.addEventListener('click', addVit);

// get empty agility stat bar frame
const agilityFrame = document.getElementById("agiFrame");
agilityFrame.addEventListener('click', addAgi);

// get empty intelligence bar frame
const intelligenceFrame = document.getElementById("intFrame");
intelligenceFrame.addEventListener('click', addInt);

// get empty luck stat bar frame
const luckFrame = document.getElementById("lukFrame");
luckFrame.addEventListener('click', addLuk);


// Functions -- Add Stats
// Add Strength
function addStr() {
  // get hidden strength stat bar div
  // hidden until user adds stats, then becomes visible
  let strengthBar = document.getElementById("strBar");

  // while width is less than max width (30%) , add increments of 3
  // and change width, background color of the empty strength div
  // to represent the increase of strength stat
  while (strength < 30) {
    strength += 3;
    strengthBar.style.width = strength + "%" ,
    strengthBar.style.backgroundColor = "rgb(180, 92, 173)";
    console.log("Increased Strength");
    console.log(strength);
    return;
  }
  // if strength is 30 (max width) prevent additional strength
  if (strength >= 30) {
    console.log("Maxed Strength");
  }
};

// Add Vitality
function addVit() {
  let vitalityBar = document.getElementById("vitBar");

  while (vitality < 30) {
    vitality += 3;
    vitalityBar.style.width = vitality + "%" ,
    vitalityBar.style.backgroundColor = "rgb(180, 92, 173)";
    console.log("Increased Vitality");
    console.log(vitality);
    return;
  }
  if (vitality >= 30) {
    console.log("Maxed Vitality");
  }
};

// Add Agility
function addAgi() {
  let agilityBar = document.getElementById("agiBar");

  while (agility < 30) {
    agility += 3;
    agilityBar.style.width = agility + "%" ,
    agilityBar.style.backgroundColor = "rgb(180, 92, 173)";
    console.log("Increased Agility");
    console.log(agility);
    return;
  }
  if (agility >= 30) {
    console.log("Maxed Agility");
  }
};

// Add Intelligence

function addInt() {
  let intelligenceBar = document.getElementById("intBar");

  while (intelligence < 30) {
    intelligence += 3;
    intelligenceBar.style.width = intelligence + "%" ,
    intelligenceBar.style.backgroundColor = "rgb(180, 92, 173)";
    console.log("Increased Intelligence");
    console.log(intelligence);
    return;
  }
  if (intelligence >= 30) {
    console.log("Maxed Intelligence");
  }
};

// Add Luck
function addLuk() {
  let luckBar = document.getElementById("lukBar");

  while (luck < 30) {
    luck += 3;
    luckBar.style.width = luck + "%" ,
    luckBar.style.backgroundColor = "rgb(180, 92, 173)";
    console.log("Increased Luck");
    console.log(luck);
    return;
  }
  if (luck >= 30) {
    console.log("Maxed Luck");
  }
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
