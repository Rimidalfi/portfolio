import { useEffect, useState } from "react";
import getIds from "../utils/getIds";
import VitaPoint, { VitaPointSkeleton } from "../components/VitaPoint";

export interface VitaObject {
  vitaId: string;
  vitaStartDate: string;
  vitaEndDate: string;
}
export default function VitaEntires() {
  const [vitaObjects, setVitaObjects] = useState<VitaObject[]>([]);
  useEffect(() => {
    getIds(setVitaObjects);
  }, []);
  const vitaPoints = vitaObjects.map((object) => {
    return <VitaPoint entryId={object.vitaId} key={object.vitaId} />;
  });
  return (
    <div className="relative flex-col text-white w-full">
      <div className="heading-container relative z-10">
        <h3 className="heading">Vita</h3>
      </div>
      <div className=" bg-slate-300 w-1 absolute left-3 inset-0 md:right-0 md:left-0 md:mx-auto z-0 mt-4 md:mt-6"></div>
      {vitaPoints.length !== 0 ? (
        vitaPoints
      ) : (
        <>
          <VitaPointSkeleton type="education" />
          <VitaPointSkeleton type="work" />
          <VitaPointSkeleton type="work" />
        </>
      )}
    </div>
  );
}
