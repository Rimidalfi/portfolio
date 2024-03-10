import { createClient } from "contentful";
// import { SetStateAction, Dispatch } from "react";

const logoEntry: string = "6L8DSF7ej4YRs8DhDLcuLp";

function getHero(
  spaceId: string,
  accessToken: string
  //   setQuote: Dispatch<SetStateAction<string[]>>
): void {
  const client = createClient({
    space: spaceId,
    environment: "master",
    accessToken: accessToken,
  });
  client
    .getEntry(logoEntry)
    .then((entry: any) => {
      //   const quoteData: string[] = [
      //     entry.fields.quoteText,
      //     entry.fields.quoteAuthor,
      //   ];
      //   setQuote(quoteData);
      // console.log("GETHERO ENTRY:", entry);
    })
    .catch((err) => console.error("ERROR:", err));
}

export default getHero;
