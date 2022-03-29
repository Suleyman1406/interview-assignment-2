import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userSchema, requireSchema } from "../../../Validations/FormValidation";
const Form = ({ colorState, errorState }) => {
  const [user, setUser] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isDisable, setDisable] = useState(true);
  const [isEmpty, setEmpty] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    let a = async () => {
      let isValid = await requireSchema.isValid(user);
      setDisable(!isValid);
    };
    a();
    setEmpty(checkEmpty);
  }, [user]);

  const reset = () => {
    setUser({
      name: "",
      surname: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    colorState.setColor("bg-[#cbd5e1]");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user.email);
    let a = async () => {
      await userSchema
        .validate(user)
        .catch((err) => {
          errorState.setError(err.message);
          return "error";
        })
        .then((e) => {
          if (e !== "error") {
            navigate("/");
          }
        });
    };
    a();
  };

  const checkEmpty = () => {
    if (
      user.name ||
      user.surname ||
      user.password ||
      user.email ||
      user.confirmPassword
    )
      return false;
    return true;
  };
  return (
    <form
      id="form"
      className="col-span-12 sm:col-span-9 h-full "
      onSubmit={handleSubmit}
    >
      <h2 className={"m-4 text-xl sm:text-3xl uppercase font-semibold "}>
        Please fill in this form
      </h2>
      <input
        type="text"
        value={user.name}
        onChange={(e) => setUser({ ...user, name: e.target.value })}
        className={`w-[85%] sm:w-[70%] mx-auto my-2 sm:my-3 py-2 px-3 sm:py-3 sm:px-5 outline-none shadow-md hover:shadow-lg transition duration-300 focus:shadow-xl animate-comeFromLeft`}
        placeholder="Your name..."
      />
      <input
        type="text"
        value={user.surname}
        onChange={(e) => setUser({ ...user, surname: e.target.value })}
        className={`w-[85%] sm:w-[70%] mx-auto my-2 sm:my-3 py-2 px-3 sm:py-3 sm:px-5 outline-none shadow-md hover:shadow-lg transition duration-300 focus:shadow-xl animate-comeFromRight`}
        placeholder="Your surname..."
      />
      <input
        type="text"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        className={`w-[85%] sm:w-[70%] mx-auto my-2 sm:my-3 py-2 px-3 sm:py-3 sm:px-5 outline-none shadow-md hover:shadow-lg transition duration-300 focus:shadow-xl animate-comeFromLeft`}
        placeholder="Your email..."
      />
      <input
        type="password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        className={`w-[85%] sm:w-[70%] mx-auto my-2 sm:my-3 py-2 px-3 sm:py-3 sm:px-5 outline-none shadow-md hover:shadow-lg transition duration-300 focus:shadow-xl animate-comeFromRight`}
        placeholder="Your password..."
      />
      <input
        type="password"
        value={user.confirmPassword}
        onChange={(e) => setUser({ ...user, confirmPassword: e.target.value })}
        className={`w-[85%] sm:w-[70%] mx-auto my-2 sm:my-3 py-2 px-3 sm:py-3 sm:px-5 outline-none shadow-md hover:shadow-lg transition duration-300 focus:shadow-xl animate-comeFromLeft`}
        placeholder="Your password again..."
      />

      <div className=" grid grid-cols-12 gap-2 sm:gap-10 md:gap-15 lg:gap-20    my-8">
        <button
          disabled={isEmpty}
          className={
            "form-btn w-[100%] col-start-3 col-end-7 " + colorState.color
          }
          type="button"
          onClick={reset}
        >
          Reset Button
        </button>
        <button
          disabled={isDisable}
          className={
            "form-btn w-[100%] col-start-7 col-end-11 " + colorState.color
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
