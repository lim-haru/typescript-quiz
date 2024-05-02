export type Question = {
  questionText: string
  options: string[]
  correctOptionIndex: number
}

export const questions: Question[] = [
  {
    questionText: "Qual è uno dei principali obiettivi del turismo sostenibile?",
    options: [
      "Aumentare il consumo di risorse naturali",
      "Minimizzare l'impatto ambientale e culturale",
      "Promuovere la monocultura",
      "Escludere la partecipazione locale",
    ],
    correctOptionIndex: 1,
  },
  {
    questionText: 'Cosa si intende per "carbon offsetting" nel contesto del turismo sostenibile?',
    options: [
      "Misurare la quantità di emissioni di carbonio dei turisti",
      "Ridurre le emissioni di carbonio dei mezzi di trasporto",
      "Compensare le emissioni di carbonio con azioni come piantare alberi",
      "Aumentare le emissioni di carbonio per motivi educativi",
    ],
    correctOptionIndex: 2,
  },
  {
    questionText: "Qual è un esempio di turismo sostenibile?",
    options: [
      "Crociere che gettano rifiuti in mare",
      "Hotel che utilizzano energia rinnovabile",
      "Tour che danneggiano siti storici",
      "Trasporto aereo non regolamentato",
    ],
    correctOptionIndex: 1,
  },
  {
    questionText: 'Cosa significa "turismo responsabile"?',
    options: [
      "Viaggiare in modo che benefichi sia i visitatori che le comunità locali",
      "Viaggiare senza rispettare le culture locali",
      "Non considerare l'impatto ambientale",
      "Viaggiare esclusivamente in resort di lusso",
    ],
    correctOptionIndex: 0,
  },
  {
    questionText: "Qual è un esempio di conservazione culturale nel contesto del turismo sostenibile?",
    options: [
      "Costruire grandi resort su siti storici",
      "Ignorare le norme locali",
      "Promuovere solo cibo internazionale nei ristoranti",
      "Proteggere e valorizzare tradizioni locali",
    ],
    correctOptionIndex: 3,
  },
  {
    questionText: "Cos'è l'\"ecoturismo\"?",
    options: [
      "Viaggiare esclusivamente in città",
      "Viaggiare in modo da rispettare l'ambiente e supportare le comunità locali",
      "Viaggiare solo per affari",
      "Viaggiare senza preoccupazioni ambientali",
    ],
    correctOptionIndex: 1,
  },
  {
    questionText: "Qual è un esempio di riduzione dell'impatto ambientale nel turismo?",
    options: [
      "Utilizzare plastica monouso in hotel e ristoranti",
      "Promuovere il trasporto su autovetture individuali",
      "Utilizzare energia rinnovabile per le strutture turistiche",
      "Ignorare la gestione dei rifiuti",
    ],
    correctOptionIndex: 2,
  },
  {
    questionText: 'Cosa significa "turismo comunitario"?',
    options: [
      "Viaggiare esclusivamente in grandi gruppi",
      "Coinvolgere e beneficiare delle comunità locali durante i viaggi",
      "Evitare il contatto con le comunità locali",
      "Viaggiare senza rispetto per le persone del luogo",
    ],
    correctOptionIndex: 1,
  },
  {
    questionText: "Qual è uno dei vantaggi del turismo sostenibile?",
    options: [
      "Riduzione della biodiversità",
      "Aumento delle risorse idriche",
      "Maggiore coinvolgimento delle comunità locali",
      "Promozione della speculazione immobiliare",
    ],
    correctOptionIndex: 2,
  },
  {
    questionText: "Come può contribuire un turista al turismo sostenibile?",
    options: [
      "Ignorando le norme locali e culturali",
      "Lasciando rifiuti ovunque",
      "Soggiornando solo in grandi catene alberghiere",
      "Rispettando l'ambiente e le tradizioni locali",
    ],
    correctOptionIndex: 3,
  },
]
