// ram libre
// require : aller chercher un module (natif, c-à-d fournis avec node.js, ou externe, comme sass)
const osModule = require('os');
const freeMemory = osModule.freemem();
console.log(`Il y a ${freeMemory} bytes de libre`);

// ram totale
const totalMemory = osModule.totalmem();
console.log(`Il y a ${totalMemory} bytes au total`);

// os version
console.log(osModule.version());

// % de mémoire libre
function freeMemoryPercent() {
  let percentMemory = 100 * freeMemory / totalMemory;
  console.log(`Il y a ${percentMemory}% de libre`);
}

// en fléchée
const myFreeMemoryPercent = (free, total) => {
  let percent = 100 * free / total;
  console.log(`${Math.round(percent)}% de RAM libre`);
  //return Math.round(percent);
};

freeMemoryPercent();
console.log(myFreeMemoryPercent(freeMemory, totalMemory), '% libres');

// l'afficher toutes les 5s avec setInterval()
const intervalFreeMemory = () => {
  setInterval(myFreeMemoryPercent, 5000, freeMemory, totalMemory);
};
//intervalFreeMemory();

// plus simplement :
//setInterval(myFreeMemoryPercent, 5000, osModule.freemem(), osModule.totalmem());


// l'afficher toutes les 5s avec setTimeout() en recursive
let count = 0;

function eventShowMemory() {
  if (count < 10) {
    myFreeMemoryPercent(osModule.freemem(), osModule.totalmem());
    count++;
    console.log(count);
    setTimeout(eventShowMemory, 5000);
  }
}
//eventShowMemory();

// on crée un interface de discussion via le terminal
// process.stdin : canal d'écoute // process.stdout canal de réponse
const readLine = require('readline');
// on peut importer de façon dynamique comme ça :
//import readLine from 'readline';
var RL = readLine.createInterface(process.stdin, process.stdout);

// 1. on dit bonjour
RL.question('Bonjour, quel est votre nom ?', (name) => {
  console.log(name);
  // 2. initier la conversation
  RL.question(`Comment ça va aujourd\'hui ${name}?`, (reponse) => {
    console.log(reponse);
  });
});

// pour le moment, si on veut que 2. soit executé, il faut le mettre dans 1. sinon ça reste bloqué sur 1.

console.log('1');


console.log('2');
console.log('3');

const askQuestion = (question) => {
  RL.question(question, (reponse) => {
    console.log(reponse);
  });
};