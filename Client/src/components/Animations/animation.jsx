import React from 'react';
import Lottie from 'react-lottie';
import style from "../Animations/animation.module.css"
import animationData from './../../assets/jsonsvg/Animation - 1711270988044.json' // Import your Lottie animation JSON file

const MyLottieAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    speed:2,
    animationData: animationData, // Your imported animation JSON
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div className={style.SVG} style={{ width: 400, height: 600 }}>
      <Lottie options={defaultOptions} />
    </div>
  );
};

export default MyLottieAnimation;
