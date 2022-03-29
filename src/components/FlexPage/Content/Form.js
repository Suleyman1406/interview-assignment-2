import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { userSchema, requireSchema } from "../../../Validations/FormValidation";
const Form = ({ colorState }) => {
  const [user, setUser] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isDisable, setDisable] = useState(true);
  const resetColor = () => {
    colorState.setColor("bg-[#cbd5e1]");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let formData = {
      name: e.target[0].value,
      surname: e.target[1].value,
      email: e.target[2].value,
      password: e.target[3].value,
      confirmPassword: e.target[4].value,
    };
    console.log(formData);
  };

  useEffect(() => {
    let a = async () => {
      let isValid = await requireSchema.isValid(user);
      setDisable(!isValid);
    };
    a();
  }, [user]);

  return (
    <form id="form" className="w-3/4 h-full " onSubmit={handleSubmit}>
      <h2 className={"m-4 text-3xl uppercase font-semibold "}>
        Please fill in this form
      </h2>
      <input
        type="text"
        value={user.name}
        onChange={(e) => setUser({ ...user, name: e.target.value })}
        className={`w-[70%] mx-auto my-3 py-3 px-5 outline-none shadow-md hover:shadow-lg transition duration-300 focus:shadow-xl`}
        placeholder="Your name..."
      />
      <input
        type="text"
        value={user.surname}
        onChange={(e) => setUser({ ...user, surname: e.target.value })}
        className={`w-[70%] mx-auto my-3 py-3 px-5 outline-none shadow-md hover:shadow-lg transition duration-300 focus:shadow-xl`}
        placeholder="Your surname..."
      />
      <input
        type="text"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        className={`w-[70%] mx-auto my-3 py-3 px-5 outline-none shadow-md hover:shadow-lg transition duration-300 focus:shadow-xl`}
        placeholder="Your email..."
      />
      <input
        type="password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        className={`w-[70%] mx-auto my-3 py-3 px-5 outline-none shadow-md hover:shadow-lg transition duration-300 focus:shadow-xl`}
        placeholder="Your password..."
      />
      <input
        type="password"
        value={user.confirmPassword}
        onChange={(e) => setUser({ ...user, confirmPassword: e.target.value })}
        className={`w-[70%] mx-auto my-3 py-3 px-5 outline-none shadow-md hover:shadow-lg transition duration-300 focus:shadow-xl`}
        placeholder="Your password again..."
      />

      <div className=" flex-row flex-wrap m-auto space-x-4  sm:space-x-10 lg:space-x-24 my-8">
        <button
          className={
            "w-[30%] p-4 font-bold uppercase mx-auto duration-300 hover:shadow-2xl hover:-translate-y-2  " +
            colorState.color
          }
          type="button"
          onClick={resetColor}
        >
          Reset Button
        </button>
        <button
          disabled={isDisable}
          className={
            "w-[30%] p-4 font-bold uppercase mx-auto duration-300 hover:shadow-2xl disabled:translate-y-0 disabled:shadow-none disabled:cursor-not-allowed disabled:opacity-20 hover:-translate-y-2 " +
            colorState.color
          }
          type="submit"
        >
          Submit Button
        </button>
      </div>
    </form>
  );
};

export default Form;
