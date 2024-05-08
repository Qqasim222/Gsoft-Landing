import React from "react";
import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { styles } from "./styles";
import Text from "@/components/GsoftText";
import { CustomContainer } from "@/components/layout";
import Link from "next/link";

const AllRights = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid container sx={styles.container}>
      <CustomContainer>
        <Grid container item lg={12} md={12} sm={12} xs={12} sx={styles.box}>
          <Grid container item md={8} lg={7} sx={styles.box}>
            <Grid sx={styles.block}>
              <Text name="•" variant="h6" variantMapping={{ h6: "p" }} sx={styles.text} />
              <Text name="Privacy policy" variant="caption" />
            </Grid>

            <Grid sx={styles.block}>
              <Text name="•" variant="h6" variantMapping={{ h6: "p" }} sx={styles.text} />
              <Text name="Terms & conditions" variant="caption" />
            </Grid>

            <Text name="©All rights reserved 2023 GSC" variant="caption" />
          </Grid>
          {!isMatch ? (
            <Link href="mailto:info@gsoftconsulting.com" style={{textDecoration:"none"}}>
              <Typography variant="caption" sx={{ color: "black" }}>
                info@gsoftconsulting.com
              </Typography>
            </Link>
          ) : (
            ""
          )}
        </Grid>
      </CustomContainer>
    </Grid>
  );
};

export default AllRights;
