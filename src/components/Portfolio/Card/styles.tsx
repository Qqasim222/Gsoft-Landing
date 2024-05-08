export const styles = {
  mainCardContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  arrowF: {
    marginRight: "30px",
    padding: "10px",
    "&:hover": {
      borderRadius: "100%",
      padding: "10px",
    },
  },
  arrowB: {
    padding: "10px",
    marginRight: "10px",
    "&:hover": {
      borderRadius: "100%",
      padding: "10px",
    },
  },
  mainCardItems: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "40px",
  },
  mainSubHeading: {
    color: "black",
    paddingBottom: "5px",
  },
  mainPara: {
    marginTop: "30px",
    lineHeight: "26px",
  },
  mainCardTechnologies: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  technologyHeadings: {
    backgroundColor: "secondary.main",
    color: "secondary.light",
    borderRadius: "7%",
    border: "1px solid",
    marginRight: "10px",
    marginTop: "20px",
    gap: "10px",
    padding: "8px",
  },
  cardIcons: {
    display: "flex",
    flexDirection: "row",
  },
};
