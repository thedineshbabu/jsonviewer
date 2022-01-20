import React, { useState } from "react";
import ReactJson from "react-json-view";
import { Button } from "@mui/material";
import { Select } from "@mui/material";
import "./JSONViewer.css";

const JSONViewer = ({ jsonObject, handleBack }) => {
  const [theme, setTheme] = useState("monokai");

  return (
    <div className="JSONViewer">
      <div className="buttonContainer">
        <Button
          variant="contained"
          color="primary"
          disabled={theme === "monokai"}
          onClick={() => setTheme("monokai")}
        >
          Monokai
        </Button>
        <Button
          variant="contained"
          color="primary"
          disabled={theme === "tomorrow"}
          onClick={() => setTheme("tomorrow")}
        >
          Tomorrow
        </Button>
        <Button
          variant="contained"
          color="primary"
          disabled={theme === "summerfruit:inverted"}
          onClick={() => setTheme("summerfruit:inverted")}
        >
          Plain
        </Button>
        <Button
          variant="contained"
          color="primary"
          disabled={theme === "ocean"}
          onClick={() => setTheme("ocean")}
        >
          Ocean
        </Button>
      </div>
      <ReactJson src={JSON.parse(jsonObject)} theme={theme} />
      <Button
        variant="contained"
        color="primary"
        style={{ marginTop: "10px" }}
        onClick={handleBack}
      >
        Back
      </Button>
    </div>
  );
};

export default JSONViewer;