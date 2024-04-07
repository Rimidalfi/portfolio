import { useState, useEffect } from "react";
import RICHTEXT_OPTIONS from "../utils/projectOptions";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import getImprint from "../utils/getImprint";

export interface imprintData {
  title: any;
  name: any;
  street: any;
  city: any;
  email: any;
  phone: any;
  richText: any;
}
export default function ImprintText() {
  const [imprintData, setImprintData] = useState<imprintData | undefined>();
  useEffect(() => {
    getImprint(setImprintData);
  }, []);
  return (
    <div className="md:w-2/4">
      <h1 className="text-xl font-montserrat-semibold py-2">
        {imprintData?.title}
      </h1>
      <p className="py-1">{imprintData?.name}</p>
      <p className="py-1">{imprintData?.street}</p>
      <p className="py-1">{imprintData?.city}</p>
      <p className="py-1">{imprintData?.email}</p>
      {imprintData?.phone ? <p className="py-2">{imprintData?.phone}</p> : null}
      {imprintData?.richText
        ? documentToReactComponents(imprintData?.richText, RICHTEXT_OPTIONS)
        : null}
    </div>
  );
}
