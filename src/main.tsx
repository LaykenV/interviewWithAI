import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import { LandingPage } from "./pages/LandingPage.tsx";
import { Interview } from './pages/Interview.tsx';
import { PostInterview } from './pages/PostInterview.tsx';
import { InterviewProvider } from './interviewContext';
import { ThemeProvider, createTheme } from "@mui/material/styles";

/*const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});*/

const theme = createTheme();


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
  <React.StrictMode>
    <InterviewProvider>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </InterviewProvider>
  </React.StrictMode>,
)
