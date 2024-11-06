import { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState("");
  return (
    // Calculator Container
    <div className="CalculatorApps w-1/3  border-2 border-red-700 p-2">
      {/* display  Container*/}

      <div className="w-full flex justify-center items-center">
        <input
          readOnly
          value={value}
          className="w-full bg-black text-white rounded p-2 "
        />
      </div>

      {/* Button Container */}
      <div className="ButtonContainer w-full p-2">
        <form action="" onClick={(e) => e.preventDefault()}>
          <div className="w-full flex items-center gap-2 m-2">
            <button
              onClick={(e) => setValue(value + "7")}
              className="button w-2/3 p-1 rounded-lg text-white text-center bg-blue-500 hover:bg-blue-700"
            >
              7
            </button>
            <button
              onClick={(e) => setValue(value + "8")}
              className="button w-2/3 p-1 rounded-lg text-white text-center bg-blue-500 hover:bg-blue-700"
            >
              8
            </button>
            <button
              onClick={(e) => setValue(value + "9")}
              className="button w-2/3 p-1 rounded-lg text-white text-center bg-blue-500 hover:bg-blue-700"
            >
              9
            </button>
            <button
              onClick={(e) => setValue(value + "/")}
              className="button w-2/3 p-1 rounded-lg text-white text-center bg-gray-400 hover:bg-gray-500"
            >
              /
            </button>
          </div>

          <div className="w-full flex items-center gap-2 m-2">
            <button
              onClick={(e) => setValue(value + "4")}
              className="button w-2/3 p-1 rounded-lg text-white text-center bg-blue-500 hover:bg-blue-700"
            >
              4
            </button>
            <button
              onClick={(e) => setValue(value + "5")}
              className="button w-2/3 p-1 rounded-lg text-white text-center bg-blue-500 hover:bg-blue-700"
            >
              5{" "}
            </button>
            <button
              onClick={(e) => setValue(value + "6")}
              className="button w-2/3 p-1 rounded-lg text-white text-center bg-blue-500 hover:bg-blue-700"
            >
              6
            </button>
            <button
              onClick={(e) => setValue(value + "*")}
              className="button w-2/3 p-1 rounded-lg text-white text-center bg-gray-400 hover:bg-gray-500"
            >
              *
            </button>
          </div>

          <div className="w-full flex items-center gap-2 m-2">
            <button
              onClick={(e) => setValue(value + "1")}
              className="button w-2/3 p-1 rounded-lg text-white text-center bg-blue-500 hover:bg-blue-700"
            >
              1
            </button>
            <button
              onClick={(e) => setValue(value + "2")}
              className="button w-2/3 p-1 rounded-lg text-white text-center bg-blue-500 hover:bg-blue-700"
            >
              2
            </button>
            <button
              onClick={(e) => setValue(value + "3")}
              className="button w-2/3 p-1 rounded-lg text-white text-center bg-blue-500 hover:bg-blue-700"
            >
              3
            </button>
            <button
              onClick={(e) => setValue(value + "-")}
              className="button w-2/3 p-1 rounded-lg text-white text-center bg-gray-400 hover:bg-blue-700"
            >
              -
            </button>
          </div>

          <div className="w-full flex items-center gap-2 m-2">
            <button
              onClick={(e) => setValue(value + "0")}
              className="button w-2/3 p-1 rounded-lg text-white text-center bg-blue-500 hover:bg-blue-700"
            >
              0
            </button>
            <button
              onClick={(e) => setValue(value + ".")}
              className="button w-2/3 p-1 rounded-lg text-white text-center bg-blue-500 hover:bg-blue-700"
            >
              .
            </button>
            <button
              onClick={(e) => setValue(value + "+")}
              className="button w-2/3 p-1 rounded-lg text-white text-center bg-gray-400 hover:bg-blue-700"
            >
              +
            </button>
            <button
              onClick={(e) => {
                try {
                  setValue(eval(value));
                } catch (error) {
                  setValue("Error");
                }
              }}
              className="button w-2/3 p-1 rounded-lg text-white text-center bg-gray-400 hover:bg-blue-700"
            >
              =
            </button>
          </div>

          <div className="w-full flex items-center gap-2 m-2">
            <button
              onClick={(e) => setValue(value + "00")}
              className="button w-2/3 p-1 rounded-lg text-white text-center bg-blue-500 hover:bg-blue-700"
            >
              00
            </button>
            <button
              onClick={(e) => setValue(value + "")}
              className="button w-2/3 p-1 rounded-lg text-white text-center bg-blue-500 hover:bg-blue-700"
            >
              Ac
            </button>
            <button
              onClick={(e) => setValue(value.slice(0, -1))}
              className="button w-2/3 p-1 rounded-lg text-white text-center bg-gray-400 hover:bg-blue-700"
            >
              Del
            </button>
            {/* <button onClick={e => setValue(eval(value))} className='button w-2/3 p-1 rounded-lg text-white text-center bg-gray-400 hover:bg-blue-700'>=</button> */}
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
