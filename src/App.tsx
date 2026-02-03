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
import Demo from './views/Demo';
import LoadingView from './components/LoadingView';
import PageTransition from './components/PageTransition';
import Header from './components/Header';
import AudioControl from './components/AudioControl';
import { useLocation } from 'react-router-dom';
import { LanguageProvider } from './i18n';
import { AudioProvider, useAudio } from './contexts/AudioContext';
import { FRAGMENTS } from './data/fragments';

// Helper function to map event names to display titles
const getTrackTitle = (eventName: string | null): string => {
  if (!eventName) return '';
  const fragment = FRAGMENTS.find(f => f.event === eventName);
  return fragment?.title || '';
};

function AppContent() {
  const location = useLocation();
  const { isAudioStarted, currentAudioEvent, weatherLevel, natureLevel } = useAudio();
  const [isLoading, setIsLoading] = useState(location.pathname === '/');
  const [hasShownLoading, setHasShownLoading] = useState(false);

  // Get track title from current audio event
  const trackTitle = getTrackTitle(currentAudioEvent);

  // Only show loading on first visit to home page
  useEffect(() => {
    if (location.pathname === '/' && !hasShownLoading) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
  }, [location.pathname, hasShownLoading]);

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
              <Route path="/demo" element={
                <PageTransition>
                  <Demo />
                </PageTransition>
              } />
            </Routes>
          </AnimatePresence>

          {/* Global Audio Control - appears on all pages when audio is started */}
          {isAudioStarted && (
            <AudioControl
              trackTitle={trackTitle}
              weatherLevel={weatherLevel}
              natureLevel={natureLevel}
            />
          )}
        </>
      )}
    </LanguageProvider>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AudioProvider>
        <AppContent />
      </AudioProvider>
    </LanguageProvider>
  );
}

export default App;
