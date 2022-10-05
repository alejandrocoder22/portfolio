
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import ErrorPage from './pages/ErrorPage'
import IndividualProyectInfo from './pages/IndividualProyectInfo'
import Menu from './components/Menu'
import Landing from './pages/Landing'
import { useEffect } from 'react'

function App () {
  useEffect(() => {
    window.addEventListener('scroll', () => {
      const introImg = document.querySelector('.intro__img')
      const positionY = window.scrollY
      introImg.style.transform = (`translateY(${positionY * 0.05}px)`)
    })
  }, [])
  return (

    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/proyect/:id' element={<IndividualProyectInfo />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
