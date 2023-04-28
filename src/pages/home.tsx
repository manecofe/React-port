import ReactLogo from "../assets/react.svg";

export default function Home() {
  return (
    <>
      <div className="container my-24 mt-44 text-gray-200 px-6 mx-auto bg-slate-800 rounded-xl">
        <div className="flex items-center px-6 py-12 md:px-12 text-center lg:text-left">
          <div className="select-none">
            <h1 className="my-auto text-4xl lg:text-6xl md:text-5xl xl:text-7xl font-bold tracking-tight">
              <div
                style={{ paddingBottom: "0.2em", marginBottom: "-0.2em" }}
                className="text-transparent bg-clip-text bg-gradient-to-br from-yellow-200 to-yellow-500"
              >
                React shop test Page
              </div>
              ready for an adventure?
            </h1>
          </div>
          <div className="m-auto">
            <img src={ReactLogo} alt="React logo" width={150}></img>
          </div>
        </div>
      </div>
      <div>
        <h1 className="my-36 font-bold text-center text-2xl text-slate-800">
          Scroll me
          <div className="animate-bounce">\/</div>
        </h1>
      </div>
      <div className="w-full pt-32 bg-gradient-to-t from-slate-800 via-slate-700" />
      <div className="w-full pt-32 bg-slate-800">
        <div className="flex justify-around p-12 mx-auto text-gray-200">
            <div className="p-16 shrink-0">
                <h1 className="text-4xl font-bold my-4">
                   Login
                </h1>
                <p>
                This page use the free API 
                <a className="hover:shadow-lg hover:text-cyan-500" href="https://dummyjson.com/" target="_blank"> dummyjson.com </a>
                to use data
                </p>
            </div>
            <div className=" -ml-0.5 w-0.5 bg-gray-600"></div>
            <div className="p-16">
                <h1 className="text-4xl font-bold my-4">
                   Get random credentials!
                </h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam doloribus corrupti quos saepe aspernatur obcaecati ad cum laudantium reiciendis modi odio, consequatur voluptatem. Culpa sequi velit quasi quam sed similique?
                </p>
            </div>
        </div>
      </div>
    </>
  );
}
