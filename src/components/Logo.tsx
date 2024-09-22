import { useState, useEffect } from "react";
import getLogo from "../utils/getLogo";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export interface Props {
  color: string;
  path: string;
  height: string;
}
export default function Logo(props: Props) {
  const [logo, setLogo] = useState<string>("");

  let index: number = 0;
  if (props.color === "white") {
    index = 1;
  } else {
    index = 0;
  }

  useEffect(() => {
    getLogo(setLogo, index);
  }, []);

  return (
    <>
      {logo !== "" ? (
        <div className="">
          <Link to={props.path}>
            <img src={logo} alt="JANO Logo" className={props.height} />
          </Link>
        </div>
      ) : (
        <LogoSkeleton />
      )}
    </>
  );
}

export function LogoSkeleton() {
  return (
    <Skeleton
      height={"2rem"}
      width={"4rem"}
      baseColor="#bfbfbb"
      borderRadius={"1rem"}
    />
  );
}
