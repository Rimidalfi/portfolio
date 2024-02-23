import { useState, useEffect } from "react";
import getHero from "../utils/getHero";

export default function Hero() {
  const { VITE_ACCESS_TOKEN, VITE_SPACE_ID } = import.meta.env;
  //   const [quote, setQuote] = useState<string[]>([]);

  useEffect(() => {
    getHero(VITE_SPACE_ID, VITE_ACCESS_TOKEN);
  }, []);

  return (
    <div className="grid">
      <div className="col-start-1 row-start-1 z-10 p-10 sm:p-20 md:p-30 xl:p-30 ">
        <h1 className=" font-montserrat-bold text-xl sm:text-4xl  xl:text-7xl">
          Wladimir Janowitsch
        </h1>
        <div className="pl-2 text-sm sm:text-lg md:text-2xl xl:text-3xl bg-white bg-opacity-35 rounded-xl w-auto sm:w-3/6 md:w-3/6 lg:w-3/6 xl:w-3/6">
          <h3 className="font-montserrat-bold-italic pt-0 sm:pt-1 md:pt-2">
            Developer & Designer
          </h3>
          <p className="w-auto  pb-4 pt-1 sm:pt-2 md:pt-4">
            Hello there! I'm Wladimir, a passionate designer and developer on a
            mission to turn ideas into captivating digital experiences.
          </p>
        </div>
      </div>
      <img
        className="col-start-1 row-start-1 z-0 object-none object-right h-4/6  w-full"
        src="https://images.ctfassets.net/nt5pwt3jycrq/5AGYYck6Vrtb0ROw5a2DtM/6da3d94122977c1569c6120e423725d4/Hero.png"
        alt=""
      />
    </div>
  );
}