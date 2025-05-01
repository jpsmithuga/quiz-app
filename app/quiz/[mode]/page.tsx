
import questions from '@/app/data/questions.json'
import { QuizItem } from '@/app/types'
import dynamic from 'next/dynamic'
import Link from 'next/link'

const QuestionCard = dynamic(() => import('@/app/components/QuestionCard'), { ssr: false })

export default function QuizPage({ params }: { params: { mode: string } }) {
  const items = (questions as QuizItem[]).filter(q =>
    params.mode === 'comprehensive'
      ? true
      : q.category.toLowerCase().replace(/\s+/g, '-') === params.mode
  )

  return (
    <main className='max-w-3xl mx-auto p-4 space-y-8'>
      <Link href='/' className='underline'>← Back</Link>
      {items.length === 0 && <p>No questions found for this section yet.</p>}
      {items.map(item => <QuestionCard key={item.id} item={item} />)}
    </main>
  )
}
