import React from "react";

const Flip = () => {
  return (
    <div className="flex min-h-screen flex-col justify-center bg-slate-100">
      <div className="group h-96 w-96 [perspective:1000px]">
        <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180dg)]">
          <div className="absolute inset-0 backface-visibility:hidden">
            <img
              src={"https://avatars.githubusercontent.com/u/62914608?v=4"}
              className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
              alt=""
            />
          </div>
          <div 
          className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform-rotateY(180deg)] [backface-visibility-hidden]"></div>
        </div>
      </div>
    </div>
  );
};

export default Flip;
