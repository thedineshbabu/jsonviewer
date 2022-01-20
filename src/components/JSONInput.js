import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import "./JSONInput.css";

const JSONInput = ({ handleJSONInput }) => {
  const [value, setValue] = useState("");

  const isValidJSON = () => {
    try {
      JSON.parse(value);
      return true;
    } catch (e) {
      return false;
    }
  };

  return (
    <div className="jsonInputContainer">
      <TextField
        id="outlined-multiline-flexible"
        label="JSON Input"
        multiline
        maxRows={30}
        fullWidth
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <div className="btnContainer">
        <Button
          variant="contained"
          color="primary"
          style={{
            marginTop: "10px",
          }}
          disabled={!isValidJSON()}
          onClick={() => handleJSONInput(value)}
        >
          Format
        </Button>
      </div>
    </div>
  );
};

export default JSONInput;
