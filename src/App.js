import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { handleScore, setShowScore, restartQuizRedux } from './store/actions'


function App() {

  const dispatch = useDispatch()

  const questions = useSelector(({ state }) => state.questions)
  const score = useSelector(({ state }) => state.score)
  const showScore = useSelector(({ state }) => state.showScore)

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isAnswerSelected, setAnswerSelection] = useState(false);
  const [selectedAns, setSelectedAnswer] = useState([]);
  const [seconds, setSeconds] = useState(10);

  let timer = null;

  useEffect(() => {
    if (seconds > 0 && (currentQuestion) !== questions.length && !showScore) {
      timer = setTimeout(() => setSeconds(seconds - 1), 1000);
      // timer()
    } else {
      if ((currentQuestion + 1) < questions.length) {
        handleAnswerOptionClick(false, null)
        showNextQuestion()
      }
    }
  }, [seconds])

  const handleAnswerOptionClick = (isCorrect, idx) => {
    if (isCorrect) {
      dispatch(handleScore())
    }
    setAnswerSelection(true)
    let selectAns = [...selectedAns]
    if (selectAns.length) {
      selectAns.splice(currentQuestion, 1, idx)
      console.log(selectAns)
    } else {
      selectAns.push(idx)
      console.log(selectAns)
    }
    setSelectedAnswer(selectAns)
  };

  // const removeSelected = async () => {
  //   let selectedAns = null;

  //   await questions[currentQuestion].answerOptions.map((value, idx) => {
  //     if (value.selected === true) {
  //       selectedAns = idx
  //       alert(idx)
  //     } else {
  //       selectedAns = null
  //     }
  //   })

  //   console.log(selectedAns)
  //   if (selectedAns) {
  //     console.log(selectedAns)
  //     questions[currentQuestion].answerOptions[selectedAns] = { ...questions[currentQuestion].answerOptions[selectedAns], selected: false }
  //   }
  // }


  // const showNextQuestion = () => {
  //   const nextQuestion = currentQuestion + 1;
  //   if (nextQuestion < questions.length) {
  //     setCurrentQuestion(nextQuestion);
  //   } else {
  //     dispatch(setShowScore())
  //   }
  // }

  const showNextQuestion = () => {
    // if (selectedAns.length !== currentQuestion && selectedAns.length > currentQuestion) {
    setAnswerSelection(false)
    clearTimeout(timer)
    setSeconds(10)
    // }
    // setSelectedAnswer([])
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      dispatch(setShowScore())
    }
  }

  const showPrevQuestion = () => {
    // setSelectedAnswer([])
    const prevQuestion = currentQuestion - 1;
    if (prevQuestion < questions.length) {
      setCurrentQuestion(prevQuestion);
    }
  }

  const restartQuiz = () => {
    setCurrentQuestion(0)
    setAnswerSelection(false)
    setSelectedAnswer([])
    setSeconds(10)
    dispatch(restartQuizRedux())
  }

  return (
    <>
      <h3>{!showScore && seconds}</h3>
      <div className='app'>
        {showScore ? (
          <div className='score-section'>
            You scored {score} out of {questions.length}
          </div>
        ) : (
          <>
            <div className='question-section'>
              <div className='question-count'>
                <span>Question {currentQuestion + 1}</span>/{questions && questions.length}
              </div>
              <div className='question-text'>{questions && questions[currentQuestion].questionText}</div>
            </div>
            <div className='answer-section'>
              {questions && questions[currentQuestion].answerOptions.map((answerOption, idx) => (
                <button className={`${selectedAns[currentQuestion] === idx && "selected"}`} onClick={() => handleAnswerOptionClick(answerOption.isCorrect, idx)} key={idx}>{answerOption.answerText}</button>
              ))}

            </div>
          </>
        )}
      </div>
      <div className="btn-align">
        {
          (selectedAns.length && currentQuestion !== 0 && !showScore) ?
            <button onClick={() => showPrevQuestion()}>Prev</button>
            :
            null
        }
        {
          ((isAnswerSelected || selectedAns.length > currentQuestion) && !showScore) ?
            <button onClick={() => showNextQuestion()}>Next</button>
            :
            null
        }
        {
          (showScore) ?
            <button onClick={() => restartQuiz()}>Restart Quiz</button>
            :
            null
        }
      </div>
    </>
  );
}

export default App;
