import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Root from './layouts/Root.jsx';
import Home from './components/Home/Home.jsx';
import Login from './components/Login/Login.jsx';
import Register from './components/Register/Register.jsx';
import AuthProvider from './contexts/AuthProvider.jsx';
import PrivateRoute from './routes/PrivateRoute.jsx';
import Profile from './components/Profile/Profile.jsx';
import Events from './components/Events/Events.jsx';
import Error from './components/Error/Error.jsx';
import ForgotPassword from './components/Forgotpassword/Forgotpassword.jsx';
import About from './components/About/About.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: 'login',
        Component: Login
      },
      {
        path: 'about',
        Component: About
      },
      {
        path: 'register',
        Component: Register
      },
      {
        path: 'forgot-password', 
        Component: ForgotPassword,
      },
      {
        path: 'profile',
        element: <PrivateRoute><Profile></Profile></PrivateRoute>
      },
      {
        path: 'event/:id',
        element: <PrivateRoute><Events /></PrivateRoute>
      },
      {
        path: '*',
        Component: Error,
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
