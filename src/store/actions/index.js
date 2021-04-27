import { types } from "../types";

export const handleScore = () => (dispatch) => {
    dispatch({ type: types.SET_SCORE })
};

export const setShowScore = () => (dispatch) => {
    dispatch({ type: types.SHOW_SCORE })
}

export const restartQuizRedux = () => (dispatch) => {
    dispatch({ type: types.RESTART_QUIZ })
}