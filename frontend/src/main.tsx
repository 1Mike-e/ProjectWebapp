import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App'
import './index.css'
import OperatorSignUp from './OperatorSignUp';
import UserSignUp from './UserSignUp';
import OperatorSignIn from './OperatorSignIn';
import UserSignIn from './UserSignIn';
import OperatorPage from './OperatorPage';
import UserPage from './UserPage';


const router = createBrowserRouter([
  {

    path: "/",
    element: <App />
  }, {
    path: "/operatorsignup",
    element: <OperatorSignUp />
  }, {
    path: "/usersignup",
    element: <UserSignUp/>
  },
    {
    path: "/usersignin",
    element: <UserSignIn />
  }, 
  {
    path: "/operatorsignin",
    element: <OperatorSignIn />
  },{
    path: "/about",

  }, {
    path: "/contact",

  }, {
    path: "/operatorpage",
    element: <OperatorPage />
  }, {
    path: "/userpage",
    element: <UserPage />
  }

]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
