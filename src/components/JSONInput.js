import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

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
    <div>
      <TextField
        id="outlined-multiline-flexible"
        label="JSON Input"
        multiline
        maxRows={30}
        fullWidth
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
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
  );
};

export default JSONInput;
