import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import ListedBooks from './components/ListedBooks/ListedBooks';
import PagesToRead from './components/PagesToRead/PagesToRead';
import ErrorPage from './components/ErrorPage/ErrorPage';
import BookDetails from './components/BookDetails/BookDetails';
import About from './components/MoreRoute/About';
import ContractUs from './components/MoreRoute/ContractUs';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/listedbooks",
        element: <ListedBooks></ListedBooks>,
        loader: () => fetch('../books.json'),
      },
      {
        path: "/pagesread",
        element: <PagesToRead></PagesToRead>,
        loader: () => fetch('../books.json'),
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contract",
        element: <ContractUs></ContractUs>,
      },
      {
        path: "/book/:id",
        element: <BookDetails></BookDetails>,
        loader: () => fetch('../books.json'),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
