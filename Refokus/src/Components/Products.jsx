import React, { useState } from "react";
import Product from "./Product";
import { motion } from "motion/react";
import V1 from "../assets/videos/V1.mp4";
import V2 from "../assets/videos/V2.mp4";
import V3 from "../assets/videos/V3.mp4";
import V4 from "../assets/videos/V4.mp4";
import V5 from "../assets/videos/V5.mp4";
import { video } from "motion/react-client";
motion;
video;

function Products() {
  const data = [
    {
      title: "Arqitel",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's , when an of type and to make a type specimen book.",
      live: true,
      case: false,
    },

    {
      title: "Cula",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      live: true,
      case: false,
    },

    {
      title: "Layout Land",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.",
      live: true,
      case: false,
    },

    {
      title: "TTR",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.",
      live: true,
      case: true,
    },

    {
      title: "Maniv",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      live: true,
      case: true,
    },
  ];

  const [position, setPosition] = useState(0);
  const mover = (val) => {
    setPosition(val * 19);
  };
  return (
    <div className="mt-20 relative">
      {data.map((elem, index) => (
        <Product key={index} val={elem} mover={mover} count={index} />
      ))}
      <div className="absolute top-0 w-full h-full pointer-events-none">
        <motion.div
          initial={{ y: position, x: "0%" }}
          animate={{ y: position + `rem` }}
          transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.7 }}
          className="window absolute w-[24rem] h-[19rem] bg-white left-[34%] rounded-3xl  overflow-hidden"
        >
          <motion.video
            animate={{ y: -position + `rem` }}
            transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.7 }}
            className="w-full h-full object-cover"
            src={V1}
            autoPlay
            muted
            loop
          />
          <motion.video
            animate={{ y: -position + `rem` }}
            transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.7 }}
            className="w-full h-full object-cover"
            src={V2}
            autoPlay
            muted
            loop
          />
          <motion.video
            animate={{ y: -position + `rem` }}
            transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.7 }}
            className="w-full h-full object-cover"
            src={V3}
            autoPlay
            muted
            loop
          />
          <motion.video
            animate={{ y: -position + `rem` }}
            transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.7 }}
            className="w-full h-full object-cover"
            src={V4}
            autoPlay
            muted
            loop
          />
          <motion.video
            animate={{ y: -position + `rem` }}
            transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.7 }}
            className="w-full h-full object-cover"
            src={V5}
            autoPlay
            muted
            loop
          />
        </motion.div>
      </div>
    </div>
  );
}

export default Products;
