
import Link from 'next/link'

const sections = [
  'Sitework','Concrete','Masonry','Metals','Carpentry',
  'Roofing','Associated Trades','Business & Law','Safety','Codes',
  'One Call','Erosion & Sedimentation','Licensing','Liens','Sports Fields',
  'Comprehensive'
]

export default function Home() {
  return (
    <main className='p-8 max-w-xl mx-auto'>
      <h1 className='text-3xl font-bold mb-6 text-center'>Construction Quiz</h1>
      <div className='grid grid-cols-2 gap-4'>
        {sections.map(sec => (
          <Link key={sec} href={'/quiz/' + sec.toLowerCase().replace(/\s+/g,'-')}>
            <div className='border rounded p-4 hover:bg-gray-100 text-center'>{sec}</div>
          </Link>
        ))}
      </div>
    </main>
  )
}
