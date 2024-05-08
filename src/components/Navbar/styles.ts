export const styles = {
  headergrid: {
    background: "primary.dark",
  },
  toolbar: {
    display: "flex",
    flex: 1,
    justifyContent: "space-between",
    position: "absolute",
    width: "-webkit-fill-available",
    top: "4px",
  },
  appBarLogo: {
    height: "20px",
    width: "auto",
  },
  headerTabs: {
    color: "secondary.light",
    "& .MuiTab-root.Mui-selected": {
      color: "secondary.contrastText",
    },
  },
  // headerLabel: {
  //   color: "secondary.light",
  //   fontSize: "16px",
  //   textTransform: "none",
  //   opacity:1
  // },
  headerButton: {
    textTransform: "none",
    color: "white",
  },
  RespoheaderButton: {
    textTransform: "none",
    width: "94%",
    margin: "10px",
  },
  list: {
    alignItems: "center",
    justifyContent: "center",
  },
  drawer: {
    color: "secondary.main",
    top: "56px",
    height: "auto",
    width: "100%",
  },
  drawerText: {
    color: "secondary.light",
    width: "100%",
    height: "45px",
    top: "102px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "normal",
    display: "flex",
    alignItems: "center",
    "&:hover": {
      color: "secondary.contrastText",
    },
  },
  drawerList: {
    borderTop: "1px solid #16B1E1",
  },
  drawerIcon: {
    color: "secondary.light",
    marginLeft: "auto",
  },

  activeTab: {
    color: "red !important",
  },

  inactiveTab: {
    color: "white !important",
  },
};
