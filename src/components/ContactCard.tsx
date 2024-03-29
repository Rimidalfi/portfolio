import { useState, FormEvent, useEffect } from "react";
// import sendEmail from "../utils/sendEmail";

interface formData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

export default function ContactCard() {
  const [formValues, setFormValues] = useState<formData>({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  useEffect(() => {}, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  function handleChange(
    event: FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const target = event.target as HTMLFormElement;
    const value: string = target.value;
    const name: string = target.name;
    setFormValues((values) => ({ ...values, [name]: value }));
  }

  return (
    <div className="flex flex-col appearance-none m-4 md:m-8 lg:m-14 rounded-xl bg-white shadow-xl  hover:-translate-y-1 touch:-translate-y-1 duration-500 hover:shadow-gray-500">
      <div className="text-center">
        <h3 className="text-xl pt-4">Contact</h3>
        <p className="px-6 py-2">
          send us a message and your contacts and I get back you you as soon as
          possible!
        </p>
      </div>
      <form onSubmit={handleSubmit} className="px-4 pb-4 flex flex-col">
        <input
          className="my-2 p-2 bg-slate-200 rounded-xl"
          type="text"
          placeholder="name"
          name="name"
          value={formValues?.name || ""}
          onChange={handleChange}
        />
        <input
          className="my-2 p-2 bg-slate-200 rounded-xl "
          type="text"
          placeholder="phone"
          name="phone"
          value={formValues?.phone || ""}
          onChange={handleChange}
        />
        <input
          className="my-2 p-2 bg-slate-200 rounded-xl "
          type="text"
          placeholder="email"
          name="email"
          value={formValues?.email || ""}
          onChange={handleChange}
        />

        <textarea
          className="my-2 p-2 bg-slate-200 rounded-xl "
          id=""
          cols={30}
          rows={10}
          placeholder="message"
          name="message"
          value={formValues?.message || ""}
          onChange={handleChange}
        ></textarea>
        <button
          className=" bg-green-300"
          onClick={() => {
            console.log("FORMVALUES:", formValues);
            setFormValues({
              name: "",
              phone: "",
              email: "",
              message: "",
            });
          }}
        >
          Send
        </button>
      </form>
    </div>
  );
}
