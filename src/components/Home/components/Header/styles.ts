export const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "secondary.light",
    paddingTop: "92px",
    height: { md: 800, xs: 850, sm: 850 },
  },
  headertext: {
    lineHeight: { xs: "50px", sm: "50px", md: "58px", lg: "58px" },

    ["@media (max-width:425px)"]: {
      lineHeight: "50px",
      fontSize: "40px",
    },
  },
  desc: {
    marginTop: "30px",
    marginBottom: "30px",
    lineHeight: { xs: "26px", sm: "26px", md: "26px", lg: "26px" },
  },
  box: {
    paddingTop: "80px",
    paddingBottom: "100px",
    paddingLeft: "20px",
    paddingRight: "20px",
    display: "flex",
    justifyContent: "center",
  },
  typo: {
    display: "flex",
  },
  button: {
    border: "1px solid #16B1E1",
    display: "flex",
    justifyContent: "center",
    borderRadius: "4px",
    textTransform: "none",
    padding: "10px",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#16B1E1",
      border: "1px solid",
    },
  },

  gsoft: {
    color: "secondary.contrastText",
    marginLeft: "10px",
  },
  img: {
    marginLeft: "5px",
    marginTop: "51px",
  },
};
