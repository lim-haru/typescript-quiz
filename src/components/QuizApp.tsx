import React, { useState } from "react"
import { Question, questions } from "../data"
import QuizStart from "./QuizStart"
import QuizEnd from "./QuizEnd"

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
      <div key={index}>
        <h2>{questionText}</h2>
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
                {option}
              </label>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  return (
    <div>
      <h1>Quiz App</h1>
      {!quizStarted ? (
        <QuizStart onStartQuiz={() => setQuizStarted(true)} totalQuestions={questions.length} />
      ) : currentQuestion < questions.length ? (
        <>
          {renderQuestion(questions[currentQuestion], currentQuestion)}
          <button onClick={handleNextQuestion} disabled={selectedOptionIndex === null}>
            {currentQuestion + 1 === questions.length ? "Fine" : "Prossimo"}
          </button>
        </>
      ) : (
        <QuizEnd score={score} totalQuestions={questions.length} onRestartQuiz={handleRestartQuiz} />
      )}
    </div>
  )
}
