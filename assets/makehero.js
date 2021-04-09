// js

// _________________ STATS _________________  //

// --- Create Empty Variables for Each Stat ---
// numbers are used to manipulate width of stat bars
// to show addition and removal of stat points
let strength = 0;
let vitality = 0;
let agility = 0;
let intelligence = 0;
let luck = 0;

// _________________ Add Event Listeners to Stat Bars _________________  //

// Strength
// get empty Strength stat bar frame, serves as skeleton
// displays on screen same style as if stats were empty/equal to 0
const strengthFrame = document.getElementById('strFrame');
// run function addStr to add Strength points when stat bar is clicked
strengthFrame.addEventListener('click', addStr);
strengthFrame.addEventListener('contextmenu', subtractStr);

// Vitality
const vitalityFrame = document.getElementById('vitFrame');
vitalityFrame.addEventListener('click', addVit);
vitalityFrame.addEventListener('contextmenu', subtractVit);

// Agility
const agilityFrame = document.getElementById('agiFrame');
agilityFrame.addEventListener('click', addAgi);
agilityFrame.addEventListener('contextmenu', subtractAgi);

// Intelligence
const intelligenceFrame = document.getElementById('intFrame');
intelligenceFrame.addEventListener('click', addInt);
intelligenceFrame.addEventListener('contextmenu', subtractInt);

// Luck
const luckFrame = document.getElementById('lukFrame');
luckFrame.addEventListener('click', addLuk);
luckFrame.addEventListener('contextmenu', subtractLuk);
//

// --- Add Event Listeners to Stat Buttons ---

const statUpButtons = document.querySelectorAll('.upButton');
statUpButtons.forEach(upButton => upButton.addEventListener('click', function (e) { 
  switch (e.target.id) {
    case 'upStrength':
      addStr();
      break;

    case 'upVitality':
      addVit();
    break;

    case 'upAgility':
      addAgi();
      break;

    case 'upIntelligence':
      addInt();
      break;
    
    case 'upLuck':
      addLuk();
      break;
  }
}));


// Add event listener to each individual Stat Down Button because using switch statement to subtract stats...
// creates conflicts with e.preventDefault() and right click context menu
// Decrease Strength Button
const downStr = document.getElementById('downStrength');
downStr.addEventListener('click', subtractStr);

// Decrease Vitality Button
const downVit = document.getElementById('downVitality');
downVit.addEventListener('click', subtractVit);

// Decrease Agility Button
const downAgi = document.getElementById('downAgility');
downAgi.addEventListener('click', subtractAgi);

// Decrease Intelligence Button
const downInt = document.getElementById('downIntelligence');
downInt.addEventListener('click', subtractInt);

// Decrease Luck Button
const downLuk = document.getElementById('downLuck');
downLuk.addEventListener('click', subtractLuk);



// ___________ FUNCTIONS ___________ //
//  ADD STATS

// Add Strength
function addStr () {
  // get empty strength stat bar div
  // bar remains "empty" until user adds stats
  const strengthBar = document.getElementById('strBar');

  // if strength is 24 (max width) prevent additional strength
  if (strength >= 24) {
    strength = 24;
    console.log('Maxed Strength');
    return;
  }

  // if width is less than max width (24%) , add increments of 3
  // and change display, width, background color of the strength bar
  // to represent the strength stat being increased
  strength += 3;
  strengthBar.style.width = strength + '%';
  strengthBar.style.display = 'inline';
  strengthBar.style.backgroundImage = 'linear-gradient(#ffee10, #fff570)';
  strengthBar.style.opacity = '80%';
  console.log('Increased Strength');
  console.log(strength);
}

// Add Vitality
function addVit () {
  const vitalityBar = document.getElementById('vitBar');

  if (vitality >= 24) {
    vitality = 24;
    console.log('Maxed Vitality');
    return;
  }

  vitality += 3;
  vitalityBar.style.width = vitality + '%';
  vitalityBar.style.display = 'inline';
  vitalityBar.style.backgroundImage = 'linear-gradient(#ffee10, #fff570)';
  vitalityBar.style.opacity = '80%';
  console.log('Increased Vitality');
  console.log(vitality);
}

// Add Agility
function addAgi () {
  const agilityBar = document.getElementById('agiBar');

  if (agility >= 24) {
    agility = 24;
    console.log('Maxed Agility');
    return;
  }
  agility += 3;
  agilityBar.style.width = agility + '%';
  agilityBar.style.display = 'inline';
  agilityBar.style.backgroundImage = 'linear-gradient(#ffee10, #fff570)';
  agilityBar.style.opacity = '80%';
  console.log('Increased Agility');
  console.log(agility);
}

// Add Intelligence
function addInt () {
  const intelligenceBar = document.getElementById('intBar');

  if (intelligence >= 24) {
    intelligence = 24;
    console.log('Maxed Intelligence');
    return;
  }
  intelligence += 3;
  intelligenceBar.style.width = intelligence + '%';
  intelligenceBar.style.display = 'inline';
  intelligenceBar.style.backgroundImage = 'linear-gradient(#ffee10, #fff570)';
  intelligenceBar.style.opacity = '80%';
  console.log('Increased Intelligence');
  console.log(intelligence);
}

// Add Luck
function addLuk () {
  const luckBar = document.getElementById('lukBar');

  if (luck >= 24) {
    luck = 24;
    console.log('Maxed Luck');
    return;
  }
  luck += 3;
  luckBar.style.width = luck + '%';
  luckBar.style.display = 'inline';
  luckBar.style.backgroundImage = 'linear-gradient(#ffee10, #fff570)';
  luckBar.style.opacity = '80%';
  console.log('Increased Luck');
  console.log(luck);
}

// _________________Subtract Stats _________________ //

// Subtract Strength
function subtractStr (e) {
  e.preventDefault();
  const strengthBar = document.getElementById('strBar');

  if (strength <= 0) {
    strengthBar.style.display = 'none';
    strength = 0;
    console.log('Zero Strength');
    return;
  }
  strength -= 3;
  strengthBar.style.display = 'inline';
  strengthBar.style.width = strength + '%';
  strengthBar.style.opacity = '80%';
  console.log('Decreased Strength');
  console.log(strength);
  document.oncontextmenu = false;
}

// Subtract Vitality
function subtractVit (e) {
  e.preventDefault();
  const vitalityBar = document.getElementById('vitBar');

  if (vitality <= 0) {
    vitalityBar.style.display = 'none';
    vitality = 0;
    console.log('Zero Vitality');
    return;
  }
  vitality -= 3;
  vitalityBar.style.display = 'inline';
  vitalityBar.style.width = vitality + '%';
  vitalityBar.style.opacity = '80%';
  console.log('Decreased Vitality');
  console.log(vitality);
}

// Subtract Agility
function subtractAgi (e) {
  e.preventDefault();
  const agilityBar = document.getElementById('agiBar');

  if (agility <= 0) {
    agilityBar.style.display = 'none';
    agility = 0;
    console.log('Zero Agility');
    return;
  }
  agility -= 3;
  agilityBar.style.display = 'inline';
  agilityBar.style.width = agility + '%';
  agilityBar.style.opacity = '80%';
  console.log('Decreased Agility');
  console.log(agility);
}

// Subtract Intelligence
function subtractInt (e) {
  e.preventDefault();
  const intelligenceBar = document.getElementById('intBar');

  if (intelligence <= 0) {
    intelligenceBar.style.display = 'none';
    intelligence = 0;
    console.log('Zero Intelligence');
    return;
  }
  intelligence -= 3;
  intelligenceBar.style.display = 'inline';
  intelligenceBar.style.width = intelligence + '%';
  console.log('Decreased Intelligence');
  console.log(intelligence);
}

// Subtract Luck
function subtractLuk (e) {
  e.preventDefault();
  const luckBar = document.getElementById('lukBar');

  if (luck <= 0) {
    luckBar.style.display = 'none';
    luck = 0;
    console.log('Zero Luck');
    return;
  }
  luck -= 3;
  luckBar.style.display = 'inline';
  luckBar.style.width = luck + '%';
  console.log('Decreased Luck');
  console.log(luck);
}

// ____________ Choose Hero Display ; Depends on Selected Class _____________ //

// Get Heros
const gladiator = document.getElementById('gladiator');
const samurai = document.getElementById('samurai');
const ninja = document.getElementById('ninja');

// --- TOGGLE HERO FUNCTIONS --- //

// Toggle Gladiator display
const gladiatorBtn = document.getElementById('gladiatorBtn');

gladiatorBtn.addEventListener('click', function toggleGladiator () {
  gladiator.style.display = 'inline-block';

  samurai.style.display = 'none';
  ninja.style.display = 'none';
}, false);

// Toggle Ninja display
const ninjaBtn = document.getElementById('ninjaBtn');

ninjaBtn.addEventListener('click', function toggleNinja () {
  ninja.style.display = 'inline-block';

  gladiator.style.display = 'none';
  samurai.style.display = 'none';
}, false);

// Toggle Samurai display
const samuraiBtn = document.getElementById('samuraiBtn');

samuraiBtn.addEventListener('click', function toggleSamurai () {
  // display samurai
  samurai.style.display = 'inline-block';

  gladiator.style.display = 'none';
  ninja.style.display = 'none';
}, false);
