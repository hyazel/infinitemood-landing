import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Home from './views/Home';
import Exploration from './views/Exploration';
import Project from './views/Project';
import Blog from './views/Blog';
import BlogPost from './views/BlogPost';
import LoadingView from './components/LoadingView';
import PageTransition from './components/PageTransition';
import { useLocation } from 'react-router-dom';
import { LanguageProvider } from './i18n';
import { useViewportHeight } from './hooks/useViewportHeight';

function App() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  
  // Initialize viewport height management globally
  // This sets CSS variables (--vh, --svh) for use throughout the app
  useViewportHeight();

  // Modified to wait for LoadingView to signal completion
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIsLoading(false);
  //   }, 2500); 
  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <LanguageProvider>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingView key="loading" onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {!isLoading && (
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={
              <PageTransition>
                <Home />
              </PageTransition>
            } />
            <Route path="/exploration" element={
              <PageTransition>
                <Exploration />
              </PageTransition>
            } />
            <Route path="/project" element={
              <PageTransition>
                <Project />
              </PageTransition>
            } />
            <Route path="/blog" element={
              <PageTransition>
                <Blog />
              </PageTransition>
            } />
            <Route path="/blog/:slug" element={
              <PageTransition>
                <BlogPost />
              </PageTransition>
            } />
          </Routes>
        </AnimatePresence>
      )}
    </LanguageProvider>
  );
}

export default App;
