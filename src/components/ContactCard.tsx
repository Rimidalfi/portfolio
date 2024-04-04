import { useState, FormEvent, useEffect } from "react";
import sendEmail from "../utils/sendEmail";

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
      setFormRequire((values: FormRequire) => ({ ...values, phone: true }));
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

  function onButtonClick() {
    if (formValues.email.includes("@") && formValues.message.length > 0) {
      sendEmail(formValues);
      console.log("FORMVALUES:", formValues);
      setFormValues({
        name: "",
        phone: "",
        email: "",
        message: "",
      });
      setStatus(true);
    } else {
      setFormRequire((values: FormRequire) => ({
        ...values,
        email: formValues.email.includes("@") ? true : false,
        message: formValues.message.length > 0 ? true : false,
      }));
      console.log("REQUIRED FIELDS EMPTY!");
    }
  }

  return (
    <div className="m-4 md:m-6 lg:m-8 w-screen  flex flex-col items-center justify-center  bg-white shadow-xl">
      <div
        className={
          status
            ? "absolute  flex flex-col justify-center items-center z-10 opacity-100 transition-opacity ease-in-out delay-150 duration-300"
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
          <h3 className="text-xl pt-2">Contact</h3>
          <div className="flex flex-row items-center justify-center text-slate-600">
            <h3 className="pr-1 py-2">Lets get in touch</h3>
            <h3 className="text-2xl">🤝</h3>
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center w-fit"
        >
          <input
            className="my-2 p-2 w-11/12 grow bg-slate-200 rounded-xl "
            type="text"
            placeholder="email"
            name="email"
            value={formValues?.email || ""}
            onChange={handleChange}
          />
          <label
            className="text-sm p-1 text-red-700"
            htmlFor=""
            hidden={formRequire.email}
          >
            * Please enter a valid email
          </label>
          <input
            className="my-2 p-2 w-11/12 bg-slate-200 rounded-xl"
            type="text"
            placeholder="name (optional)"
            name="name"
            value={formValues?.name || ""}
            onChange={handleChange}
          />
          <input
            className="my-2 p-2 w-11/12 bg-slate-200 rounded-xl "
            type="text"
            placeholder="phone (optional)"
            name="phone"
            value={formValues?.phone || ""}
            onChange={handlephoneChange}
          />
          <label
            className="text-sm p-1 text-red-700"
            htmlFor=""
            hidden={formRequire.phone}
          >
            * Please enter a valid Phone number
          </label>
          <textarea
            className="my-2 p-2 w-11/12 sm:w-96 bg-slate-200 rounded-xl "
            id=""
            cols={30}
            rows={10}
            placeholder="message"
            name="message"
            value={formValues?.message || ""}
            onChange={handleChange}
          ></textarea>
          <label
            className="text-sm p-1 text-red-700"
            htmlFor=""
            hidden={formRequire.message}
          >
            * Please enter message text
          </label>
          <button
            className="my-2 sm:my-3 p-2 w-11/12 bg-sky-500 h-12 rounded-xl active:scale-90 active:shadow-sm shadow-lg hover:bg-amber-400 active:bg-amber-100 duration-300 ease-in shadow-gray-400"
            onClick={onButtonClick}
          >
            Send
          </button>
          <div className="flex flex-col items-center text-gray-400 mb-2">
            <p>Your data is only used to contact you.</p>
            <a className=" text-xs" href="">
              Learn more
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
