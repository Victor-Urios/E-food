import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Menu from './pages/Menu'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/perfil/:id" element={<Menu />} />
  </Routes>
)

export default Rotas
