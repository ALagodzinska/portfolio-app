import { Box, Button, Typography } from "@mui/material";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import ResumeFile from "../../resume-file/Lagodzinska_Resume.pdf";

const Resume = () => {
  const onDownload = () => {
    const link = document.createElement("a");
    link.download = "resume.pdf";
    link.href = { ResumeFile };
    link.click();
  };

  return (
    <Box sx={{ pt: "130px", pb: "120px" }}>
      <Typography variant="h2" align="center" sx={{ py: 5 }}>
        RESUME
      </Typography>
      <Box
        direction="row"
        justifyContent="center"
        sx={{ pb: 2, maxWidth: "750px", mx: "auto" }}
      >
        <Button
          size="large"
          component="label"
          variant="contained"
          startIcon={<FileDownloadIcon />}
          onClick={onDownload}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          DOWNLOAD RESUME
        </Button>
      </Box>
    </Box>
  );
};

export default Resume;
