export const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "5%",
    paddingBottom: "6%",
    background: "primary.light",
  },
  box: {
    justifyContent: "space-around",
    display: "flex",
    backgroundColor: "",
  },
  txtGrid: {
    display: "flex",
    justifyContent: "center",
    marginTop: "5%",
  },
  tag: {
    border: "1px solid",
    paddingTop: "1%",
    paddingBottom: "1%",
    paddingLeft: "4%",
    marginLeft: "1%",
    marginRight: "1%",
    marginTop: "2%",
    marginBottom: "2%",
    paddingRight: "4%",
    borderRadius: "8%",
    backgroundColor: "secondary.main",
    color: "secondary.light",
  },
  tabsGrid: {
    display: "flex",
    justifyContent: "center",
  },
  tabs: {
    "& .MuiTab-root.Mui-selected": {
      backgroundColor: "secondary.main",
      color: "secondary.light",
      borderRadius: "100px",
    },
  },
  tab: {
    color: "success.light",
    textTransform: "none",
  },
};
