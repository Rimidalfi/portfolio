import { useState, useEffect } from "react";
import getVita from "../utils/getVita";
const work: string =
  "absolute -inset-1 bg-gradient-to-tr from-teal-300 to-teal-100 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-1200 group-hover:duration-200";
const education: string =
  "absolute -inset-1 bg-gradient-to-tr from-sky-300 to-sky-100 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-1200 group-hover:duration-200";

export interface VitaData {
  vitaTitle?: string;
  vitaDescription?: string;
  vitaStartDate?: string;
  vitaEndDate?: string;
  vitaType?: boolean;
}
export interface Props {
  entryId: string;
}

export default function VitaPoint(props: Props) {
  const [vitaData, setVitaData] = useState<VitaData>();
  useEffect(() => {
    getVita(props.entryId, setVitaData);
  }, []);
  return (
    <div
      key={props.entryId}
      className="relative bg-slate-50 mx-6 my-3 rounded-xl text-slate-900 hover:-translate-y-1 touch:-translate-y-1 duration-500"
    >
      <div className="relative group cursor-pointer p-1">
        <div className={vitaData?.vitaType ? work : education}></div>
        <div className="relative px-7 py-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-center space-x-6">
          <div className="space-y-2">
            <p className="border-gray-50 text-xl">{vitaData?.vitaTitle}</p>
            <p className="border-gray-50 text-sm">
              {vitaData?.vitaDescription}
            </p>
            <p className="border-gray-50 text-sm">
              {vitaData?.vitaStartDate?.slice(0, 4)}-
              {vitaData?.vitaEndDate?.slice(0, 4)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
