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
    justifyContent: "center",
    marginTop: "40px",
    marginBottom: "40px",
    paddingLeft: "20px",
    paddingRight: "20px",
    "&:hover": {
      borderRight: "1px solid #16B1E1",
      borderLeft: "1px solid #16B1E1",
      backgroundColor: "success.dark",
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
    display: "flex",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    height: "60%",
    flexDirection: "column",
  },
  descriptionServices: {
    display: "flex",
    justifyContent: "center",
    marginTop: "5px",
    alignItems: "baseline",
    textAlign: "center",
  },
  description: {
    color: "secondary.light",
    width: "65%",
    justifyContent: "center",
    margin: "20px",
    alignItems: "center",
    textAlign: "center",
  },
  styling: {
    color: "secondary.light",
    paddingTop: "16px",
  },
  stylings: {
    color: "secondary.light",
    paddingTop: "20px",
  },
};
