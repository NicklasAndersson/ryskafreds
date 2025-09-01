import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Layout from './components/Layout';
import HomePage from './HomePage';
import ArticlePage from './ArticlePage';
import PrivacyPolicyPage from './PrivacyPolicyPage';
import TermsOfServicePage from './TermsOfServicePage';
import CookiePolicyPage from './CookiePolicyPage';
import ProgramPage from './ProgramPage'; // Import ProgramPage

import SplashPage from './components/SplashPage'; // Import SplashPage

import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'nyheter/:slug',
        element: <ArticlePage />,
      },
      {
        path: 'integritetspolicy',
        element: <PrivacyPolicyPage />,
      },
      {
        path: 'anvandarvillkor',
        element: <TermsOfServicePage />,
      },
      {
        path: 'cookies',
        element: <CookiePolicyPage />,
      },
      {
        path: 'program/:slug', // New route for program pages
        element: <ProgramPage />,
      },
      {
        path: 'splash',
        element: <SplashPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)