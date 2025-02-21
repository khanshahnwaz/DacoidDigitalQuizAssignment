// import React from "react";

import Card from "./Card";
import { BiPlusMedical } from "react-icons/bi";
import items from "../../public/json/data.json";
import attempt from "../../public/json/attempt.json";
const TaskListing = ({setQuiz,setIntegerQuiz,setShowAttempts,setShowIntegerAttempts}) => {
  {
    /* {console.log("items is here", items)} */
  }
  return (
    <div className="m-4 flex justify-around   ">
      <div className="grid gap-y-3 h-max ">
        {/* todo */}
        <div className="flex justify-between w-full">
          <p className="text-lg font-bold text-white">Available Quizes ({items.todo.length})</p>
          <div className="bg-[#6418c3] rounded-3xl w-10 h-10 px-2 py-1">
            <BiPlusMedical className="text-3xl text-white font-bold  " />
          </div>
        </div>
        {items.todo.map((item, i) => {
          return <Card section='todo' setIntegerQuiz={setIntegerQuiz} setQuiz={setQuiz} key={i} {...item} />;
        })}
      </div>


      {/* Attepmpted */}
      
      <div className="grid gap-y-3 h-max">
        {/* done */}
        <div className="flex justify-between w-full">
          <p className="text-lg font-bold text-white">Previous Attempts</p>
          <div className="bg-[#211a75] rounded-3xl w-10 h-10 px-2 py-1">
            <BiPlusMedical className="text-3xl text-[#6418c3] font-bold" />
          </div>
        </div>
        {items.done.map((item, i) => {
          return <Card setShowIntegerAttempts={setShowIntegerAttempts} setShowAttempts={setShowAttempts} section='attempt' attempt={attempt} key={i} {...item} />;
        })}
      </div>


      
   
    </div>
  );
};

export default TaskListing;
