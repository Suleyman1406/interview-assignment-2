import React from "react";
import { BiErrorAlt } from "react-icons/bi";
const Error = ({ errorState }) => {
  setTimeout(() => {
    errorState.setError("");
  }, 3000);
  return (
    <>
      {errorState.error !== "" ? (
        <div className=" absolute  min-w-30 top-14 right-20 bg-tertiary text-white py-3 px-6 rounded-xl animate-wiggle">
          <BiErrorAlt className="float-left text-xl -translate-x-2 translate-y-0.5" />
          <p className="font-semibold inline-block">{errorState.error}</p>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Error;
