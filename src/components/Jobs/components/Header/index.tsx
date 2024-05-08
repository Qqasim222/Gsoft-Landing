import React from "react";

import { Grid, Typography } from "@mui/material";

import { styles } from "./styles";

import CommonButton from "@/components/Button/CommonButton";

const Building = () => {
  return (
    <Grid container sx={styles.container}>
      <Grid container item md={10} lg={8} sm={12} xs={12} sx={styles.block}>
        <Typography variant="h1">Building What's Next!</Typography>
        <Grid
          container
          item
          md={10}
          sm={10}
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "3%",
          }}
        >
          <Grid container item md={5} sx={styles.buttonGrid}>
            <CommonButton
              heading={{
                variant: "h6",
                variantMapping: { h6: "p" },
              }}
              name="16 Current Openings"
              variant="outlined"
              sx={styles.button}
            />
          </Grid>
          <Grid container item md={3} sx={styles.buttonGrid}>
            <CommonButton
              heading={{
                variant: "h6",
                variantMapping: { h6: "p" },
              }}
              name="Check Status"
              variant="outlined"
              sx={styles.button}
            />
          </Grid>
          <Grid container item md={3} sx={styles.buttonGrid}>
            <CommonButton
              heading={{
                variant: "h6",
                variantMapping: { h6: "p" },
              }}
              name="My Referrals"
              variant="outlined"
              sx={styles.button}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Building;
