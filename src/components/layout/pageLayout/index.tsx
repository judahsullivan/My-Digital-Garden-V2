import { useState, useEffect } from 'react';
import { ReactNode } from 'react';
import { AnimatePresence } from 'framer-motion';
import { MotionBox, MotionText } from '@/components/globals/chakraMotion';

const overlayVariants = {
  initial: {
    y: '100vh'
  },
  enter: {
    y: 0,
    transition: {
      duration: 1.2,
      ease: 'easeInOut'
    }
  },
  exit: {
    y: '-250vh',
    transition: {
      duration: 1.2,
      ease: 'easeInOut'
    }
  }
};

export default function PageLayout({ children }: { children: ReactNode }) {
  const [showOverlay, setShowOverlay] = useState(true);

  useEffect(() => {
    // Simulating a delay before hiding the overlay/loading screen
    const timer = setTimeout(() => {
      setShowOverlay(false);
    }, 2000); // Replace this with your actual loading logic

    return () => clearTimeout(timer); // Clear the timer if the component unmounts
  }, []);

  return (
    <AnimatePresence initial={true} mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
      {showOverlay && (
        <MotionBox
          key="overlay"
          variants={overlayVariants}
          initial="initial"
          animate="enter"
          exit="exit"
          display="flex"
          alignItems="center"
          position="fixed"
          justify="center"
          align="center"
          bgColor="black"
          minH="100vh"
          w="full"
          top={0}
          left={0}
          zIndex={9999}
        >
          <MotionText fontSize="5xl">Loading...</MotionText>
        </MotionBox>
      )}

      {!showOverlay && (
        <MotionBox
          key="content"
          initial={{
            opacity: 0,
            y: 10
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          exit={{
            opacity: 0,
            y: 10
          }}
        >
          {children}
        </MotionBox>
      )}
    </AnimatePresence>
  );
}
