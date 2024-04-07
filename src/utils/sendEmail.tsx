import { FormData } from "../components/ContactCard";

export default function sendEmail(formData: FormData) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  };
  fetch("http://localhost:3001/", requestOptions).then((response) => {
    response.json();
  });
}
