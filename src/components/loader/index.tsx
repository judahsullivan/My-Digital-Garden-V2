import { motion, useAnimate, animate, stagger } from 'framer-motion';
import { useEffect, useState } from 'react';

interface PreloaderProps {
  onLoadingComplete: () => void;
}

export default function Preloader({ onLoadingComplete }: PreloaderProps) {
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });

    const sequence = [
      ['.memoji', { scale: [0, 1], opacity: [0, 1] }],
      ['.heading', { y: [20, 0], opacity: [0, 1] }, { duration: 0.5, delay: stagger(1.5) }],
      ['.title', { y: [20, 0], opacity: [0, 1] }, { duration: 0.5, delay: 1.8 }],
      [
        '.overlay',
        { y: [0, -1000], opacity: 1 },
        { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 }
      ]
    ];

    animate([...sequence], {
      delay: 1.5,
      easing: [0.22, 1, 0.36, 1],
      onComplete: () => {
        onLoadingComplete();
      }
    });
  }, [onLoadingComplete]);

  return (
    {/* <div className=" overlay flex text-white font-basement justify-center overflow-hidden items-center bg-black absolute top-0 bottom-0 left-0 right-0 w-full min-h-screen  z-30 "> */}
    {/*   <div className=" items-center justify-center max-w-6xl mx-auto flex flex-col"> */}
    {/*   <video className="memoji w-[200px] h-[200px] md:w-[400px] md:h-[400px]" autoPlay muted playsInline controls={false}> */}
    {/*       <source type="video/mp4" src="/memojiloader.mp4" /> */}
    {/*     </video> */}
    {/*     <div className="absolute bottom-[350px] px-2 md:px-16 left-0  md:bottom-[250px] flex text-2xl  justify-between w-full items-center"> */}
    {/*       <div className=" overflow-hidden text-3xl md:text-6xl"> */}
    {/*         <div className="heading inline-block  ">Passion</div> */}
    {/*       </div> */}
    {/*       <h1 className="overflow-hidden  text-3xl md:text-6xl"> */}
    {/*         <span className="heading  inline-block ">Creativity</span> */}
    {/*       </h1> */}
    {/*     </div> */}
    {/*     <div> */}
    {/*       <h1 className="oveflow-hidden text-5xl md:text-8xl "> */}
    {/*         <span className="title inline-block">Innovation</span> */}
    {/*       </h1> */}
    {/*     </div> */}
    {/*   </div> */}
    {/* </div> */}
  );
}
