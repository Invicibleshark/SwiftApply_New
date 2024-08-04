import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter,RouterProvider} from "react-router-dom";
import './index.css';
import App from './App';
import Register from "./pages/Register";
import Login from "./pages/login";
const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "login",
        element: <Login/>,
      },
      {
        path: "register",
        element: <Register/>,
      },
    ],
  },
]);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


