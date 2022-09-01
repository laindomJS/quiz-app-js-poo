// @ts-check
export class Question {
    /**
     * 
     * @param {string} text the question in stirng format
     * @param {string[]} choices the array of choices to validate with the answer
     * @param {string} answer the answer to validate
     */
    constructor(text, choices, answer) { 
        this.text = text;
        this.choices = choices;
        this.answer = answer;
    }

    /**
     * 
     * @param {string} choice the choice of the user to validate
     * @returns {boolean} false if the choice is not true. (obviusly)
     */
    correctAnswer(choice) {
        return choice === this.answer;
    }
}

