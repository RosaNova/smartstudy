import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { GoogleOAuthProvider } from '@react-oauth/google'

const CLIENT_ID = "1023154573933-n3b83k5jvrj2as76fn59qg4nra41tmls.apps.googleusercontent.com";
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={CLIENT_ID}>
       <App/>
    </GoogleOAuthProvider>
  </StrictMode>,
)
