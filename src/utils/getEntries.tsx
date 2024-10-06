function getEntries(
  contentType: string,
  fields?: string
): Promise<Record<string, unknown>> {
  const resquest: string =
    "https://wladimir.janowitsch.com/api/contentful/entry/";
  const formatedFields: string = `&fields.${fields}`;

  const params: string = `content_type=${contentType}${
    typeof fields !== undefined ? formatedFields : ""
  }`;

  return fetch(resquest + params)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Response NOT OK! 🥲");
      }
      return response.json();
    })
    .catch((err) => console.error("GET ENTRY ERROR:", err));
}

export default getEntries;
