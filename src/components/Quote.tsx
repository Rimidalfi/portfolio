import { useState, useEffect } from "react";
import getQuote from "../utils/getQuote";

export default function Quote() {
  const [quote, setQuote] = useState<string[]>([]);

  useEffect(() => {
    getQuote(setQuote);
  }, []);

  return (
    <div className="flex-col items-center pt-4 hidden md:block ">
      <p className="font-montserrat-italic">"{quote[0]}"</p>
      <p className="font-montserrat-thin"> - {quote[1]}</p>
    </div>
  );
}
