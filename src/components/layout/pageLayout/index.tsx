import { ReactNode } from 'react';
import { MotionBox, MotionText } from '@/components/globals/chakraMotion';

export default function PageLayout({ children }: { children: ReactNode }) {
  return (
    <>
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
    </>
  );
}
