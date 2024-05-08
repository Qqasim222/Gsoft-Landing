export const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "50px",
    paddingBottom: "50px",
  },
  box: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    alignItems: "center",
  },
  text: {
    padding: "5px",
    display: "flex",
    justifyContent: "center",
  },
  tabs: {
    marginTop: "25px",
    marginBottom: "30px",
    display: "inline-block",
    whiteSpace: "nowrap",
    overflowY: "hidden",
    scrollbarWidth: "thin",
    WebkitOverflowScrolling: "touch",
    "&::-webkit-scrollbar": {
      height: "0",
    },
  },

  tab: {
    color: "black",
    textTransform: "none",
    marginLeft: "25px",
  },
  tec: {
    display: "flex",
    alignItems: "flex-end",
  },
};
