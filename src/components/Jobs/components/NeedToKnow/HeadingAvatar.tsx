import React from "react";
import { Grid, useMediaQuery, useTheme, Typography, Box } from "@mui/material";
import { styles } from "./styles";
import man from "@assest/images/man.png";
import { CustomContainer } from "@/components/layout";
import GSoftImage from "@/components/GSoftImage";

const NeedToKnow = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box sx={{ paddingTop: "100px" }}>
      <Grid container item lg={12} md={12} sx={styles.container}>
        <CustomContainer>
          <Grid
            container
            item
            lg={12}
            md={12}
            sx={{
              justifyContent: isMatch ? "flex-start" : "flex-start",
              paddingTop: isMatch ? "40px" : 0,
              paddingBottom: isMatch ? "40px" : "102px",
              width: "100%",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Grid item lg={8} md={12} sm={12} xs={12}>
              <Typography variant="h2" style={{ textAlign: "center", paddingTop: "80px" }}>
                Ready to take your career to the next level?
              </Typography>
            </Grid>
            <Grid
              item
              lg={4}
              md={4}
              sm={4}
              xs={12}
              sx={{ display: { xs: "none", sm: "none", md: "none", lg: "flex" } }}
            >
              <Box
                sx={{
                  height: 450,
                  width: 500,
                }}
              >
                <GSoftImage src={man} alt="image" />
              </Box>
            </Grid>
          </Grid>
        </CustomContainer>
      </Grid>
    </Box>
  );
};

export default NeedToKnow;
