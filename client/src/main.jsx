import './index.css'
import { StrictMode } from 'react'
import { router } from './routes/router.jsx';
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
