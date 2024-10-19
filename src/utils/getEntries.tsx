function getEntries(
  contentType: string,
  fieldKey?: string,
  fieldValue?: string
): Promise<Record<string, unknown>> {
  const resquest: string =
    "https://wladimir.janowitsch.com/api/contentful/entry/";
  const formatedFields: string = `&fields.${fieldKey}=${fieldValue}`;

  const params: string = `content_type=${contentType}${
    fieldKey === undefined ? "" : formatedFields
  }`;
  return fetch(resquest + params)
    .then((response) => {
      console.log("get status:", response.status);
      if (!response.ok) {
        throw new Error("Response NOT OK! 🥲");
      }
      return response.json();
    })
    .catch((err) => console.error("GET ENTRY ERROR:", err));
}

export default getEntries;
