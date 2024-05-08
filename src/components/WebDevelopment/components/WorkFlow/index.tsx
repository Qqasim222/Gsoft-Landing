import React from "react";
import { Grid, useMediaQuery, useTheme } from "@mui/material";
import { styles } from "./styles";
import Text from "@/components/GsoftText";
import WorkFlowComponent from "@/components/WebDevelopment/components/WorkFlowComponent";

const WorkFlow = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <Grid container sx={styles.container}>
      <Grid
        item
        md={10}
        lg={10}
        sm={12}
        xs={12}
        sx={styles.box}
        style={{ alignItems: isMatch ? "center" : "flex-start" }}
      >
        <Text name="WORK FLOW" variant="h5" variantMapping={{ h5: "p" }} />
        <Text variant="h2" name="Our Working Process" />

        <Grid container sx={styles.block}>
          <WorkFlowComponent
            num="01"
            dash={isMatch ? "" : "---------------"}
            name="Discover"
            desc="The discovery phase aims to create a shared understanding of your product vision and objectives through detailed research, discussion, and analysis of your idea."
          />
          <WorkFlowComponent
            num="02"
            dash={isMatch ? "" : "--------------"}
            name="Planning & Design"
            desc="We understand how essential it is to invest time and effort in creating a great user experience."
          />
          <WorkFlowComponent
            num="03"
            dash={isMatch ? "" : "--------------"}
            name="Development & Testing"
            desc="We start by Sprint planning; a key part of our Agile working methodology, which allows us to retain focus on critical work & test at each stage of development."
          />
          <WorkFlowComponent
            num="04"
            dash={isMatch ? "" : ""}
            name="Deploy & Support"
            desc="Launching a product is just the start of the journey and from day one your users will be offering their opinions and demanding the next big feature."
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default WorkFlow;
