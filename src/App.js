import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Empresa from './pages/Empresa'
import Contato from './pages/Contato'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/Empresa" element={<Empresa />}></Route>
        <Route exact path="/Contato" element={<Contato />}></Route>
      </Routes>
    <Footer />
    </Router>
    
  )
}

export default App
