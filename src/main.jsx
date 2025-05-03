import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {ProfileProvider}  from "./ProfileContext.jsx";
import App from './App.jsx'
import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <ProfileProvider>
        <App />
      </ProfileProvider>
  </StrictMode>,
)
