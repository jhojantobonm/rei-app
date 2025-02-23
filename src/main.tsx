import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { AppProvider } from './context/ProviderApp.tsx'
import { BrowserRouter } from 'react-router-dom'
import { Loader } from './Loader.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <AppProvider>
        <Loader />
      </AppProvider>
    </BrowserRouter>
  </StrictMode>,
)
