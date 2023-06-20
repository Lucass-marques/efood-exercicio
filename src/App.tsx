import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Header from './components/Header'
import { GlobalCss } from './styles'
import RestaurantList from './components/RestaurantList'

const routes = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Header />
        <RestaurantList />
      </>
    )
  }
])

function App() {
  return (
    <>
      <GlobalCss />
      <RouterProvider router={routes} />
      <div className="container">
        <h1>Teste</h1>
      </div>
    </>
  )
}

export default App
