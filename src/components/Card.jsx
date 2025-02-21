
import { BsThreeDots } from "react-icons/bs";
import { FaU, FaUser } from "react-icons/fa6";
// import { IoMdTimer } from "react-icons/io";

const Card = (props) => {
  // facing error while passing colors throug json file. Only pink color is getting rendered. So using this approach.
  const textColorArray = [
    "text-rose-500",
    "text-green-500",
    "text-red-500",
    "text-yellow-500",
    "text-purple-500",
    "text-fuchsia-500",
    "text-red-500",
    "text-yellow-500",
    "text-purple-500",
    "text-fuchsia-500",
  ];
  const bgColorArray = [
    "bg-rose-500",
    "bg-green-500",
    "bg-red-500",
    "bg-yellow-500",
    "bg-purple-500",
    "bg-fuchsia-500",
    "bg-red-500",
    "bg-yellow-500",
    "bg-purple-500",
    "bg-fuchsia-500",
  ];
  const randomIndex = () => {
    // console.log Math.random(7);
    return Math.floor(Math.random() * 10);
  };

  // const colIndex = randomIndex();
  return (
    // no color is working except pink 500. As of now, leaving it.
    <div
      className={`rounded-3xl px-5 py-10 grid gap-y-7 h[200px] w-[400px] bg-[#211a75]`}
    >
      <div className="flex justify-between w-full">
        <div className="flex justify-start gap-x-3">
          <div
            className={`h-4 w-4 rounded-full bg-rose-500 my-auto`}
          ></div>
          <p className={`text-rose-500 text-lg`}>
            {props.type}
          </p>
        </div>
        <BsThreeDots className="my-auto" />
      </div>
      <p className="w-full">{props.description}</p>
      <div className="h-2 rounded-3xl bg-white w-full my-auto ">
        <div
          className={`rounded-3xl h-full w-${props.progress} bg-rose-500`}
        ></div>
      </div>
      <div className="flex justify-between w-full">
        <div className="flex ">
          <span className="inline-block z-40">
            <img
              className="h-10 rounded-full border-2 border-white"
              src="/img/user1.jpg"
              alt="user"
            ></img>
          </span>
          <span className="inline-block relative -left-5 z-30">
            <img
              className="h-10 rounded-full border-2 border-white"
              src="/img/user2.jpg"
              alt="user"
            ></img>
          </span>
          <span className="inline-block relative -left-9 z-20">
            <img
              className="h-10 rounded-full border-2 border-white"
              src="/img/user3.jpg"
              alt="user"
            ></img>
          </span>
          <span className="inline-block relative -left-12 z-10">
            <img
              className="h-10 rounded-full border-2 border-white"
              src="/img/user4.jpg"
              alt="user"
            ></img>
          </span>
        </div>
        <div className="flex justify-end gap-x-3 text-[#a5a1d0]">
          <FaUser className="my-auto" />
          <p className="text-sm self-center">People Attempted </p>
        </div>
       
      </div>
      {props.section=='todo'?
      <button className="text-right p-2 border-2 w-max float-right rounded-2xl hover:cursor-pointer hover:opacity-50"
      onClick={()=>{
        if(props.type=="MCQ Based")
          props.setQuiz(true)
        else if(props.type=="Integer Based")
          props.setIntegerQuiz(true)
      }}>Start</button>:
      <button className="text-right p-2 border-2 w-max float-right rounded-2xl hover:cursor-pointer hover:opacity-50" onClick={()=>{
        if(props.type=="MCQ Based"){
        props.setShowAttempts(true)}
      else {props.setShowIntegerAttempts(true)}
        }}>View Your Attempts</button>}
    </div>
  );
};

export default Card;
