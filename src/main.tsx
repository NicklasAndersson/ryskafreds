import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import ErrorBoundary from './components/ErrorBoundary';
import Layout from './components/Layout';
import AllNewsPage from './AllNewsPage';
import HomePage from './HomePage';
import ArticlePage from './ArticlePage';
import PrivacyPolicyPage from './PrivacyPolicyPage';
import TermsOfServicePage from './TermsOfServicePage';
import CookiePolicyPage from './CookiePolicyPage';
import ProgramPage from './ProgramPage';
import SplashPage from './components/SplashPage';

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
        path: 'nyheter',
        element: <AllNewsPage />,
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
  <ErrorBoundary>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </ErrorBoundary>,
)