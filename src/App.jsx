import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import SplashScreen from './SplashScreen';
import MainContent from './MainContent';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  const handleEnterSite = () => {
    setShowSplash(false);
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {showSplash ? (
          <SplashScreen key="splash" onEnter={handleEnterSite} />
        ) : (
          <MainContent key="main" />
        )}
      </AnimatePresence>
    </>
  );
}