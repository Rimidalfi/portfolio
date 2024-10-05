function getEntry(url: string): Promise<Record<string, unknown>> {
  const resquest: string =
    "https://wladimir.janowitsch.com/api/contentful/entry/";

  return fetch(resquest + url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Response NOT OK! 🥲");
      }
      return response.json();
    })
    .catch((err) => console.error("GET ENTRY ERROR:", err));
}

export default getEntry;
