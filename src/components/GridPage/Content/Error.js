import React from "react";
import { BiErrorAlt } from "react-icons/bi";
const Error = ({ errorState }) => {
  setTimeout(() => {
    errorState.setError("");
  }, 3000);
  return (
    <>
      {errorState.error !== "" ? (
        <div className=" absolute min-w-10 top-3 right-2 sm:min-w-30 sm:top-14 sm:right-20 bg-tertiary text-white py-3 px-6 rounded-xl animate-wiggle">
          <BiErrorAlt className="float-left text-sm translate-y-1.5 sm:text-xl -translate-x-2 sm:translate-y-0.5" />
          <p className="font-semibold text-sm inline-block">
            {errorState.error}
          </p>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Error;
