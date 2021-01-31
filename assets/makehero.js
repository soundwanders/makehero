// js

// --- STATS ---

// --- Create Empty Variables for Each Stat ---
// numbers are used to manipulate width of stat bars
// to show addition and removal of stat points
let strength = 0;
let vitality = 0;
let agility = 0;
let intelligence = 0;
let luck = 0;

// --- Add Event Listeners to Stat Bars ---

  // Strength
  // get empty Strength stat bar frame, serves as skeleton
  // displays on screen same style as if stats were empty/equal to 0
  const strengthFrame = document.getElementById("strFrame");
  // run function addStr to add Strength points when stat bar is clicked
  strengthFrame.addEventListener('click', addStr);
  strengthFrame.addEventListener('contextmenu', subtractStr);

  // Vitality
  const vitalityFrame = document.getElementById("vitFrame");
  vitalityFrame.addEventListener('click', addVit);
  vitalityFrame.addEventListener('contextmenu', subtractVit);

  // Agility
  const agilityFrame = document.getElementById("agiFrame");
  agilityFrame.addEventListener('click', addAgi);
  agilityFrame.addEventListener('contextmenu', subtractAgi);

  // Intelligence
  const intelligenceFrame = document.getElementById("intFrame");
  intelligenceFrame.addEventListener('click', addInt);
  intelligenceFrame.addEventListener('contextmenu', subtractInt);

  // Luck
  const luckFrame = document.getElementById("lukFrame");
  luckFrame.addEventListener('click', addLuk);
  luckFrame.addEventListener('contextmenu', subtractLuk);
//

// --- Add Event Listeners to Stat Buttons ---

  // Increase Strength Button
    const upStr = document.getElementById("upStr");
    upStr.addEventListener('click', addStr);

  // Decrease Strength Button
    const downStr = document.getElementById("downStr");
    downStr.addEventListener('click', subtractStr);

  // Increase Vitality Button
    const upVit = document.getElementById("upVit");
    upVit.addEventListener('click', addVit);

  // Decrease Vitality Button
    const downVit = document.getElementById("downVit");
    downVit.addEventListener('click', subtractVit);

  // Increase Agility Button
    const upAgi = document.getElementById("upAgi");
    upAgi.addEventListener('click', addAgi);

  // Decrease Agility Button
    const downAgi = document.getElementById("downAgi");
    downAgi.addEventListener('click', subtractAgi);

  // Increase Intelligence Button
    const upInt = document.getElementById("upInt");
    upInt.addEventListener('click', addInt);

  // Decrease Intelligence Button
    const downInt = document.getElementById("downInt");
    downInt.addEventListener('click', subtractInt);

  // Increase Luck Button
    const upLuk = document.getElementById("upLuk");
    upLuk.addEventListener('click', addLuk);

  // Decrease Luck Button
    const downLuk = document.getElementById("downLuk");
    downLuk.addEventListener('click', subtractLuk);
//

// --- FUNCTIONS ---
// --- Add Stats ---

  // Add Strength
  function addStr() {
    // get empty strength stat bar div
    // bar remains "empty" until user adds stats
    let strengthBar = document.getElementById("strBar");

    // while width is less than max width (30%) , add increments of 3
    // and change display, width, background color of the strength bar
    // to represent the strength stat being increased
    while (strength < 30) {
      strength += 3;
      strengthBar.style.width = strength + "%" ,
      strengthBar.style.display = "inline";
      strengthBar.style.backgroundImage = "linear-gradient(#ffee10, #fff570)" ,
      strengthBar.style.opacity = "80%";
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
      vitalityBar.style.backgroundImage = "linear-gradient(#ffee10, #fff570)" ,
      vitalityBar.style.opacity = "80%";
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
      agilityBar.style.backgroundImage = "linear-gradient(#ffee10, #fff570)" ,
      agilityBar.style.opacity = "80%";
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
      intelligenceBar.style.backgroundImage = "linear-gradient(#ffee10, #fff570)" ,
      intelligenceBar.style.opacity = "80%";
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
      luckBar.style.backgroundImage = "linear-gradient(#ffee10, #fff570)" ,
      luckBar.style.opacity = "80%";
      console.log("Increased Luck");
      console.log(luck);
      return;
    }
    if (luck >= 30) {
      console.log("Maxed Luck");
    }
  };
//

// --- Subtract Stats ---

  // Subtract Strength
  function subtractStr(e) {
    let strengthBar = document.getElementById("strBar");
    e.preventDefault();

    while (strength > 0) {
      strength -= 3;
      strengthBar.style.display = "inline";
      strengthBar.style.width = strength + "%" ,
      strengthBar.style.opacity = "80%";
      console.log("Decreased Strength");
      console.log(strength);
      return;
    }
    if (strength == 0) {
      strengthBar.style.display = "none";
      console.log("Zero Strength");
    }
  };

  // Subtract Vitality
  function subtractVit(e) {
    let vitalityBar = document.getElementById("vitBar");
    e.preventDefault();

    while (vitality > 0) {
      vitality-= 3;
      vitalityBar.style.display = "inline";
      vitalityBar.style.width = vitality + "%" ,
      vitalityBar.style.opacity = "80%";
      console.log("Decreased Vitality");
      console.log(vitality);
      return;
    }
    if (vitality <= 0) {
      vitalityBar.style.display = "none";
      console.log("Zero Vitality");
    }
  };

  // Subtract Agility
  function subtractAgi(e) {
    let agilityBar = document.getElementById("agiBar");
    e.preventDefault();

    while (agility > 0) {
      agility -= 3;
      agilityBar.style.display = "inline";
      agilityBar.style.width = agility + "%" ,
      agilityBar.style.opacity = "80%";
      console.log("Decreased Agility");
      console.log(agility);
      return;
    }
    if (agility <= 0) {
      agilityBar.style.display = "none";
      console.log("Zero Agility");
    }
  };

  // Subtract Intelligence
  function subtractInt(e) {
    let intelligenceBar = document.getElementById("intBar");
    e.preventDefault();

    while (intelligence > 0) {
      intelligence -= 3;
      intelligenceBar.style.display = "inline";
      intelligenceBar.style.width = intelligence + "%" ,
      console.log("Decreased Intelligence");
      console.log(intelligence);
      return;
    }
    if (intelligence <= 0) {
      intelligenceBar.style.display = "none";
      console.log("Zero Intelligence");
    }
  };

  // Subtract Luck
  function subtractLuk(e) {
    let luckBar = document.getElementById("lukBar");
    e.preventDefault();

    while (luck > 0) {
      luck -= 3;
      luckBar.style.display = "inline";
      luckBar.style.width = luck + "%" ,
      console.log("Decreased Luck");
      console.log(luck);
      return;
    }
    if (luck <= 0) {
      luckBar.style.display = "none";
      console.log("Zero Luck");
    }
  };

// Change Hero Display Depending on Selected Class

  // Get Hero Body Parts
    // let alcHead = document.getElementById("alchemistHead");

    let gladHead = document.getElementById("gladiatorHead");

    let samHead = document.getElementById("samuraiHead");
    let samBody = document.getElementById("samuraiBody");

    let ninHead = document.getElementById("ninjaHead");
    let ninBody = document.getElementById("ninjaBody");

// --- TOGGLE HERO DISPLAY FUNCTIONS ---

  // Toggle Alchemist display

  // Toggle Gladiator display
    const gladiatorBtn = document.getElementById("gladiatorBtn");

    gladiatorBtn.addEventListener('click', function toggleGladiator() {
      gladHead.style.display = "block";

      samHead.style.display = "none";
      samBody.style.display = "none";

      ninHead.style.display = "none";
      ninBody.style.display = "none";

    }, false);

  // Toggle Ninja display
    const ninjaBtn = document.getElementById("ninjaBtn");
    
    ninjaBtn.addEventListener('click', function toggleNinja() {
      ninHead.style.display = "block";
      ninBody.style.display = "block";
      
      gladHead.style.display = "none";

      samHead.style.display = "none";
      samBody.style.display = "none";
    }, false);

  // Toggle Samurai display
    const samuraiBtn = document.getElementById("samuraiBtn");
    
    samuraiBtn.addEventListener('click', function toggleSamurai() {
      samHead.style.display = "block";
      samBody.style.display = "block";


      gladHead.style.display = "none";

      ninHead.style.display = "none";
      ninBody.style.display = "none";
    }, false);
