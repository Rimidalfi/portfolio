import { useState, useEffect } from "react";
import getVita from "../utils/getVita";

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
      className="text-4xl text-center p-32 bg-gray-400 text-white "
    >
      <p className=" bg-red-800">{vitaData?.vitaTitle}</p>
    </div>
  );
}
