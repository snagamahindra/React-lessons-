import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/Landing';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Landing from './pages/Landing';
import FormHandling from './pages/FormHandling';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Landing/>
    ),
  },
  {
    path: "form-handling",
    element: <FormHandling />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
