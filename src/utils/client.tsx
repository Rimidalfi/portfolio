import { createClient } from "contentful";
const { VITE_ACCESS_TOKEN, VITE_SPACE_ID } = import.meta.env;
const client = createClient({
  space: VITE_SPACE_ID,
  environment: "master",
  accessToken: VITE_ACCESS_TOKEN,
});
export default client;
