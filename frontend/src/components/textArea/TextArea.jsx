import React from "react";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
const TextAreaStyle = styled("textarea")(({ theme }) => ({
  width: "100%",
  margin: "auto",
  minHeight: "270px",
  background: "#fff",
  border: "1px solid gray",
  borderRadius: "20px",
  resize: "none",
  padding: "40px",
  fontWeight: "bold",
  fontSize: "18px",
  wordSpacing: 2,
  color: "gray",
}));

function TextArea({ value, onChange, ...rest }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <TextAreaStyle value={value} onChange={onChange} {...rest} />
    </Box>
  );
}

export default TextArea;
