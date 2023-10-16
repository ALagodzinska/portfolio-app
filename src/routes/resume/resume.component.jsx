import { Box, Button, Typography } from "@mui/material";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import ResumeFile from "../../resume-file/Lagodzinska_Resume.pdf";

const Resume = () => {
  const onDownload = () => {
    const link = document.createElement("a");
    link.href = ResumeFile;
    link.download = "resume.pdf";
    link.click();
  };

  return (
    <Box sx={{ pt: "130px" }}>
      <Typography variant="h2" align="center" sx={{ py: 5 }}>
        RESUME
      </Typography>
      <Box
        direction="row"
        justifyContent={"center"}
        sx={{ pb: 2, maxWidth: "750px", mx: "auto" }}
      >
        <Button
          size="large"
          component="label"
          variant="contained"
          startIcon={<FileDownloadIcon color={"secondary"} />}
          onClick={onDownload}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mx: "20%",
            height: "4rem",
            color: "secondary",
          }}
        >
          DOWNLOAD RESUME
        </Button>
      </Box>
    </Box>
  );
};

export default Resume;
