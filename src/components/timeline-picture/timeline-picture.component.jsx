import { Box } from "@mui/material";

const TimelinePicture = ({ imgSrc }) => {
  console.log(imgSrc);
  return (
    <Box
      sx={{
        width: "120px",
        height: "120px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img
        src={imgSrc}
        alt="RTU"
        width={"100%"}
        style={{
          border: "1px solid black",
          borderRadius: "100px",
        }}
        height={"auto"}
      />
    </Box>
  );
};

export default TimelinePicture;
