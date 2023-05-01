import ReactLogo from "../assets/react.svg";
import Footer from "./components/footer";
import GetUser from "./components/getUser";

export default function Home() {
  return (
    <>
      <section className="container my-24 mt-44 text-gray-200 px-6 mx-auto bg-slate-800 rounded-xl">
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
      </section>
      <div>
        <h1 className="my-36 font-bold text-center text-2xl text-slate-800">
          Scroll me
          <div className="animate-bounce">\/</div>
        </h1>
      </div>
      <div className="w-full pt-32 bg-gradient-to-t from-slate-800 via-slate-700" />
      <section className="w-full pt-32 bg-slate-800">
        <div className="flex justify-around p-12 mx-auto text-gray-200">
          <div className="p-16">
            <h1 className="text-4xl font-bold my-4">Login</h1>
            <p>
              <a
                className="hover:shadow-lg hover:text-cyan-500"
                href="https://dummyjson.com/"
                target="_blank"
              >
                Dummyjson.com
              </a>{" "}
              is a website that provides a simple API for generating mock data.
              This page uses this API, get some credentials and log in.
            </p>
          </div>
          <div className=" -ml-0.5 w-0.5 bg-gray-600"></div>
          <div className="p-16 shrink-0">
            <GetUser />
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
}
