import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Home from './views/Home';
import Exploration from './views/Exploration';
import LoadingView from './components/LoadingView';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time or wait for assets
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // 2.5 seconds total display time

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingView key="loading" />}
      </AnimatePresence>

      {!isLoading && (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exploration" element={<Exploration />} />
        </Routes>
      )}
    </>
  );
}

export default App;
