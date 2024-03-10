import { useState, useEffect } from "react";
import getHero from "../utils/getHero";

export default function Hero() {
  const { VITE_ACCESS_TOKEN, VITE_SPACE_ID } = import.meta.env;
  //   const [quote, setQuote] = useState<string[]>([]);

  useEffect(() => {
    getHero(VITE_SPACE_ID, VITE_ACCESS_TOKEN);
  }, []);

  return (
    <div className="grid bg-red-500">
      <div className="col-start-1 row-start-1 z-10 p-8 sm:p-20 md:p-30 xl:p-30 text-white">
        <h1 className="font-montserrat-bold text-xl sm:text-4xl md:text-5xl xl:text-6xl">
          Wladimir Janowitsch
        </h1>
        <div className=" text-sm sm:text-lg md:text-2xl xl:text-3xl w-auto sm:w-3/6 md:w-3/6 lg:w-3/6 xl:w-3/6">
          <h3 className=" pt-0 sm:pt-1 md:pt-2">Developer & Designer</h3>
          <p className="w-5/6 sm:w-auto pb-4 pt-1 sm:pt-2 md:pt-4 font-montserrat-italic">
            "Hello there! I'm Wladimir, a passionate designer and developer on a
            mission to turn ideas into captivating digital experiences."
          </p>
        </div>
      </div>
      <div className="w-auto inset-0 col-start-1 row-start-1 md:col-start-2 md:row-start-1 bg-lime-600 z-0 overflow-hidden">
        <img
          className=""
          src="https://images.ctfassets.net/nt5pwt3jycrq/3UmWDf718AenAy3Jsib28t/96deeaa7c60de91b2276c1fbeef2b88f/Hero_4.png"
          alt=""
        />
      </div>
    </div>
  );
}
