import { useState, useEffect } from "react";

export default function GetUser() {
  const [user, setUser] = useState(null);
  const [content, setContent] = useState("");
  const [displayedContent, setDisplayedContent] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const animKey = setInterval(() => {
      setIndex((index) => {
        if (index >= content.length - 1) {
          clearInterval(animKey);
          return index;
        }
        return index + 1;
      });
    }, 50);
  }, []);

  useEffect(() => {
    setDisplayedContent(
      (displayedContent) => displayedContent + content[index]
    );
  }, [index]);
  useEffect(() => {
    if (user) {
      setContent(
        "Username: " + user.username + "\n Password: " + user.password
      );
    }
  }, [user]);
  useEffect(() => {
    setDisplayedContent("");
    setIndex(0);

    const animKey = setInterval(() => {
      setIndex((index) => {
        if (index >= content.length - 1) {
          clearInterval(animKey);
          return index;
        }
        return index + 1;
      });
    }, 50);
  }, [content]);

  const handleClick = () => {
    let randomUserId = Math.floor(Math.random() * 100) + 1;
    fetch(`https://dummyjson.com/users/${randomUserId}`)
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((error) => console.error(error));
  };
  return (
    <>
      <div className="flex align-middle gap-5">
        <h1 className="text-4xl font-bold my-4">
          Get random <br /> credentials!
        </h1>
        <button
          className="stroke-slate-600 border-2 my-auto py-2 px-4 rounded-full min-w-max shadow-lg hover:bg-slate-200 hover:text-slate-700 transition-colors"
          onClick={handleClick}
        >
          Pres me
        </button>
      </div>
      <br />
      <p className="text-left text-lg bg-teal-950 w-64 rounded-lg max-w-sm px-6 py-4 text-green-200">
        {user ? <>{displayedContent}</> : <>Waiting...</>}
        <span className="animate-ping select-none">|</span>
      </p>
    </>
  );
}
