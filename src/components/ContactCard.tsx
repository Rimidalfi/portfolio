import { useState, FormEvent, useEffect } from "react";
import path from "../routes/pathConstants";
import sendEmail from "../utils/sendEmail";
import { Link } from "react-router-dom";
import Spamguard from "./Spamguard";

export interface FormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

export interface FormRequire {
  name: boolean;
  phone: boolean;
  email: boolean;
  message: boolean;
  calc: boolean;
}
//MARK: Hallo
export default function ContactCard() {
  const [formRequire, setFormRequire] = useState<FormRequire>({
    name: true,
    phone: true,
    email: true,
    message: true,
    calc: false,
  });
  const [formValues, setFormValues] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<boolean>(false);
  const [calcStatus, setCalcStatus] = useState<boolean>(true);
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
    if (formRequire.calc) {
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
    } else {
      formRequire.calc ? setCalcStatus(true) : setCalcStatus(false);
    }
  }

  return (
    <div className="flex flex-col items-center  shadow-xl">
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
            ? "z-0 flex flex-col justify-center items-center relative"
            : "opacity-0 transition-opacity ease-in-out delay-150 duration-300 z-0"
        }
      >
        <div className="heading-container">
          <h3 className="heading">Contact</h3>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col cursor-pointer items-center mb-4 md:mb-6 w-full md:w-5/12  bg-white md:rounded-3xl shadow-lg z-10 hover:shadow-2xl  ease-in duration-300"
        >
          <div className="flex flex-row items-center justify-center text-slate-600">
            <h3 className="pr-1 py-2">Lets get in touch</h3>
            <h3 className="text-2xl">🤝</h3>
          </div>
          <input
            className="my-2 p-2 grow bg-slate-200 rounded-xl shadow-inner"
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
            className="my-2 p-2   bg-slate-200 rounded-xl shadow-inner"
            type="text"
            placeholder="name (optional)"
            name="name"
            value={formValues?.name || ""}
            onChange={handleChange}
          />
          <input
            className="my-2 p-2  bg-slate-200 rounded-xl shadow-inner"
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
            className="my-2 p-2   bg-slate-200 rounded-xl shadow-inner resize-none"
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
          <Spamguard
            setFormRequire={setFormRequire}
            formRequire={formRequire}
            calcStatus={calcStatus}
          />

          <button
            className="w-6/12 font-montserrat-semibold text-white bg-gradient-to-bl from-cyan-400 to-indigo-600 py-2 px-3 self-left m-4  rounded-full hover:opacity-90"
            onClick={onButtonClick}
          >
            Send
          </button>
          <div className="flex flex-col items-center text-gray-400 mb-2">
            <p>Your data is only used to contact you.</p>
            <Link to={`/${path.LEGALS}`} className=" text-xs mb-1">
              Learn more
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
