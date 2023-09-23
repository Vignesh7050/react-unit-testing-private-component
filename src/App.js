import React from "react";

import "./App.css";
import ParentComponent, { ChildComponent } from "./components";
import { labels } from "./utils/constants/app";

function App() {
  const [buttonClick, setButtonClick] = React.useState({
    isClicked: false,
    data: null,
  });

  const buttonCell = (data) => {
    return (
      <button onClick={() => setButtonClick({ isClicked: true, data })}>
        {labels.buttonOfChildComponent}
      </button>
    );
  };

  return (
    <>
      <ParentComponent>
        <ChildComponent buttonComponent={buttonCell} />
      </ParentComponent>
      {buttonClick.isClicked ? <h3>{buttonClick.data}</h3> : <></>}
    </>
  );
}

export default App;
