import React from "react";
import { styled } from "@mui/material/styles";
import {
  Box,
  CircularProgress,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import FileCopyIcon from "@mui/icons-material/FileCopy";

const ResultTextWrapper = styled(Box)(({ theme }) => ({
  background: "#f5f6f9",
  border: "1px dashed",
  borderColor: "rgba(194,205,218,1)",
  margin: "30px 0",
  minHeight: "30vh",
  display: "flex",
  flexDirection: "column",
}));

const ResultText = styled(Typography)(({ theme }) => ({
  wordSpacing: "2px",
  fontWeight: "bold",
  lineBreak: "auto",
  lineHeight: 1.5,
  color: "#000",
  width: "100%",
  height: "100%",
  background: "#fff",
  minHeight: "30vh",
  padding: "5px 10px",
  borderRadius: "10px",
  margin: "10px 0",
}));
function TextResultArea({ pageName, data, loading }) {
  return (
    <ResultTextWrapper>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          height: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          borderBottom: "1px dashed",
          borderColor: "rgba(194,205,218,1)",
          padding: "10px 10px",
        }}
      >
        <Typography
          variant="h5"
          fontWeight="bold"
          component="div"
          color="background.paper"
        >
          {pageName}
        </Typography>
        <Tooltip title="Copy">
          <IconButton
            onClick={() => navigator.clipboard.writeText(data)}
            variant="contained"
            color="secondary"
          >
            <FileCopyIcon />
          </IconButton>
        </Tooltip>
      </Box>
      {loading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <Box sx={{ padding: "10px 10px" }}>
          <ResultText variant="body2" color="text.secondary">
            {data ? data : " Result will apear hear"}
          </ResultText>
        </Box>
      )}
    </ResultTextWrapper>
  );
}

export default TextResultArea;
