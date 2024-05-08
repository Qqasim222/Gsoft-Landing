export const styles = {
  container: {
    flexDirection: "column",
    alignItems: "center",
    borderRadius: "16px",
    color: "#001A1F",
    "&:hover": {
      background: "#001A1F",
      cursor: "pointer",
      transition: "1s",
    },
  },
  img: {
    display: "flex",
    flexDirection: "column",
    paddingTop: "30px",
    paddingBottom: "30px",
    paddingLeft: "20px",
    paddingRight: "20px",
    alignItems: "center",
    "&:hover": {
      filter: "brightness(0) invert(1)",
    },
  },
  text: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  styling: {
    paddingTop: "10px",
    paddingBottom: "10px",
  },
};
