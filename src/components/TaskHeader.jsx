import { AiOutlineArrowLeft } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BiSolidUserPlus, BiMessageDots, BiPlusMedical } from "react-icons/bi";
// import Header from "./Header";
const TaskHeader = () => {
  // console.log("items",items)
  return (
    <div className="w-full">
      <div className="bg-[#0c122b] m-4 rounded-lg p-5 h-max">
        <div className="w-full flex justify-between h-max gap-y-10">
          <div>
            <div className="flex flex-wrap justify-start gap-3">
              <div className="bg-gray-200 rounded-full p-2 h-10">
                <AiOutlineArrowLeft className="text-black my-auto text-xl font-bold" />
              </div>
              <div className="grid gap-y-4">
                <p className="font-bold text-xl">School November Tasks</p>
                <p>Created by Instructor Day on November 31,2022</p>
              </div>
            </div>
          </div>
          <div className="grid gap-y-5 w-max h-max">
            <div className="flex justify-end gap-x-3">
              <div className="lg:flex hidden gap-x-3">
                <div className="">
                  <p className="font-bold text-lg">Centered Marital Arts</p>
                  <p className="text-gray-200 text-base ">Sunnyvale, Ca</p>
                </div>
                <div className="">
                  <img
                    src="/img/circled.png"
                    alt="circle"
                    className="h-14 bg-white rounded-xl"
                  />
                </div>
              </div>
              <BsThreeDotsVertical className="text-white text-2xl" />
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-between w-full gap-y-4 p-5">
          <div className="flex justify-start gap-4 flex-wrap w-max">
            <div className="flex ">
              <span className="inline-block z-40">
                <img
                  className="h-10 rounded-full border-2 border-white"
                  src="/img/user1.jpg"
                  alt="user"
                ></img>
              </span>
              <span className="inline-block relative -left-4 z-30">
                <img
                  className="h-10 rounded-full border-2 border-white"
                  src="/img/user2.jpg"
                  alt="user"
                ></img>
              </span>
              <span className="inline-block relative -left-5 z-20">
                <img
                  className="h-10 rounded-full border-2 border-white"
                  src="/img/user3.jpg"
                  alt="user"
                ></img>
              </span>
              <span className="inline-block relative -left-7 z-10">
                <img
                  className="h-10 rounded-full border-2 border-white"
                  src="/img/user4.jpg"
                  alt="user"
                ></img>
              </span>
              <span className="inline-block relative -left-8 bg-white h-10 text-black rounded-full p-2">
                +4
              </span>
            </div>
            <div className="flex justify-between p-2 gap-x-3 rounded-xl bg-[#6418c3] w-max h-max font-bold ">
              <BiSolidUserPlus className=" text-white my-auto" />
              <p className="self-center">Invite People</p>
            </div>
            <div className="p-2 rounded-xl border-2 border-[#6418c3] w-max h-max font-semibold">
              Private
            </div>
            <div className="p-2 rounded-xl border-2 bg-[#7879f1] w-max h-max font-semibold">
              Edit
            </div>
            <div className="p-2 flex justify-between gap-x-3  rounded-xl border-2 border-[#6418c3] w-max h-max font-semibold">
              <BiMessageDots className=" my-auto" />
              45 Comments
            </div>
          </div>
          <div className="flex flex-wrap  gap-x-4 items-center ">
            <p className="font-bold  self-center">Total Progress 60% </p>
            <div className="h-3 rounded-3xl bg-white my-auto w-full sm:w-80">
              <div className="rounded-3xl h-full bg-[#6418c3] w-4/5 "></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskHeader;
