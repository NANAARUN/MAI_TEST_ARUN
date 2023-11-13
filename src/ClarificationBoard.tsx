import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default () => {
  const [value, setValue] = useState("");
  const [isEditorOpen, setIsEditorOpen] = useState<boolean>(false);
  return (
    <Paper
      elevation={2}
      style={{ maxWidth: 1200, margin: "auto", marginTop: 25, padding: 15 }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 15,
        }}
      >
        <Typography variant="h5">Clarification Board</Typography>
        <Button onClick={() => setIsEditorOpen(true)}>Ask a Quesiton</Button>
      </div>
      {isEditorOpen && (
        <ReactQuill theme="snow" value={value} onChange={setValue} />
      )}
    </Paper>
  );
};
