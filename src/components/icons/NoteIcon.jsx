import React from 'react';

const NoteIcon = ({ width = 20, height = 20 }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className="fill-current" width={width} height={height}>
      <path d="M39.038,9.076C31.925,9.076,33.674,6,27,6c-1.6,0-2,1-2,2v21c0,2.214-1.032,4-5,4c-5.661,0-8,1.464-8,5 c0,2.383,0.489,6,7.936,6C26.855,44,27,38.682,27,36c0-1.027,0-3.903,0-7V17c0.005-1.355,0.2-2,1-2c5.138,0,3.871,3,11,3 c0,0,2,0,2-1.699c0-2.555,0-4.363,0-5.333C41,9.435,40.312,9.076,39.038,9.076z" />
    </svg>
  );
};

export default NoteIcon;
