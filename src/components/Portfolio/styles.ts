export const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "70px",
    paddingBottom: "70px",
    paddingLeft: "20px",
    paddingRight: "20px",
  },
  box: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    alignItems: "center",
  },
  text: {
    display: "flex",
    justifyContent: "center",
  },
  tabs: {
    display: "flex",
    marginTop: "25px",
    marginBottom: "40px",
    "& .MuiTab-root.Mui-selected": {
      color: "secondary.contrastText",
    },
  },
  tab: {
    textTransform: "none",
  },
  tec: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
};
