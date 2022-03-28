import React from "react";

const Body = () => {
  return (
    <div className="h-[78%] sm:h-[84%] transition-all flex text-center">
      <div id="body" className="w-5/6 h-full bg-rose-400">
        body
        <div id="container h-full" className="flex">
          <div
            id="menuItems"
            className="w-1/4 h-full bg-pink-600 flex flex-col"
          >
            <div className="">menu item</div>
            <div className="">menu item</div>
            <div className="">menu item</div>
            <div className="">menu item</div>
            <div className="">menu item</div>
          </div>
          <form id="form" className="w-3/4 h-full bg-pink-300">
            <h2 className="m-4 bg-indigo-500">Title</h2>
            <input
              type="text"
              className="w-[70%] mx-auto my-3"
              placeholder="deneme"
            />
            <input
              type="text"
              className="w-[70%] mx-auto my-3"
              placeholder="deneme"
            />
            <input
              type="text"
              className="w-[70%] mx-auto my-3"
              placeholder="deneme"
            />
            <input
              type="text"
              className="w-[70%] mx-auto my-3"
              placeholder="deneme"
            />
            <input
              type="text"
              className="w-[70%] mx-auto my-3"
              placeholder="deneme"
            />
            <div className=" flex-row flex-wrap m-auto space-x-4  sm:space-x-10 lg:space-x-24 ">
              <button className="w-[30%] p-3  mx-auto bg-violet-300">
                Reset Button
              </button>
              <button className="w-[30%] p-3 mx-auto bg-violet-300">
                Submit Button
              </button>
            </div>
          </form>
        </div>
      </div>
      <div id="sidebar" className=" h-full w-1/6 bg-fuchsia-200">
        sidebar
      </div>
    </div>
  );
};

export default Body;
