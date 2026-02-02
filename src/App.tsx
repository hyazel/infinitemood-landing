import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Home from './views/Home';
import Exploration from './views/Exploration';
import Project from './views/Project';
import Blog from './views/Blog';
import BlogPost from './views/BlogPost';
import FollowPage from './views/FollowPage';
import EmailConfirmation from './views/EmailConfirmation';
import LoadingView from './components/LoadingView';
import PageTransition from './components/PageTransition';
import Header from './components/Header';
import { useLocation } from 'react-router-dom';
import { LanguageProvider } from './i18n';

function App() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(location.pathname === '/');
  const [hasShownLoading, setHasShownLoading] = useState(false);

  // Only show loading on first visit to home page
  useEffect(() => {
    if (location.pathname === '/' && !hasShownLoading) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
  }, [location.pathname, hasShownLoading]);

  // Initialize viewport height management globally
  // This sets CSS variables (--vh, --svh) for use throughout the app

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
        {isLoading && <LoadingView key="loading" onComplete={() => {
          setIsLoading(false);
          setHasShownLoading(true);
        }} />}
      </AnimatePresence>

      {!isLoading && (
        <>
          <Header />
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
              <Route path="/follow" element={
                <PageTransition>
                  <FollowPage />
                </PageTransition>
              } />
              <Route path="/email-confirmed" element={
                <PageTransition>
                  <EmailConfirmation />
                </PageTransition>
              } />
            </Routes>
          </AnimatePresence>
        </>
      )}
    </LanguageProvider>
  );
}

export default App;
