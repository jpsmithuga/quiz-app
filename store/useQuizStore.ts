
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface State {
  answers: Record<string, number>
  flags: Record<string, boolean>
  setAnswer: (id: string, choice: number) => void
  toggleFlag: (id: string) => void
  reset: () => void
}

export const useQuizStore = create<State>()(
  persist(
    (set, get) => ({
      answers: {},
      flags: {},
      setAnswer: (id, choice) =>
        set(state => ({ answers: { ...state.answers, [id]: choice } })),
      toggleFlag: id =>
        set(state => ({ flags: { ...state.flags, [id]: !state.flags[id] } })),
      reset: () => set({ answers: {}, flags: {} })
    }),
    { name: 'quiz-store' }
  )
)
