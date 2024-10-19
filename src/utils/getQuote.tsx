import { SetStateAction, Dispatch } from "react";
import getEntry from "./getEntry";

const quoteEntry: string = "75clceYVFFdMXOeSuVzWRE";

function getQuote(setQuote: Dispatch<SetStateAction<string[]>>): void {
  getEntry(quoteEntry)
    .then((json: any) => {
      return json.items[0].fields;
    })
    .then((item) => {
      setQuote([item.quoteText, item.quoteAuthor]);
    })
    .catch((err) => console.error("ERROR:", err));
}

export default getQuote;
