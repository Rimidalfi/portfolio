import { useState, useEffect } from "react";
import getQuote from "../utils/getQuote";

// interface Quote {
//   text: string;
//   author: string;
// }
export default function Quote() {
  const { VITE_ACCESS_TOKEN, VITE_SPACE_ID } = import.meta.env;
  const [quote, setQuote] = useState<string[]>([]);

  useEffect(() => {
    getQuote(VITE_SPACE_ID, VITE_ACCESS_TOKEN, setQuote);
    console.log("QUTE COMP State :", typeof quote[0]);
  }, []);

  return (
    <div className="flex-col items-center pt-4 hidden md:block ">
      <p className="font-montserrat-italic">"{quote[0]}"</p>
      <p className="font-montserrat-thin"> - {quote[1]}</p>
    </div>
  );
}
