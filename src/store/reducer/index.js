import { types } from "../types"

const initialState = {
    questions: [
        {
            questionText: 'What is the capital of England?',
            answerOptions: [
                { answerText: 'New York', isCorrect: false },
                { answerText: 'London', isCorrect: true },
                { answerText: 'Paris', isCorrect: false },
                { answerText: 'Dublin', isCorrect: false },
            ],
        },
        {
            questionText: 'Who is CEO of Tesla?',
            answerOptions: [
                { answerText: 'Jeff Bezos', isCorrect: false },
                { answerText: 'Elon Musk', isCorrect: true },
                { answerText: 'Bill Gates', isCorrect: false },
                { answerText: 'Tony Stark', isCorrect: false },
            ],
        },
        {
            questionText: 'The iPhone was created by which company?',
            answerOptions: [
                { answerText: 'Apple', isCorrect: true },
                { answerText: 'Intel', isCorrect: false },
                { answerText: 'Amazon', isCorrect: false },
                { answerText: 'Microsoft', isCorrect: false },
            ],
        },
        {
            questionText: 'How many Harry Potter books are there?',
            answerOptions: [
                { answerText: '1', isCorrect: false },
                { answerText: '4', isCorrect: false },
                { answerText: '6', isCorrect: false },
                { answerText: '7', isCorrect: true },
            ],
        },
        {
            questionText: 'What is the real name of Batman?',
            answerOptions: [
                { answerText: 'Tony Stark', isCorrect: false },
                { answerText: 'Clark Kent', isCorrect: false },
                { answerText: 'Bruce Wayne', isCorrect: true },
                { answerText: 'Bruce Banner', isCorrect: false },
            ],
        },
        {
            questionText: 'What metal is iron man suit is made of?',
            answerOptions: [
                { answerText: 'Vibranium', isCorrect: false },
                { answerText: 'Adamantium', isCorrect: false },
                { answerText: 'Gold Alloy', isCorrect: true },
                { answerText: 'Iron', isCorrect: false },
            ],
        },
        {
            questionText: 'What was the most downloaded app of 2020?',
            answerOptions: [
                { answerText: 'Tik Tok', isCorrect: true },
                { answerText: 'Facebook', isCorrect: false },
                { answerText: 'PUBG', isCorrect: false },
                { answerText: 'Whatsapp', isCorrect: false },
            ],
        },
        {
            questionText: 'Who was the second king of Ottoman Empire?',
            answerOptions: [
                { answerText: 'Osman', isCorrect: false },
                { answerText: 'Adbul Hamid', isCorrect: false },
                { answerText: 'Mehmed', isCorrect: false },
                { answerText: 'Orhan', isCorrect: true },
            ],
        },
        {
            questionText: 'How many pounds are in a stone?',
            answerOptions: [
                { answerText: '10', isCorrect: false },
                { answerText: '12', isCorrect: false },
                { answerText: '14', isCorrect: true },
                { answerText: '16', isCorrect: false },
            ],
        },
        {
            questionText: 'In Greek mythology, Perseus slays which monster with snakes for hair?',
            answerOptions: [
                { answerText: 'Zeus', isCorrect: false },
                { answerText: 'Medusa', isCorrect: true },
                { answerText: 'Kraken', isCorrect: false },
                { answerText: 'Ares', isCorrect: false },
            ],
        },
    ],
    score: 0,
    showScore: false,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.RESTART_QUIZ:
            return { ...state, score: 0, showScore: false }

        case types.SET_SCORE:
            return { ...state, score: state.score + 1 }

        case types.SHOW_SCORE:
            return { ...state, showScore: true }

        default:
            return state
    }
}

export default reducer
