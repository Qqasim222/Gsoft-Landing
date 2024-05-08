import React from "react";
import { Grid, TextField, useMediaQuery, useTheme } from "@mui/material";
import Text from "@/components/GsoftText";
import { styles } from "./styles";
import CommonButton from "@/components/Button/CommonButton";
import { CustomContainer } from "@/components/layout";

const Updates = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid container sx={styles.container}>
      <CustomContainer>
        <Grid container item lg={12} md={12} sm={12} xs={12} sx={styles.box}>
          <Grid
            item
            xs={12}
            sm={12}
            md={2}
            lg={3}
            style={{
              justifyContent: isMatch ? "center" : "space-between",
              textAlign: "center",
            }}
          >
            <Text variant="h4" variantMapping={{ h4: "h2" }} name="Get Updates" />
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={6.5}
            lg={6}
            style={{
              justifyContent: isMatch ? "center" : "space-between",
              textAlign: "center",
            }}
          >
            <Text variant="body2" name="Sign up for the latest news on how we are shaping a new future." />
          </Grid>
          <Grid item xs={12} sm={12} md={3.5} lg={3} sx={styles.grid}>
            <TextField
              sx={styles.textField}
              InputLabelProps={{
                style: { color: theme.palette.secondary.main },
              }}
              size="small"
              placeholder="Enter your email"
              variant="outlined"
            />
            <CommonButton
              variant="contained"
              name="Subcribe"
              heading={{
                variant: "h6",
                variantMapping: { h6: "p" },
              }}
              sx={styles.button}
            />
          </Grid>
        </Grid>
      </CustomContainer>
    </Grid>
  );
};

export default Updates;
