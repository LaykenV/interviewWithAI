import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import {LandingPage} from "./pages/LandingPage";
import { Interview } from './pages/Interview';
import { PostInterview } from './pages/PostInterview';
import { InterviewProvider } from './interviewContext';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/interview",
    element: <Interview />
  },
  {
    path: "/interviewAnalysis",
    element: <PostInterview />
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  //<React.StrictMode>
    <InterviewProvider>
      <RouterProvider router={router} />
    </InterviewProvider>
  //</React.StrictMode>,
)
