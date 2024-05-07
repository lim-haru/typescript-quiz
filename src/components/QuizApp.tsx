import React, { useState } from "react"
import { Question, questions } from "../data"
import QuizStart from "./QuizStart"
import QuizEnd from "./QuizEnd"
import style from "../style/QuizApp.module.css"
import SEO from "../SEO"

export default function QuizApp() {
  const [quizStarted, setQuizStarted] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(null)
  const [score, setScore] = useState<number>(0)

  const handleNextQuestion = () => {
    if (selectedOptionIndex !== null && selectedOptionIndex === questions[currentQuestion].correctOptionIndex) {
      setScore((prevScore) => prevScore + 1)
    }

    setCurrentQuestion(currentQuestion + 1)
    setSelectedOptionIndex(null)
  }

  const handleRestartQuiz = () => {
    setQuizStarted(false)
    setCurrentQuestion(0)
    setScore(0)
  }

  const renderQuestion = (question: Question, index: number) => {
    const { questionText, options } = question

    return (
      <div key={index} className={style.question}>
        <h2 className="mb-5 ">{questionText}</h2>
        <ul>
          {options.map((option, optionIndex) => (
            <li key={optionIndex}>
              <label>
                <input
                  type="radio"
                  name={`question${index}`}
                  value={option}
                  checked={selectedOptionIndex === optionIndex}
                  onChange={() => setSelectedOptionIndex(optionIndex)}
                />
                <span>{option}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  return (
    <>
      <SEO
        title="Quiz App sul Turismo Sostenibile"
        description="Benvenuto nella mia QuizApp creata con Typescript! Testa le tue conoscenze sul turismo sostenibile e comprendi l'importanza di viaggare in modo responsabile."
        url="https://lim-haru.github.io/typescript-quiz"
        type="website"
      />
      <div className={`${style.QuizApp} d-flex flex-column justify-content-center align-items-center p-sm-5`}>
        {!quizStarted ? (
          <QuizStart onStartQuiz={() => setQuizStarted(true)} totalQuestions={questions.length} />
        ) : currentQuestion < questions.length ? (
          <>
            <div className={`${style.progressBar} progress`}>
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                aria-valuenow={25}
                aria-valuemin={0}
                aria-valuemax={100}
              ></div>
            </div>
            {renderQuestion(questions[currentQuestion], currentQuestion)}
            <div className="d-flex w-100 justify-content-end mt-4 me-5">
              <button className={style.button} onClick={handleNextQuestion} disabled={selectedOptionIndex === null}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"></path>
                </svg>

                <div className={style.btnText}>{currentQuestion + 1 === questions.length ? "Fine" : "Prossimo"}</div>
              </button>
            </div>
          </>
        ) : (
          <QuizEnd score={score} totalQuestions={questions.length} onRestartQuiz={handleRestartQuiz} />
        )}
      </div>
    </>
  )
}
