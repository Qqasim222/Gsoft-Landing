import Services from "@assest/images/Services/Services.png";

export const styles = {
  toolbar: {
    margin: "0px",

    backgroundImage: `url(${Services?.src})`,
    backgroundSize: "fit",
    backgroundPosition: "cover",
    opacity: "1",
    width: "100%",
    backgroundRepeat: "no-repeat",
    backgroundColor: "secondary.main",

    height: "600px",
  },

  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    paddingTop: "50px",
    paddingBottom: "50px",
    paddingLeft: "20px",
    paddingRight: "20px",
    "&:hover": {
      borderRight: "1px solid blue",
      backgroundColor: "success.dark",
      // Backgroud to set for this givin error not woking
    },
  },
  containerServices: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    paddingTop: "10px",
    paddingBottom: "5px",
    paddingLeft: "20px",
    paddingRight: "20px",
    backgroundColor: "secondary.main",
  },
  Headings: {
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",

    height: "100%",
  },
  descriptionServices: {
    display: "flex",
    //justifyContent: "space-between",
    marginTop: "5px",
    textAlign: "center",
  },
  description: {
    color: "secondary.light",
    margin: "20px",
    lineHeight: { xs: "38px", sm: "38px", md: "40px", lg: "46px" },
  },
  img: {
    display: "flex",
    flexDirection: "column",
    marginTop: "40px",
    paddingRight: "20px",
  },
  styling: {
    color: "secondary.light",
  },
};
