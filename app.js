// @ts-check
import { mapedQuestions } from './data/questions.js';
import { Quiz } from './models/Quiz.js';
import { UI } from './models/UI.js';

/**
 * 
 * @param {Quiz} quiz the class quiz with the logic of the application
 * @param {UI} ui class for interactive with the ui 
 */
const renderPage = (quiz, ui) => {
   if(quiz.isEnded()) {
        ui.showScores(quiz.score);
   } else {
        ui.showQuestion(quiz.getQuestionIndex().text);
        ui.showChoices(quiz.getQuestionIndex().choices, (currentChoice) => {
        quiz.guess(currentChoice);
        renderPage(quiz, ui);
    });
   }
   ui.showProgress(quiz.questionIndex + 1, quiz.questions.length);
}

function main() {
    const quiz = new Quiz(mapedQuestions);
    const ui = new UI();

    renderPage(quiz, ui);

}
main()