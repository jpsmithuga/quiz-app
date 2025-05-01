
export type QuizItem = {
  id: string
  question: string
  choices: string[]
  answerIndices: number[]
  explanation?: string
  category: string
  source: string
}
