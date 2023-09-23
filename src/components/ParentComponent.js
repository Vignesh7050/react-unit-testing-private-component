import React from "react";
import { labels } from "../utils/constants/parentComponent";

export default function ParentComponent(props) {
  const { children } = props;
  return (
    <>
      <h4>{labels.headerText}</h4>
      {children}
      {
        //and has some complex implemenations ...
      }
    </>
  );
}
