
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import ErrorPage from './pages/ErrorPage'
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
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
