export const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    paddingTop: "30px",
    paddingBottom: "30px",
    paddingLeft: "20px",
    paddingRight: "20px",
    backgroundColor: "secondary.main",
    color: "secondary.light",
  },
  box: {
    display: "flex",
    justifyContent: "space-between",
    borderBottom: "1px solid",
    paddingBottom: "5%",
    borderBottomColor: "secondary.contrastText",
  },
  block: {
    marginBottom: "10px",
    marginTop: "15px",
  },
  tecBlock: {
    display: "flex",
    justifyContent: "space-between",
  },
  tecBlock2: {
    display: "flex",
  },
  text: {
    color: "white",
    marginTop: "15px",
    "&:hover": {
      color: "secondary.contrastText",
      cursor: "pointer",
    },
  },
  technologies: {
    border: "1px solid",
    borderColor: "secondary.light",
    color: "white",
    marginRight: "10px",
    marginTop: "20px",
    gap: "5px",
    paddingLeft: "12px",
    paddingRight: "12px",
    paddingBottom: "1px",
    paddingTop: "1px",
    "&:hover": {
      color: "secondary.contrastText",
      borderColor: "secondary.contrastText",
    },
  },
  textField: {
    backgroundColor: "secondary.light",
    borderRadius: 4,
    width: "386px",
  },
  button: {
    backgroundColor: "secondary.main",
    color: "secondary.contrastText",
    font: "typography.h6",
    width: "133px",
    height: "44px",
  },
  topGrid: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "20px",
    alignItems: "center",
  },
  grid: {
    display: "flex",
  },
  imageSize: {
    width: "48px",
    height: "48px",
  },
};
