export const styles = {
  Grid: {
    display: { xs: "flex", sm: "flex", md: "flex", lg: "none" },
    flexDirection: "row",
    justifyContent: "center",
    position: "relative",
    top: "30px",
  },
  textField: {
    backgroundColor: "success.main",
    color: "red",
    width: "100%",
  },
  button: {
    backgroundColor: "secondary.contrastText",
    color: "secondary.main",
    textTransform: "none",
    borderRadius: "0px 4px 4px 0px",
    "&:hover": {
      backgroundColor: "secondary.contrastText",
    },
  },

  Button: {
    backgroundColor: "secondary.main",
    color: "secondary.light",
  },
  Blog: {
    display: "flex",
    justifyContent: "center",
    paddingTop: "80px",
    paddingBottom: "20px",
  },
  cardGriding: {
    width: "600px",
  },
  card: {
    position: "relative",
  },
  Articals: {
    display: { xs: "none", sm: "none", md: "none", lg: "block" },
  },
  FeatureCard: {
    width: "450px",
    top: "0",
    display: { xs: "none", sm: "none", md: "none", lg: "block" },
  },
  Text: {
    fontWeight: "700px",
    display: "flex",
    justifyContent: "center",
  },
  cardText: {
    display: { xs: "contents", sm: "flex", md: "flex", lg: "flex" },
    flexDirection: "column",
  },
  GridText: {
    marginTop: "10px",
    display: { xs: "none", sm: "none", md: "flex", lg: "flex" },
    justifyContent: "center",
  },
  cardIMg: {
    width: "100%",
    height: "200px",
    margin: "10px 0px",
  },
};
