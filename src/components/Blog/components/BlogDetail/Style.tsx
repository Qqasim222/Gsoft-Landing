export const styles = {
  Grid: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    position: "relative",
    top: "30px",
  },
  bannerGrid: {
    flexDirection: "row",
    justifyContent: "center",
    position: "relative",
    top: "30px",
    display: { xs: "flex", sm: "none", md: "none", lg: "none" },
  },
  textField: {
    backgroundColor: "success.main",
  },
  button: {
    backgroundColor: "secondary.contrastText",
    color: "secondary.main",
    textTransform: "none",
    borderRadius: "0px 4px 4px 0px",
  },

  Button: {
    backgroundColor: "secondary.main",
    color: "secondary.light",
  },

  Blog: {
    display: "flex",
    justifyContent: "space-around",
    position: "relative",
    top: "30px",
    paddingTop: "80px",
    paddingBottom: "100px",
  },

  AvatarPart: {},
  BlogGriding: {},
  cardGriding: {
    width: "600px",
  },
  card: {
    width: "600px",
    position: "relative",
  },

  FeatureCard: {
    width: "450px",
    paddingLeft: { xs: "0px", sm: "0px", md: "0px", lg: "135px" },
    display: { xs: "none", lg: "block" },
  },
  Text: {
    fontWeight: "700px",
  },
  cardText: {
    display: { xs: "contents", sm: "flex", md: "flex", lg: "flex" },
    position: "relative",
    top: "40px",
  },
  GridText: {
    position: "relative",
    top: "20px",
    display: { xs: "none", sm: "flex", md: "flex", lg: "flex" },
  },
  cardIMg: {
    width: "180px",
    height: "116px",
    margin: "10px 0px",
  },
};
