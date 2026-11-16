import React from "react";
import { useSearchParams } from "react-router";

const Marketing = () => {
  let [searchParams] = useSearchParams();


  return <div>Marketing
    <br />
    User is Active : {searchParams.get("user")}

    <br />
    Theme : {searchParams.get("theme")}
  </div>;
};

export default Marketing;
