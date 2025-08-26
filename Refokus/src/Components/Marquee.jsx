import { motion } from "motion/react";
import React from "react";
motion;

function Marquee({ img_urls, direction }) {
  return (
    <>
      <div className="flex w-full overflow-hidden">
        <motion.div
          initial={{ x: direction === "left" ? "0" : "-100%" }}
          animate={{ x: direction === "left" ? "-100%" : "0" }}
          transition={{ ease: "linear", duration: 14, repeat: Infinity}}
          className="flex flex-shrink-0 gap-34 py-10 pr-40"
        >
          {img_urls.map((url, index) => (
            <img key={index} src={url} />
          ))}
        </motion.div>
        <motion.div
          initial={{ x: direction === "left" ? "0" : "-100%" }}
          animate={{ x: direction === "left" ? "-100%" : "0" }}
          transition={{ ease: "linear", duration: 14, repeat: Infinity}}
          className="flex flex-shrink-0 gap-34 py-10 pr-40"
        >
          {img_urls.map((url, index) => (
            <img key={index} src={url} />
          ))}
        </motion.div>
      </div>
    </>
  );
}

export default Marquee;
