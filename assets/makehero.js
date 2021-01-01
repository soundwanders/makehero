// js

// ADD STATS
let strWidth = 0;
let vitWidth = 0;
let agiWidth = 0;
let intWidth = 0;
let lukWidth = 0;

// Add Strength (in Increments) on click of Stat Bar
function addStr() {
  let strengthFrame = document.getElementById("strFrame");
  let strengthBar = document.getElementById("strBar");
  
  strengthFrame.addEventListener('click', function(ev) {
    if (ev.target.id === "strFrame") {
      if (strWidth < 25) {
        strengthFrame.onclick (
        strWidth += 1 ,
        console.log(strWidth) ,
        strengthBar.style.width = strWidth + "%" ,
        strengthBar.style.backgroundColor = "rgb(180, 92, 173)"
        )
        console.log("Strength added");
      }
      else {
        console.log("Strength is at max");
        return;
      }
    }
  })
};

// Add Vitality
function addVit() {
  let vitalityFrame = document.getElementById("vitFrame");
  let vitalityBar = document.getElementById("vitBar");

  vitalityFrame.addEventListener('click', function(e) {
    if (e.target.id === "vitFrame") {
      if (vitWidth < 25) {
        vitalityFrame.onclick (
        vitWidth += 1 ,
        console.log(vitWidth) ,
        vitalityBar.style.width = vitWidth + "%" ,
        vitalityBar.style.backgroundColor = "rgb(180, 92, 173)"
        )
        console.log("Vitality added");
      }
      else {
        console.log("Vitality is maxed");
        return;
      }
    }
  })
};

// Add Agility
function addAgi() {
  let agilityFrame = document.getElementById("agiFrame");
  let agilityBar = document.getElementById("agiBar");

  agilityFrame.addEventListener('click', function(e) {
    if (e.target.id === "agiFrame") {
      if (agiWidth < 25) {
        agilityFrame.onclick (
        agiWidth += 1 ,
        console.log(agiWidth) ,
        agilityBar.style.width = agiWidth + "%" ,
        agilityBar.style.backgroundColor = "rgb(180, 92, 173)"
        )
        console.log("Agility added");
      }
      else {
        console.log("Agility is at max");
        return;
      }
    }
  })
};

// Add Intelligence
function addInt() {
  let intelligenceFrame = document.getElementById("intFrame");
  let intelligenceBar = document.getElementById("intBar");

  intelligenceFrame.addEventListener('click' , function(e) {
    if (e.target.id === "intFrame") {
      if (intWidth < 25) {
        intelligenceFrame.onclick (
          intWidth += 1 ,
          console.log(intWidth) ,
          intelligenceBar.style.width = intWidth + "%" ,
          intelligenceBar.style.backgroundColor = "rgb(180, 92, 173)" ,
          console.log("Intelligence added") ,
          )
      } else {
        console.log("Intelligence is at max");
        return;
      }
    }
  })
};

// Add Luck
function addLuck() {
  let luckFrame = document.getElementById("lukFrame");
  let luckBar = document.getElementById("lukBar");

  luckFrame.addEventListener('click', function(e) {
    if (e.target.id === "lukFrame") {
      if (lukWidth < 25) {
        luckFrame.onclick (
        lukWidth += 1 ,
        console.log(lukWidth) ,
        luckBar.style.width = lukWidth + "%" ,
        luckBar.style.backgroundColor = "rgb(180, 92, 173)"
        )
        console.log("Luck added");
      }
      else {
        console.log("Luck is at max");
        return;
      }
    }
  })
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
