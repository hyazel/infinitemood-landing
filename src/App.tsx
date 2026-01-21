import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Home from './views/Home';
import Exploration from './views/Exploration';
import LoadingView from './components/LoadingView';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Modified to wait for LoadingView to signal completion
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIsLoading(false);
  //   }, 2500); 
  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingView key="loading" onComplete={() => setIsLoading(false)} />}
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
