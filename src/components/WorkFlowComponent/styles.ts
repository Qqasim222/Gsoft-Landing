export const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyItems: "center",
    paddingLeft: "20px",
    paddingRight: "20px",
    minHeight: "500px",
    paddingTop: "235px",
    paddingBottom: "100px",
    "&:hover": {
      backgroundColor: "success.main",
      paddingTop: "70px",
      cursor: "pointer",
      zIndex: 30,
      transition: "1s",
    },
  },
  lowerText: {
    marginBottom: "10px",
  },
  desc: {
    textAlign: "center",
  },
};
