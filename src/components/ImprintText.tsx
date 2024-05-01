import { useState, useEffect } from "react";
import RICHTEXT_OPTIONS from "../utils/projectOptions";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import getImprint from "../utils/getImprint";
import { Helmet } from "react-helmet-async";
import HideInfo from "./HideInfo";

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
    <div className="flex flex-col items-center w-full  md:w-3/4 p-4 md:p-6 ">
      <Helmet>
        <title>{imprintData?.title}</title>
        <meta name="description" content="" />
      </Helmet>
      <h1 className="text-xl font-montserrat-semibold py-2">
        {imprintData?.title}
      </h1>
      <p className="py-1">{imprintData?.name}</p>
      <p className="py-1">{imprintData?.street}</p>
      <p className="py-1">{imprintData?.city}</p>
      <HideInfo>
        <>
          <p className="py-1 w-max ">
            <a
              className="cursor-pointer font-montserrat-semibold text-sky-600 "
              href={`mailto:${imprintData?.email}`}
            >
              {imprintData?.email}
            </a>
          </p>
          {imprintData?.phone ? (
            <p className="py-2">{imprintData?.phone}</p>
          ) : null}
        </>
      </HideInfo>
      {imprintData?.richText
        ? documentToReactComponents(imprintData?.richText, RICHTEXT_OPTIONS)
        : null}
    </div>
  );
}
