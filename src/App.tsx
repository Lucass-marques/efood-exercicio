import { BrowserRouter } from 'react-router-dom'
import { GlobalCss } from './styles'
import Routas from './routes'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <Routas />
      <Footer />
    </BrowserRouter>
  )
}

export default App
