
'use client'
import { QuizItem } from '@/app/types'
import { useQuizStore } from '@/store/useQuizStore'
import clsx from 'clsx'

export default function QuestionCard({ item }: { item: QuizItem }) {
  const answer = useQuizStore(s => s.answers[item.id])
  const setAnswer = useQuizStore(s => s.setAnswer)
  const flagged = useQuizStore(s => s.flags[item.id])
  const toggleFlag = useQuizStore(s => s.toggleFlag)

  return (
    <div className='border rounded p-4 space-y-4'>
      <div className='flex justify-between items-start'>
        <p className='font-medium'>{item.question}</p>
        <button onClick={() => toggleFlag(item.id)} className='text-sm underline'>
          {flagged ? 'Unflag' : 'Flag'}
        </button>
      </div>
      {item.choices.map((choice, idx) => (
        <label key={idx} className='block'>
          <input
            type='radio'
            name={item.id}
            className='mr-2'
            checked={answer === idx}
            onChange={() => setAnswer(item.id, idx)}
          />
          {choice}
        </label>
      ))}
    </div>
  )
}
