import { useEffect, useState, FormEvent } from "react";

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
  children: React.ReactNode;
}
export default function HideInfo(props: calcProps) {
  const [calcValues, setCalcValues] = useState<calcData | undefined>();
  const [userInput, setUserInput] = useState<number | undefined>();
  const [visability, setVisability] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  const onClick = () => {
    if (userInput === calcValues?.result) {
      setVisability(false);
      setError(false);
    } else {
      setVisability(true);
      setError(true);
    }
  };
  function onChange(event: FormEvent<HTMLInputElement>) {
    const target = event.target as HTMLFormElement;
    const value: string = target.value;
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
    //console.log("HIDEINFO", calcValues, "USERINPUT", userInput);
  }, []);
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className=" w-4/6 flex flex-col items-center justify-center">
        <input
          className="my-2 p-2 w-10/12  md:w-6/12 lg:w-4/12 bg-slate-200 rounded-xl shadow-inner text-center "
          type="text"
          placeholder={`what is ${calcValues?.firstValue}+${calcValues?.secondValue} ?`}
          value={userInput || ""}
          onChange={onChange}
          hidden={!visability}
        />
        <label hidden={!error} className="text-sm p-1 text-red-700">
          {`* Please enter the result of ${calcValues?.firstValue}+${calcValues?.secondValue} to get contact`}
        </label>
        <div hidden={visability}>{props.children}</div>
        <button
          onClick={onClick}
          hidden={!visability}
          className="w-10/12 md:w-6/12 font-montserrat-semibold text-white bg-gradient-to-bl from-cyan-400 to-indigo-600 py-2 px-3 self-left m-4  rounded-full hover:opacity-90"
        >
          show contact
        </button>
      </div>
    </div>
  );
}
