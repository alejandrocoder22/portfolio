import Sidebar from './components/Sidebar'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import Proyectos from './pages/Proyectos'
import Techs from './pages/Techs'
import About from './pages/About'
import ErrorPage from './pages/ErrorPage'

function App () {
  return (
    <BrowserRouter>
      <main className='App'>
        <Routes>
          <Route path='/' element={<Proyectos />} />
          <Route path='/tecnologias' element={<Techs />} />
          <Route path='/sobre-mi' element={<About />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
