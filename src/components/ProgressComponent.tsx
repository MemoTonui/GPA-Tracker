import React from 'react';

type ProgressComponentProps = {
    title:String
  progress: number; 
};

const ProgressComponent: React.FC<ProgressComponentProps> = (props) => {
  return (
    <div className='my-4'>
    <div className="flex justify-between mb-1">
      <span className="font-medium text-xs dark:text-white">
        {props.title}
      </span>
      <span className="text-xs font-medium dark:text-white">
        {props.progress}
      </span>
     
    </div>
     <div className="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
     <div
       className="bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500  h-1.5 rounded-full"
       style={{width: props.progress}}
     ></div>
   </div> 
   </div>
  );
};

export default ProgressComponent;