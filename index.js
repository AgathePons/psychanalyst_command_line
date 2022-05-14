const readLine = require('readline');
var RL = readLine.createInterface(process.stdin, process.stdout);

const questions = ["Dites m'en plus...", "Oui...Continuez...", "Hum hum...", "Très intéressant...", "Est-ce lié à votre enfance ?", "Et votre père ?"];
const reponses = [];

RL.question('Bonjour, quel est votre nom ?', (name) => {
  askQuestion(`Comment ça va aujourd'hui ${name} ?`);
});

let count = 0;
const askQuestion = (question) => {
  // je pose la question
  RL.question(question, (reponse) => {
    // j'enregistre la réponse
    console.log(reponse);
    reponses.push(reponse);
    // je pose la question suivante
    if (count === questions.length) {
      endConsultation();
    } else {
      // je pose la question suivante
      console.log('compteur:',count);
      askQuestion(questions[count]);
      // j'incrémonte le compteur
      count++;
    }
  });
};

const endConsultation = () => {
  // on va demander 70€
  console.log('Si je peux résumer...');
  //console.table(reponses);
  const summaryTable = [];
  for (const index in questions) {
    summaryTable.push({
      question: questions[index],
      reponse: reponses[index],
    });
  }
  console.table(summaryTable);
  console.log("Vous me devez 70€");
  console.log("Merci et à la semaine prochaine");
}
