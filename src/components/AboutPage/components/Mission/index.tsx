import React from "react";
import { Grid } from "@mui/material";
import { styles } from "./styles";
import MissionComponent from "../MissionComponent";
import mission from "@assest/images/mission.png";
import vision from "@assest/images/vision.png";
import { CustomContainer } from "@/components/layout";

const Mission = (props: any) => {
  const { aboutUs } = props;
  return (
    <Grid container item lg={12} md={12} sm={12} xs={12} sx={styles.container}>
      <CustomContainer>
        <Grid
          container
          item
          lg={12}
          md={12}
          sm={12}
          xs={12}
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <Grid item lg={6.5} md={6.5} sm={12} xs={12}>
            <MissionComponent
              image={mission}
              topHeading="Work with the Tech Leader."
              heading="Our Mission"
              desc={aboutUs?.aboutUs?.attributes?.ourMission}
            />
          </Grid>
          <Grid item lg={5} md={5} sm={12} xs={12}>
            <MissionComponent
              image={vision}
              topHeading="What We Aspire To Be"
              heading="Our Vision"
              desc={aboutUs?.aboutUs?.attributes?.ourVision}
            />
          </Grid>
        </Grid>
      </CustomContainer>
    </Grid>
  );
};

export default Mission;
