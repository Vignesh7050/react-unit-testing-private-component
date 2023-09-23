import React from "react";

import { labels } from "../utils/constants/childComponent";

export const ChildComponent = ({ buttonComponent }) => {
  return (
    <>
      <h4>{labels.headerText}</h4>
      {buttonComponent(labels.buttonComponentText)}
      {
        //and has some complex implementations .......
      }
    </>
  );
};
