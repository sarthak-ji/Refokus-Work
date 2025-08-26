import React, { useState } from 'react'
import { motion, useScroll } from "motion/react"
motion

const Work = () => {
    const [images, setImages] = useState([
        {url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d5407cdf203d6e70483a_Showcase-%204%203.webp", top: "36%", left: "53%", isActive: false},
        {url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/67b89d9110d0a5d6615f273a_umaultAwards.png", top: "40%", left: "50%", isActive: false},
        {url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d713cb10965e8dbdee18_YIR%202021%20-%204%203.webp", top: "50%", left: "43%", isActive: false},
        {url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/667c85a1151f26218228b9d3_Refokus.webp", top: "60%", left: "48%", isActive: false},
        {url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/667d026ddba9301ca7143513_4297605234.webp", top: "63%", left: "53%", isActive: false}
    ]);


    // Framer Motion
    // const { scrollY, scrollYProgress, scrollX, scrollXProgress } = useScroll()
    const { scrollYProgress } = useScroll()

    scrollYProgress.on("change", (data) => {
        function imagesShow(arr){
            setImages(prev => 
                prev.map((item, index) => 
                arr.indexOf(index) === -1 ? {...item, isActive: false} : {...item, isActive: true} 
                )
            );
        }
        switch(Math.floor(data*100)) {
            case 0:
                imagesShow([]);
                break;
            case 1:
                imagesShow([0]);
                break;
            case 2:
                imagesShow([0,1]);
                break;
            case 3:
                imagesShow([0,1,2]);
                break;
            case 5:
                imagesShow([0,1,2,3]);
                break;
            case 8:
                imagesShow([0,1,2,3,4]);
                break;
        }
    })


  return (
    <>
        <div className='w-full mt-6'>
            <div className='relative max-w-screen-lg mx-auto text-center text-white'>
                <h1 className='text-[26vw] leading-none font-medium select-none'>work</h1>
                <h3 className='text-zinc-500 font-medium text-xl'>Web Design, Webflow Development, Creative Development</h3>
                <div className='absolute top-0 w-full h-full '></div>
                {images.map(
                    (elem, index) =>
                        elem.isActive && (    // agar isActive hai to aap ye image render kardo nahi to koi baat nhi (&& or ?/:)
                            <img key = {index}
                                className='absolute w-40 rounded-lg -translate-x-[50%] -translate-y-[20%] ' 
                                src={elem.url} 
                                style={{top: elem.top, left: elem.left}} 
                                alt="image" 
                            />
                        )
                    )}
            </div>
        </div>
    </>
  )
}

export default Work
