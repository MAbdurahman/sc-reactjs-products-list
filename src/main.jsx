import React, {Fragment, StrictMode} from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './app/App.jsx';
import Products from './pages/Products/index.jsx';
import Home from './pages/Home/index.jsx';
import About from './pages/About/index.jsx';
import Cart from './components/Cart/index.jsx';
import Contact from './pages/Contact/index.jsx';
import SignIn from './auth/SignIn/index.jsx';
import SignUp from './auth/SignUp/index.jsx';
import NotFound from './errors/NotFound/index.jsx';
import EmptyCart from './errors/EmptyCart/index.jsx';
import NoResults from './errors/NoResults/index.jsx';

const browserRouter = createBrowserRouter([
   {
      path: '/',
      element: <App />,
      children: [
         {
            path: '/',
            index: true,
            element: <Home/>
         },
         {
            path: 'about',
            element: <About/>
         },
         {
            path: 'products',
            element: <Products/>,
         },
         {
            path: 'contact',
            element: <Contact/>
         },
         {
            path: 'sign-in',
            element: <SignIn/>
         },
         {
            path: 'sign-up',
            element: <SignUp/>
         },
         {
            path: 'cart',
            element: <Cart/>
         },
         {
            path: 'empty-cart',
            element: <EmptyCart />
         },
         {
           path: 'no-results',
           element: <NoResults />
         },
         {
            path: '*',
            element: <NotFound />
         }
      ]
   }
])

createRoot(document.getElementById('root')).render(
   <Fragment>
      <RouterProvider router={browserRouter}/>
   </Fragment>
)