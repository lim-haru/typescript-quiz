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
    <div>
      <h2>Quiz Completato!</h2>
      <p>
        Il tuo Punteggio: {props.score}/{props.totalQuestions}
      </p>
      <p>Livello di Abilità: {skillLevel}</p>
      <button onClick={props.onRestartQuiz}>Ricomincia</button>
    </div>
  )
}
