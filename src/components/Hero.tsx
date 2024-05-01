import { useState, useEffect } from "react";
import getHero from "../utils/getHero";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import SEO from "./SEO";

export interface HeroData {
  heroTitle?: string;
  heroText?: string;
  heroImage?: string;
  heroSubtitle?: string;
  heroMetaDescription?: string;
  heroMetaTitle?: string;
}

export default function Hero() {
  const [heroData, setHeroData] = useState<HeroData>();
  useEffect(() => {
    getHero(setHeroData);
  }, []);

  return (
    <>
      {heroData ? (
        <>
          <SEO
            title={heroData?.heroMetaTitle}
            description={heroData?.heroMetaDescription}
            name={heroData?.heroTitle}
            type="homepage"
          />
          <div className="flex flex-col md:flex-row justify-center bg-gradient-to-bl w-full from-cyan-400 to-indigo-600">
            <div className="flex flex-col justify-center text-white hero3">
              <h1 className="font-montserrat-bold hero1">
                {heroData?.heroTitle}
              </h1>
              <h3 className="font-montserrat-italic md:pb-4">
                {heroData?.heroSubtitle}
              </h3>
              <p className="">{heroData?.heroText}</p>
            </div>
            <div className="img self-center bottom-0 lg:pr-40 md:f-full">
              <img className="" src={heroData?.heroImage} alt="" />
            </div>
          </div>
        </>
      ) : (
        <HeroSkeleton />
      )}
    </>
  );
}

function HeroSkeleton() {
  return (
    <div className="flex flex-col md:flex-row justify-center bg-white h-1/6 w-full">
      <div className="flex flex-col justify-center hero3 gap-2">
        <Skeleton />

        <Skeleton count={2.5} height={"1rem"} />
      </div>
      <div className="img self-center bottom-0 mb-4 lg:pr-40 md:f-full">
        <Skeleton circle={true} width={"10rem"} height={"10rem"} />
      </div>
    </div>
  );
}
