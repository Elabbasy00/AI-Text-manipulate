import { Box, Grid } from "@mui/material";
import React, { useCallback, useState } from "react";
import PageHeader from "../components/page-headers/PageHeader";
import DropZone from "../components/dropzone/DropZone";
import TextResultArea from "../components/reslutArea/TextResultArea";
import { useSummarizeTextMutation } from "../redux/convert/AllApi";
import TextArea from "../components/textArea/TextArea";

function TextSummarization() {
  const accept = {
    "text/*": [],
  };
  const [summarizeText, { data, isLoading }] = useSummarizeTextMutation();
  const [inlineText, setInlineText] = useState("");
  const handelSubmit = useCallback(
    (files) => {
      if (files?.[0]) {
        const formData = new FormData();
        formData.append("file", files?.[0]);

        summarizeText(formData)
          .unwrap()
          .then((e) => console.log(e))
          .catch((e) => console.log(e));
      } else if (inlineText) {
        const formData = new FormData();
        formData.append("text", inlineText);
        summarizeText(formData)
          .unwrap()
          .then((e) => console.log(e))
          .catch((e) => console.log(e));
      }
    },
    [summarizeText, inlineText]
  );

  return (
    <Box sx={{ padding: "20px 10px" }}>
      <PageHeader
        title="Text Summarization"
        subTitle="The Summarization Tool summarizes text in two ways: by pasting the text or by uploading an image. The resulting summary is concise and easy to read, making it perfect for quickly extracting important information."
      />
      <Grid container spacing={2}>
        <Grid item md={6} sx={12}>
          <DropZone
            accept={accept}
            btnText="Summarize"
            handelSubmit={handelSubmit}
          />
        </Grid>
        <Grid item md={6} sx={12}>
          <TextArea
            placeholder="Past Text To Summmarized..."
            value={inlineText}
            onChange={(e) => setInlineText(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}></Grid>
      </Grid>
      <TextResultArea
        data={data?.output}
        loading={isLoading}
        pageName="Summarized Text"
      />
    </Box>
  );
}

export default TextSummarization;
