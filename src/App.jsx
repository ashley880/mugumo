import Navbar from './components/Navbar'

import Hero from './sections/Hero'
import About from './sections/About'
import Services from './sections/Services'
import Work from './sections/Work'
import Process from './sections/Process'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

function App() {
  return (
    <>
      <main id="top">
        <Navbar />

        <Hero />
        <About />
        <Services />
        <Work />
        <Process />
        <Contact />
      </main>

      <Footer />
    </>
  )
}

export default App