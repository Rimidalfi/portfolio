import { createClient } from "contentful";
// const VITE_ACCESS_TOKEN: string = "etYJKlg";
// const VITE_SPACE_ID: string = "nt5pwq";
const { VITE_ACCESS_TOKEN, VITE_SPACE_ID } = import.meta.env;
const client = createClient({
  space: VITE_SPACE_ID,
  environment: "master",
  accessToken: VITE_ACCESS_TOKEN,
});
export default client;
