import { useEffect, useState } from "react";
import getIds from "../utils/getIds";
import VitaPoint from "../components/VitaPoint";

export interface VitaObject {
  vitaId: string;
  vitaStartDate: string;
  vitaEndDate: string;
}
export default function VitaEntires() {
  const [vitaObjects, setVitaObjects] = useState<VitaObject[]>([]);
  useEffect(() => {
    getIds(setVitaObjects);
    // console.log(vitaIds);
  }, []);
  const vitaPoints = vitaObjects.map((object) => {
    return (
      <div key={object.vitaId}>
        <VitaPoint entryId={object.vitaId} />
        {/* {object.vitaStartDate}-{object.vitaEndDate} */}
      </div>
    );
  });
  return (
    <div className="text-4xl text-center p-32 bg-gray-400 text-white">
      Vita 📝
      {vitaPoints}
    </div>
  );
}
