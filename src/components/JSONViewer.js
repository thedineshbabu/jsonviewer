import React, { useState } from "react";
import ReactJson from "react-json-view";
import { Button } from "@mui/material";
import ButtonGroup from "@mui/material/ButtonGroup";
import "./JSONViewer.css";

const JSONViewer = ({ jsonObject, handleBack }) => {
  const [theme, setTheme] = useState("monokai");

  return (
    <div className="JSONViewer">
      {/* <div className="commandCenter">
        <div className="commandCenterOne_1">1</div>
        <div className="commandCenterOne_2">2</div>
        <div className="commandCenterOne_3">3</div>
        <div className="commandCenterTwo_1">4</div>
        <div className="commandCenterTwo_2">5</div>
        <div className="commandCenterTwo_3">6</div>
        <div className="commandCenterThree_1">7</div>
        <div className="commandCenterThree_2">8</div>
        <div className="commandCenterThree_3">9</div>
      </div> */}
      <div className="jsonContainer">
        <ReactJson
          src={JSON.parse(jsonObject)}
          theme={theme}
          style={{
            width: "75%",
            padding: "0% 5% 0% 0%",
          }}
        />
        <Button
          variant="contained"
          color="primary"
          style={{ marginTop: "10px" }}
          onClick={handleBack}
        >
          Back
        </Button>
      </div>
    </div>
  );
};

export default JSONViewer;
