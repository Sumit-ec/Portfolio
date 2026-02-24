"use client";
import React from "react";
import Lottie from "lottie-react";

type LottiePlayerProps = {
  animationData: any;
  loop?: boolean;
  autoplay?: boolean;
  className?: string;
  style?: React.CSSProperties;
};

const LottiePlayer: React.FC<LottiePlayerProps> = ({
  animationData,
  loop = true,
  autoplay = true,
  className = "",
  style = { width: 200, height: 200 },
}) => {
  return (
    <div className={className} style={style}>
      <Lottie animationData={animationData} loop={loop} autoplay={autoplay} />
    </div>
  );
};

export default LottiePlayer;
