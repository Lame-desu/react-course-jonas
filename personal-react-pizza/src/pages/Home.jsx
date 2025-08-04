// src/routes/Home.jsx

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setName as dispatchName } from "../features/user/userSlice";
import { getName } from "../features/user/userSlice";
import Button from "../components/UI/Button";
export default function Home() {
  const dispatch = useDispatch();
  const userName = useSelector(getName);
  const [name, setName] = useState("");
  const navigate = useNavigate();

  function handleSubmit() {
    if (name !== "") {
      dispatch(dispatchName(name));
      setName("");
    }
    navigate("/menu");
  }
  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-gray-50 py-20 text-center">
      <h1 className="text-3xl sm:text-4xl font-semibold text-gray-800">
        The best pizza.
      </h1>
      <p className="text-xl sm:text-4xl font-semibold text-yellow-500 mt-2 max-w-[48rem]">
        Straight out of the oven, straight to you.
      </p>

      <p className="mt-8 text-gray-700 text-base sm:text-lg">
        <span role="img" aria-label="waving hand">
          👋
        </span>
        Welcome! Please start by telling us your name:
      </p>
      {userName === "" ? (
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your full name"
          className="mt-4 px-20 pl-8 py-3 rounded-full bg-white shadow text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
      ) : (
        <button
          onClick={handleSubmit}
          className="uppercase font-medium text-lg bg-yellow-400 py-3 px-4 mt-8 rounded-full hover:bg-yellow-300 transition-all duration-300 "
        >{`continue ordering, ${userName}`}</button>
      )}

      {name && (
        <button
          onClick={handleSubmit}
          className="text-lg bg-yellow-400 py-3 px-4 mt-8 rounded-full hover:bg-yellow-300 transition-all duration-300"
        >
          Start Ordering
        </button>
      )}
    </div>
  );
}
