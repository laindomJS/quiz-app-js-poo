// @ts-check
import { $ } from '../helpers/element.js';
import { c } from '../helpers/element.js'; 

export class UI {
    // constructor(){}

    /**
     * 
     * @param {string} text the text to render in the element with the id question
     */
    showQuestion(text) {
        const questionTitle = $('#question'); 
        questionTitle.innerText = text;
    }
 
    /**
     * 
     * @param {string[]} choices the choices to render in the element with the id choices  
     * @param {Function} callback the function to add a custom event to all 
    */
    showChoices(choices, callback) {
        const choicesContainer = $('#choices');
        choicesContainer.innerHTML = '';

        for(let i = 0; i < choices.length; i++) {
            const button = c('button');
            button.className = 'btn';
            button.innerText = choices[i];
            button.addEventListener("click",() => callback(choices[i]));

            choicesContainer.append(button);
        }
    }

    /**
     * 
     * @param {number} score the total score of the user 
     */
    showScores(score) {
        const quizEndHtML = `
            <h1>Results:</h1>
            <h2>Your Score: ${score}</h2>
        `
        const quizEndContainer = $('#quiz');
        quizEndContainer.innerHTML = quizEndHtML;
    }

    /**
     * 
     * @param {number} current the current index of the quiz 
     * @param {number} total the total of questions in the data 
     */
    showProgress(current, total) {
        const progress = $('#progress');
        progress.innerHTML = `Question ${current} of ${total}`;
    }
}