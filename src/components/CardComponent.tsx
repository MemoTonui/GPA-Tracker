import React from "react";

type CardComponentProps = {
    date: string;
    course_name: string;
    title: string;
    progress: any;
  };

  const CardComponent: React.FC<CardComponentProps> = (props) => {
  return (
    <div className="bg-white p-5 shadow-sm rounded-lg max-w-sm">
      <p className="font-light text-xs">{props.date} </p>
      <div className="">
        <a href="#">
          <h5 className="text-gray-900 font-bold text-md tracking-tight mb-2">
           {props.course_name}
          </h5>
        </a>
        <p className="font-normal text-gray-700 text-sm mb-3">{props.title}</p>

        <div className="flex justify-between mb-1 ">
          <span className="font-medium text-xs text-teal-700 dark:text-white">
            Progress
          </span>
          <span className="text-xs font-medium text-teal-700 dark:text-white">
            {props.progress}
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
          <div
            className="bg-teal-600 h-1.5 rounded-full"
            style={{width: props.progress}}
          ></div>
        </div> 
      </div>
    </div>
  );
}
export default CardComponent;
