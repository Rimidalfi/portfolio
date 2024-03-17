import { useState, useEffect } from "react";
import getSocials from "../utils/getSocials";

interface SocialURLS {
  logoURL: string;
  URL: string;
}
interface Socials {
  [key: string]: SocialURLS;
}

export interface Props {
  media: string;
  size: string;
}

export default function Social(props: Props) {
  const [socials, setSocials] = useState<Socials>({});
  useEffect(() => {
    getSocials(setSocials, socials);
  }, []);
  return (
    <>
      {socials[props.media] ? (
        <a href={socials[props.media].URL}>
          <img
            src={socials[props.media].logoURL}
            alt={`${props.media}-Logo`}
            className={props.size}
          />
        </a>
      ) : null}
    </>
  );
}
