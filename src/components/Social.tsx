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
  const { VITE_ACCESS_TOKEN, VITE_SPACE_ID } = import.meta.env;
  const [socials, setSocials] = useState<Socials>({});
  useEffect(() => {
    getSocials(VITE_SPACE_ID, VITE_ACCESS_TOKEN, setSocials, socials);
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
