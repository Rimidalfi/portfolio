import { useState, FormEvent, useEffect } from "react";
import sendEmail from "../utils/sendEmail";
// import sendEmail from "../utils/sendEmail";

export interface FormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}
interface FormRequire {
  name: boolean;
  phone: boolean;
  email: boolean;
  message: boolean;
}

export default function ContactCard() {
  const [formRequire, setFormRequire] = useState<FormRequire>({
    name: true,
    phone: true,
    email: true,
    message: true,
  });
  const [formValues, setFormValues] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<boolean>(false);

  useEffect(() => {
    setStatus(false);
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  function handleChange(
    event: FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const target = event.target as HTMLFormElement;
    const value: string = target.value;
    const name: string = target.name;
    setFormValues((values: FormData) => ({ ...values, [name]: value }));
  }

  function handlephoneChange(event: FormEvent<HTMLInputElement>) {
    const target = event.target as HTMLFormElement;
    const value: string = target.value;
    const name: string = target.name;
    if (/^[\/\d-+]*$/.test(value)) {
      formRequire.phone = true;
      setFormValues((values: FormData) => ({ ...values, [name]: value }));
      console.log("VALUES NUMMBERS");
    } else {
      setFormRequire((values: FormRequire) => ({
        ...values,
        [name]: !formRequire.name,
      }));
      console.log("VALUES NOT NUMMBERS");
    }
  }

  return (
    <div className="relative flex flex-col items-center justify-center m-4 md:m-8 lg:m-14 rounded-xl bg-white shadow-xl">
      <div
        className={
          status
            ? "absolute inset-0 flex flex-col justify-center items-center z-10 opacity-100 transition-opacity ease-in-out delay-150 duration-300"
            : "opacity-0 absolute z-10"
        }
      >
        <h1 className="text-9xl m-4">🚀</h1>
        <p className=" text-green-600 font-montserrat-bold pr-2">Perfect!</p>
        <p>
          I'll get back to you <u>asap</u>.
        </p>
      </div>
      <div
        className={
          !status
            ? "z-0"
            : "opacity-0 transition-opacity ease-in-out delay-150 duration-300 z-0"
        }
      >
        <div className="text-center">
          <h3 className="text-xl pt-4">Contact</h3>
          <div className="flex flex-row items-center justify-center">
            <h3 className="pr-1 py-2">Lets get in touch</h3>
            <h3 className="text-2xl">🤝</h3>
          </div>
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
            type="email"
            placeholder="email"
            name="email"
            value={formValues?.email || ""}
            onChange={handleChange}
          />
          <input
            className="my-2 p-2 bg-slate-200 rounded-xl "
            type="tel"
            placeholder="phone (optional)"
            name="phone"
            value={formValues?.phone || ""}
            onChange={handlephoneChange}
          />
          <label
            className=" p-1 text-red-700"
            htmlFor=""
            hidden={formRequire.phone}
          >
            * Please enter a valid Phone number
          </label>

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
            className="mt-2 p-2 bg-sky-500 ounded-xl h-12 rounded-xl active:scale-90 active:shadow-sm shadow-lg hover:bg-amber-400 active:bg-amber-100 duration-300 ease-in shadow-gray-400"
            onClick={() => {
              console.log("FORMVALUES:", formValues);
              // sendEmail(formValues);
              setFormValues({
                name: "",
                phone: "",
                email: "",
                message: "",
              });
              setStatus(true);
            }}
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
