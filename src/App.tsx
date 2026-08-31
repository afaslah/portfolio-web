import { Contact } from './components/sections/Contact'
import { Experience } from './components/sections/Experience'
import { Hero } from './components/sections/Hero'
import { Projects } from './components/sections/Projects'
import { Footer } from './components/layout/Footer'
import { Header } from './components/layout/Header'

function App() {
  return (
    <div className="min-h-screen bg-bg text-text transition-colors dark:bg-bg dark:text-text">
      <Header />
      <main className="mx-auto max-w-5xl px-5 sm:px-8">
        <Hero />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
