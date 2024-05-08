export const styles = {
  container: {
    display: "flex",
    position: "absolute",
    marginTop: "73px",
    minHeight: "300px",
    width: "1230px",
    background: "secondary.light",
    borderRadius: "10px",
  },
  cardSubHeading: {
    display: "flex",
    color: "secondary.main",
    lineHeight: "40px",
    fontSize: "14px",
    fontWeight: "500",
    "&:hover": {
      color: "secondary.contrastText",
      cursor: "pointer",
      transition: "1s",
    },
  },
  mainGrid: {
    display: "flex",
    justifyContent: "center",
    zIndex: "999",
    position: "absolute",
    width: "100%",
    height: "auto",
  },
  endContainer1: {
    height: "auto",
    display: "flex",
    width: "302px",
  },
  endContainer2: {
    background: "#EAFAFF",
    height: "auto",
    display: "flex",
    width: "285px",
    paddingLeft: "45px",
  },
  services: {
    display: "flex",
    width: "260px",
    paddingLeft: "40px",
  },
  services_col2: {
    display: "flex",
    width: "300px",
  },
  services_col3: {
    display: "flex",
    width: "300px",
  },
  cardHeading: {
    color: "secondary.main",
    marginBottom: "10px",
    marginTop: "15px",
  },
  cardHeadingSupport: {
    color: "secondary.contrastText",
    marginBottom: "10px",
  },
};
