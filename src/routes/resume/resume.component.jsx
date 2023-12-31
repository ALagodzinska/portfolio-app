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
    <Box sx={{ pt: { xs: "40px", md: "130px" } }}>
      <Typography
        align="center"
        sx={{ py: 5, typography: { xs: "h4", md: "h2" } }}
      >
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
          startIcon={<FileDownloadIcon />}
          onClick={onDownload}
          sx={{
            display: "flex",
            alignItems: "center",
            textAlign: "center",
            justifyContent: "center",
            mx: "20%",
            height: "4rem",
            backgroundColor: "#1b5e20",
            color: "white",
            transition: "all 1s ease",
            ":hover": { transform: "scale(1.2)" },
          }}
        >
          DOWNLOAD RESUME
        </Button>
      </Box>
    </Box>
  );
};

export default Resume;
