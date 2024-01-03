
import { Navigate, createBrowserRouter } from "react-router-dom";
import Login from '../components/Login'
import Home from '../components/Home'

export const authRoutes = createBrowserRouter([
  {
    path: '*',
    element: <Navigate to='/home' />
  },
  {
    path: "/home",
    element: <Home />,
  },
]);

export const nonAuthRoutes = createBrowserRouter([
  {
    path: '*',
    element: <Navigate to='/login' />

  },
  {
    path: "/login",
    element: <Login />,
  },
]);




