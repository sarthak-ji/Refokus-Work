import { motion } from "motion/react";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
motion;

function Card({ width, start, para, hover = "false" }) {
  return (
    <motion.div
      whileHover={{
        backgroundColor: hover === "true" && "#7443ff",
        padding: "25px",
      }}
      className={`p-5 mt-56 rounded-xl text-white bg-zinc-800 hover: ${width} min-h-[48vh] flex flex-col justify-between`}
    >
      <div className="w-full mb-10 ">
        <div className="w-full flex justify-between items-center mb-4">
          <h6>Up Next: Culture</h6>
          <FaArrowRightLong />
        </div>
        <div>
          <h3 className="text-2xl font-medium">Who we are?</h3>
        </div>
      </div>
      <div className="down mt-36">
        {start && (
          <>
            <h1 className="text-6xl font-medium tracking-tight leading-none">
              Start a Project
            </h1>
            <button className="rounded-full py-2 px-6 mt-4 mb-4 border-1 border-white">
              Contact us
            </button>
          </>
        )}

        {para && (
          <p className="text-xs text-zinc-500 font-medium">
            Explore what drives our team.
          </p>
        )}
      </div>
    </motion.div>
  );
}

export default Card;
