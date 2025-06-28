import Hero from '@/components/sections/Hero'
import Navigation from '@/components/layout/Navigation'
import FeedbackSystem from '@/components/ux/FeedbackSystem'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <FeedbackSystem />
      {/* Les autres sections seront ajoutées ici */}
    </main>
  )
}
