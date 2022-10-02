import About from '../components/About'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Intro from '../components/Intro'
import Proyectos from '../components/Proyectos'

const Landing = () => {
  return (
    <>
      <main className='landing-container'>
        <Intro />
        <About />
        <Proyectos />
        <Contact />
      </main>
      <Footer />
    </>

  )
}

export default Landing
