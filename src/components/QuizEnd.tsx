import React from "react"

type QuizEndProps = {
  score: number
  totalQuestions: number
  onRestartQuiz: () => void
}

type SkillLevel = "Principiante" | "Intermedio" | "Esperto" | "Maestro"

const getSkillLevel = (score: number): SkillLevel => {
  if (score <= 3) {
    return "Principiante"
  } else if (score >= 4 && score <= 6) {
    return "Intermedio"
  } else if (score >= 7 && score <= 9) {
    return "Esperto"
  } else {
    return "Maestro"
  }
}

export default function QuizEnd(props: QuizEndProps) {
  const skillLevel: SkillLevel = getSkillLevel(props.score)

  return (
    <div className="d-flex flex-column align-items-center">
      <h2 className="mb-4">Quiz Completato!</h2>
      <p className="fs-4">
        Il tuo Punteggio:{" "}
        <b>
          {props.score}/{props.totalQuestions}
        </b>
      </p>
      <p className="fs-4 mb-5">
        Livello di Abilità: <b>{skillLevel}</b>
      </p>
      <button className="button" onClick={props.onRestartQuiz}>
        Ricomincia
        <div className="icon">
          <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0h24v24H0z" fill="none"></path>
            <path
              d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </button>
    </div>
  )
}
