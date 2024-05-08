import React from "react";
import { Grid, Typography } from "@mui/material";

import { styles } from "./styles";
import LeadershipComponent from "../LeadershipComponent";

import { CustomContainer } from "@/components/layout";

const Leadership = (props: any) => {
  const { meetOurTeam } = props;

  return (
    <Grid container sx={styles.container}>
      <CustomContainer>
        <Grid container item lg={12} md={12} sm={12} xs={12} sx={styles.box}>
          <Typography variant="h2">Meet Our Clients</Typography>

          <Grid container sx={styles.grid}>
            {meetOurTeam?.meetOurTeam?.map((item: any, index: any) => {
              return (
                <LeadershipComponent
                  key={`${item?.id}-${index}`}
                  image={item?.attributes?.profilePicture?.data?.attributes?.url}
                  name={item?.attributes?.username}
                  title={item?.attributes?.designation}
                  desc={item?.attributes?.description?.slice(0, 200)}
                />
              );
            })}
          </Grid>
        </Grid>
      </CustomContainer>
    </Grid>
  );
};

export default Leadership;
