function getEntry(url: string) {
  const resquest: string =
    "https://wladimir.janowitsch.com/api/contentful/entry/";

  return fetch(resquest + url);
}

export default getEntry;
