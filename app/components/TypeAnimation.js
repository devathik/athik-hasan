"use client";

import { TypeAnimation } from "react-type-animation";

const TypewriterAnimation = () => {
  return (
    <div>
      <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed out once, initially
          "Md Athik Hassan",
          1000, // wait 1s before replacing "Mice" with "Hamsters"
          "a Web Developer",
          1000,
          "a Graphic Designer",
          1000,
        ]}
        wrapper="span"
        speed={50}
        repeat={Infinity}
      />
    </div>
  );
};
export default TypewriterAnimation;
