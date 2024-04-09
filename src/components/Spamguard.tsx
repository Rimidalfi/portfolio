import { useEffect, useState, FormEvent } from "react";
import { SetStateAction, Dispatch } from "react";
import { FormRequire } from "./ContactCard";
export interface calcData {
  firstValue: number;
  secondValue: number;
  result: number;
}

function calc(a: number, b: number): number {
  return a + b;
}

function randomInt(min: number, max: number): number {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

interface calcProps {
  calcStatus: boolean;
  formRequire: FormRequire | undefined;
  setFormRequire: Dispatch<SetStateAction<FormRequire>>;
}
export default function Spamguard(props: calcProps) {
  const [calcValues, setCalcValues] = useState<calcData | undefined>();
  const [userInput, setUserInput] = useState<number | undefined>();

  function onChange(event: FormEvent<HTMLInputElement>) {
    const target = event.target as HTMLFormElement;
    const value: string = target.value;
    calcValues?.result === parseInt(value)
      ? props.setFormRequire((value) => ({ ...value, calc: true }))
      : props.setFormRequire((value) => ({ ...value, calc: false }));
    setUserInput(parseInt(value));
  }
  useEffect(() => {
    const summand1: number = randomInt(1, 10);
    const summand2: number = randomInt(1, 10);
    const result: number = calc(summand1, summand2);
    setCalcValues({
      firstValue: summand1,
      secondValue: summand2,
      result: result,
    });
  }, []);
  return (
    <div className="flex flex-col items-center justify-center w-screen ">
      <div className=" w-4/6 flex flex-col items-center justify-center">
        <input
          className="my-2 p-2 w-10/12  md:w-6/12 lg:w-4/12 bg-slate-200 rounded-xl shadow-inner text-center "
          type="text"
          placeholder={`what is ${calcValues?.firstValue}+${calcValues?.secondValue} ?`}
          value={userInput || ""}
          onChange={onChange}
        />
        <label className="text-sm p-1 text-red-700" hidden={props.calcStatus}>
          {`* Please enter the result of ${calcValues?.firstValue}+${calcValues?.secondValue}`}
        </label>
      </div>
    </div>
  );
}
