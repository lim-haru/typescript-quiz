import React from "react"

type onStartQuizProps = {
  onStartQuiz: () => void
  totalQuestions: number
}

export default function QuizStart(props: onStartQuizProps) {
  return (
    <div className="d-flex flex-column align-items-center">
      <h2 className="mb-4">Benvenuto al Quiz sul Turismo Sostenibile!</h2>
      <p className="fs-5 mb-5 px-0 px-sm-3 px-md-5">
        Questo quiz è progettato per testare le tue conoscenze sul turismo sostenibile e per aiutarti a comprendere l'importanza
        di viaggiare in modo responsabile per preservare l'ambiente e sostenere le comunità locali. Il quiz consiste in{" "}
        {props.totalQuestions} domande a risposta multipla.
      </p>
      <button className="button" onClick={props.onStartQuiz}>
        Inizia!
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
