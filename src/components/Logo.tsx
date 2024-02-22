import { useState, useEffect } from "react";
import getLogo from "../utils/getLogo";
import { Link } from "react-router-dom";
export interface Props {
  color: string;
  path: string;
  height: number;
}
export default function Logo(props: Props) {
  const { VITE_ACCESS_TOKEN, VITE_SPACE_ID } = import.meta.env;
  const [logo, setLogo] = useState<string>("");

  let index: number = 0;
  if (props.color === "white") {
    index = 1;
  } else {
    index = 0;
  }
  useEffect(() => {
    getLogo(VITE_SPACE_ID, VITE_ACCESS_TOKEN, setLogo, index);
  }, []);

  return (
    <div>
      <Link to={props.path}>
        <img src={logo} alt="JANO" className={`h-${props.height}`} />
      </Link>
    </div>
  );
}
