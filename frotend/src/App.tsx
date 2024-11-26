import Login from './pages/Login'
import Home from './pages/Home'
import Reports from './pages/Reports'
import ErrorPage from './pages/ErrorPage'
import GestionUsuario from './pages/GestionUsuario'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
const router = createBrowserRouter([
  {
    path: '/',
    errorElement:<ErrorPage/>,
    children: [
     {
        index: true,
        element: <Login/>
      },
      {
        path: 'home',
        element: <Home/>
      },
      {
        path: 'reports',
        element: <Reports/>
      },
      {
        path: 'GestionUsuario',
        element: <GestionUsuario/>
      }
     ]
  },
 ]);
function App() {


  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
