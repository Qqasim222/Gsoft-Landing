export const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "70px",
    paddingBottom: "70px",
    paddingLeft: "20px",
    paddingRight: "20px",
    backgroundColor: "white",
  },
  accordion: {
    backgroundColor: "transparent",
  },
  box: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  block: {
    marginTop: "7px",
  },
  button: {
    backgroundColor: "secondary.contrastText",
    color: "secondary.main",
    width: "227px",
    textTransform: "none",
    height: "44px",
    marginTop: "20px",
    marginBottom: "20px",
    "&:hover": {
      backgroundColor: "secondary.contrastText",
    },
  },
  ques: {
    display: "flex",
    cursor: "pointer",
  },
  topGrid: {
    justifyContent: "center",
    alignItems: "center",
  },
  innerGrid: {
    marginRight: "20px",
  },
  txtGrid: {
    marginLeft: "4%",
  },
  txt: {
    color: "secondary.contrastText",
  },
  text: {
    paddingRight: "10px",
    color: "secondary.contrastText",
  },
};
