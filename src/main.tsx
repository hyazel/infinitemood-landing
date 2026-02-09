import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
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

// Fix viewport height on mobile browsers
const setViewportHeight = () => {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
};

// Set on load
setViewportHeight();

// Update only on orientation change (not on scroll to avoid jumps)
let lastOrientation = window.orientation;
window.addEventListener('resize', () => {
  // Only update if orientation changed (not just address bar hiding)
  if (window.orientation !== lastOrientation) {
    lastOrientation = window.orientation;
    setViewportHeight();
  }
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <HelmetProvider>
        <SmoothScroll>
          <App />
        </SmoothScroll>
      </HelmetProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
