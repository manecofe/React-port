import { useState } from "react";
import { AiOutlineDown } from "react-icons/ai";

export default function Loginpanel() {
  const [Showlogin, setShowlogin] = useState(false);
  const loginclick = () => {
    setShowlogin(!Showlogin);
  };

  return (
    <>
      <div
        onClick={loginclick}
        className="text-white z-10 flex ml-auto h-full select-none transition-colors my-auto mx-1 hover:bg-slate-200 hover:text-slate-800 px-24"
      >
        <div className="my-auto">Login</div>

        <AiOutlineDown
          style={{ transform: Showlogin ? "rotate(180deg)" : "rotate(0deg)" }}
          className="my-auto transition-transform"
          size="20"
        />
      </div>
      <div
        className={
          (Showlogin
            ? "opacity-0 -top-10"
            : "opacity-100 top-10") +
              " transition-all right-0 rounded-lg fixed flex flex-col m-4 p-4 bg-slate-800/50 text-slate-200"
        }
      >
        <label> Username</label>
        <input placeholder="MyUsername"></input>
        <label> Username</label>
        <input type="password" placeholder="password"></input>
      </div>
    </>
  );
}
