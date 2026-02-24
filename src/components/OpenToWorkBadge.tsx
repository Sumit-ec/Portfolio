import React, { useEffect, useState } from "react";
import { SpinningText } from "./magicui/spinning-text";

function OpenToWorkBadge() {
  return (
    <div className="fixed md:block hidden md:left-20 left-0 md:bottom-10 bottom-0 opentoworkLayer backdrop-blur-lg rounded-full">
      <SpinningText radius={4}>OPEN TO WORK OPEN TO WORK</SpinningText>
    </div>
  );
}

export default OpenToWorkBadge;
