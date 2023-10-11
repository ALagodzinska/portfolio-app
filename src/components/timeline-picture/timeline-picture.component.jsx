import { TimelineConnector } from "@mui/lab";
import { Box } from "@mui/material";

const TimelinePicture = ({ imgSrc, alt, direction = "left" }) => {
  console.log(imgSrc);
  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <img
        src={imgSrc}
        alt={alt}
        width={"120px"}
        style={{
          border: "1px solid black",
          borderRadius: "100px",
        }}
        height={"auto"}
      />
      <TimelineConnector
        sx={{
          position: "absolute",
          width: "30%",
          height: "2px",
          zIndex: "-1",
          [direction === "left" ? "left" : "right"]: "72%",
        }}
      />
    </Box>
  );
};

export default TimelinePicture;
