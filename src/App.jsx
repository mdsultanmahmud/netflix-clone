import { createBrowserRouter } from "react-router-dom"
import MainLayout from "./layout/MainLayout"
import Home from "./pages/Home/Home"

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout></MainLayout>,
      children:[
        {
          path:'/',
          element: <Home></Home>
        }
      ]
    }
  ])
  return (
    <div>
      <h1>netflix clone </h1>
    </div>
  )
}

export default App
