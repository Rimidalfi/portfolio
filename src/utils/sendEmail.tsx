import { FormData } from "../components/ContactCard";

// const { VITE_EMAIL_API } = import.meta.env;
const VITE_EMAIL_API = "";

export default function sendEmail(formData: FormData) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  };
  fetch(VITE_EMAIL_API, requestOptions).then((response) => {
    response.json();
  });
}
