import { createClient } from "contentful";
import { SetStateAction, Dispatch } from "react";

const logoEntry: string = "75clceYVFFdMXOeSuVzWRE";

function getQuote(
  spaceId: string,
  accessToken: string,
  setQuote: Dispatch<SetStateAction<string[]>>
): void {
  const client = createClient({
    space: spaceId,
    environment: "master",
    accessToken: accessToken,
  });
  client
    .getEntry(logoEntry)
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
