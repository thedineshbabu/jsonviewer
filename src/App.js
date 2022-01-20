import React, { useState } from "react";
import reactDom from "react-dom";
import JSONInput from "./components/JSONInput";
import JSONViewer from "./components/JSONViewer";
import { StyledEngineProvider } from "@mui/material/styles";

const App = () => {
  const [jsonObject, setJsonObject] = useState(null);

  const handleJSONInput = (jsonObject) => {
    setJsonObject(jsonObject);
  };

  const handleBack = () => {
    setJsonObject(null);
  };

  return (
    <StyledEngineProvider injectFirst>
      <div className="App">
        {jsonObject && (
          <JSONViewer jsonObject={jsonObject} handleBack={handleBack} />
        )}
        {!jsonObject && <JSONInput handleJSONInput={handleJSONInput} />}
      </div>
    </StyledEngineProvider>
  );
};

reactDom.render(<App />, document.getElementById("root"));
