import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Buffer } from 'buffer'
import App from './App.tsx'
import SmoothScroll from './components/SmoothScroll.tsx'
import './index.css'

// Polyfill Buffer for gray-matter

declare global {
  interface Window {
    Buffer: typeof Buffer
  }
}
window.Buffer = Buffer

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <SmoothScroll>
        <App />
      </SmoothScroll>
    </BrowserRouter>
  </React.StrictMode>,
)
