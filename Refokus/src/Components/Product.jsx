// import React from 'react'
// import Button from './Button'

// function Product({val}) {
//   return (
//     <div className='text-white h-60 flex justify-between max-w-screen-xl mx-auto py-20'>
//       <h1 className='text-6xl capitalize font-medium'>{val.title}</h1>
//       <div className='w-1/3'>
//         <h3 className='mb-6 text-sm'>{val.description}</h3>
//         <div className='flex gap-6'>
//           {val.live && <Button />}
//           {val.case && <Button title="Case Study"/>}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Product

// Recommended Code..
import React from "react";
import Button from "./Button";

function Product({ val, mover, count }) {
  return (
    <div className="w-full h-[18rem] py-20 text-white">
      <div
        onMouseEnter={() => {
          mover(count);
        }}
        className="max-w-screen-xl mx-auto flex items-center justify-between"
      >
        <h1 className="text-6xl capitalize font-semibold">{val.title}</h1>
        <div className="dets w-1/3">
          <p className="mb-10">{val.description}</p>
          <Button />
        </div>
      </div>
    </div>
  );
}

export default Product;
