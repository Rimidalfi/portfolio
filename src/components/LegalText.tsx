import { useState, useEffect } from "react";
import getLegals from "../utils/getLegals";
import RICHTEXT_OPTIONS from "../utils/projectOptions";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
export default function LegalText() {
  const [legalData, setLegalData] = useState<any | undefined>();
  useEffect(() => {
    getLegals(setLegalData);
  }, []);
  return (
    <div className="md:w-2/4">
      {documentToReactComponents(legalData, RICHTEXT_OPTIONS)}
    </div>
  );
}
