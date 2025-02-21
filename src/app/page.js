// import React from "react";
"use client"
import { useState } from "react";
import Header from "../components/Header";
import TaskHeader from "../components/TaskHeader";
import TaskListing from "../components/TaskListing";
import PostTest from "@/components/Quiz";
import PostTestInteger from "@/components/QuizInteger"
import Attempted from "@/components/Attempted"
import IntegerAttempts from "@/components/IntegerAttempts"
import attempt from "../../public/json/attempt.json"
import integerAttempt from "../../public/json/integerAttempt.json"
const Main =() => {
  const [quiz,setQuiz]=useState(false);
  const [integerQuiz,setIntegerQuiz]=useState(false)
  const [showAttempts,setShowAttempts]=useState(false);
  const[showIntegerAttempts,setShowIntegerAttempts]=useState(false);
  return (
    <div className="w-full bg-black">
      <Header  />
      <TaskHeader  />
     {quiz?<PostTest setQuiz={setQuiz}t/>:integerQuiz?<PostTestInteger setIntegerQuiz={setIntegerQuiz}/>:showAttempts?<Attempted setShowAttempts={setShowAttempts} attempts={attempt} />:showIntegerAttempts?<IntegerAttempts attempts={integerAttempt} setShowIntegerAttempts={setShowIntegerAttempts}  />:<TaskListing setShowAttempts={setShowAttempts} setQuiz={setQuiz} setIntegerQuiz={setIntegerQuiz} setShowIntegerAttempts={setShowIntegerAttempts} />}
    </div>
  );
};

export default Main;
