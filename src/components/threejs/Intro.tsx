import React, { useState, useEffect} from 'react'
import {useScroll} from '@react-spring/web'
import About from '@/container/About'
import { useSpring, animated } from '@react-spring/web';
import Hero from '@/container/Hero';
import { useRouter } from 'next/router';

type Props = {}

const MyProgressBar = ({ progress }: any) => {
  return (
    <div className="w-full h-[20px] border-1 rounded-full border-green-600">
      <div className="bg-[#3498db] p-2 h-full rounded-full transition ease-in text-right" style={{ width: `${progress}%` }}>
        <span className="p-[5px] text-white font-bold">{`${progress}%`}</span>
      </div>
    </div>
  );
};

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const [show, setShow] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + 10;
        if (newProgress === 100) {
          clearInterval(interval);
          setShow(true)
        }
        return newProgress;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='h-screen grid place-items-center px-4'>
      <h1>Loading Screen</h1>
        <MyProgressBar progress={progress} />
    </div>
  );
};

const MyComponent = () => {
  const [showPage, setShowPage] = useState(false);

  const pageAnimation = useSpring({
    transform: showPage ? 'translateY(0%)' : 'translateY(100%)',
    opacity: showPage ? 1 : 0,
  });

  const handleClick = () => {
    setShowPage(true);
  };

  return (
    <div className='pt-40'>
      <button  className="bg-red-400 p-4 " onClick={handleClick}>Show Page</button>
      <animated.div className="page" style={pageAnimation}>
        <Hero />
      </animated.div>
    </div>
  );
};

const Intro = (props: Props) => {


  return (
    <React.Fragment>
      {/* <LoadingScreen /> */}
      <MyComponent />
    </React.Fragment>
  )
}

export default Intro