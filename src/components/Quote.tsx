import { useState, useEffect } from "react";
import getQuote from "../utils/getQuote";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function Quote() {
  const [quote, setQuote] = useState<string[]>([]);

  useEffect(() => {
    getQuote(setQuote);
  }, []);

  return (
    <>
      {quote.length !== 0 ? (
        <div className="flex-col items-center pt-4 hidden md:block ">
          <p className="font-montserrat-italic">"{quote[0]}"</p>
          <p className="font-montserrat-thin"> - {quote[1]}</p>
        </div>
      ) : (
        <QuoteSkeleton />
      )}
    </>
  );
}

export function QuoteSkeleton() {
  return (
    <div className="flex-col items-center pt-4 hidden md:block w-96">
      <Skeleton count={1} containerClassName="flex-1" baseColor="#bfbfbb" />
      <Skeleton count={0.3} baseColor="#bfbfbb" />
    </div>
  );
}
