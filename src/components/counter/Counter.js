import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, reset, setCustomValue } from "../../redux/state/counter/counterSlice";
import { toast } from "react-toastify";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const customValue = useRef();

  const handleSetCustomValue = () => {
    const value = customValue.current.value;

    // Validate input
    if (!value) {
      toast.error("Please enter a valid number");
    } else {
        dispatch(setCustomValue(Number(value)));
        toast.success("Custom value added successfully!");
        customValue.current.value = "";
    }
  };


  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg border-animation">
        <h1 className="text-4xl font-extrabold text-center text-blue-600 mb-6">Counter App!</h1>
        <div className="text-center mb-6">
          <span className="text-5xl font-bold text-gray-800">{count}</span>
        </div>
        <div className="flex justify-center space-x-4 mb-6">
          <button
            onClick={() => dispatch(decrement())}
            className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition"
          >
            Decrement
          </button>
          <button
            onClick={() => dispatch(increment())}
            className="px-4 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition"
          >
            Increment
          </button>
          <button
            onClick={() => dispatch(reset())}
            className="px-4 py-2 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 transition"
          >
            Reset
          </button>
        </div>
        <div className="space-y-4">
          <input ref={customValue}
            type="number"
            placeholder="Enter a number"
            className="w-full px-4 py-2 text-gray-800 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
          />
          <button 
           onClick={handleSetCustomValue}
           className="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition">
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
