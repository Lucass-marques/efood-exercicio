import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Profiles from './pages/Profiles'

const Routas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/profiles/:id" element={<Profiles />} />
  </Routes>
)

export default Routas
