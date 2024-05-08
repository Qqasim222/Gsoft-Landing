export const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: "5%",
    color: "secondary.light",
    backgroundSize: "cover",
    backgroundImage: `url(${jobs?.src})`,
    backgroundColor: "secondary.main",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },
  block: {
    paddingLeft: "20px",
    paddingRight: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
    marginTop: "80px",
    marginBottom: "100px",
  },
  buttonGrid: {
    justifyContent: "center",
    marginTop: "2%",
    marginBottom: "2%",
  },
  button: {
    textTransform: "none",
    paddingLeft: "10%",
    paddingRight: "10%",
    "&:hover": {
      backgroundColor: "secondary.light",
      color: "secondary.main",
    },
  },
};
