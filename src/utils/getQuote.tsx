import { SetStateAction, Dispatch } from "react";
import client from "../utils/client";

const quoteEntry: string = "75clceYVFFdMXOeSuVzWRE";

function getQuote(setQuote: Dispatch<SetStateAction<string[]>>): void {
  client
    .getEntry(quoteEntry)
    .then((entry: any) => {
      const quoteData: string[] = [
        entry.fields.quoteText,
        entry.fields.quoteAuthor,
      ];
      setQuote(quoteData);
    })
    .catch((err) => console.error("ERROR:", err));
}

export default getQuote;
