
'use client'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

export default function ScoreChart({ data }: { data: { category: string, pct: number }[] }) {
  return (
    <ResponsiveContainer width='100%' height={300}>
      <BarChart data={data}>
        <XAxis dataKey='category' />
        <YAxis domain={[0, 1]} tickFormatter={v => (v * 100).toFixed(0) + '%'} />
        <Tooltip formatter={(v: any) => (v * 100).toFixed(0) + '%'} />
        <Bar dataKey='pct' />
      </BarChart>
    </ResponsiveContainer>
  )
}
