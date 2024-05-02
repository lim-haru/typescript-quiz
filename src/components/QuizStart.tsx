import React from "react"

type onStartQuizProps = {
  onStartQuiz: () => void
  totalQuestions: number
}

export default function QuizStart(props: onStartQuizProps) {
  return (
    <div>
      <h2>Benvenuto al Quiz sul Turismo Sostenibile!</h2>
      <p>
        Questo quiz è progettato per testare le tue conoscenze sul turismo sostenibile e per aiutarti a comprendere l'importanza
        di viaggiare in modo responsabile per preservare l'ambiente e sostenere le comunità locali. Il quiz consiste in{" "}
        {props.totalQuestions} domande a risposta multipla.
      </p>
      <button onClick={props.onStartQuiz}>Inizia!</button>
    </div>
  )
}
