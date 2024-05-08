import React from "react";
import { Box, Grid, Typography, TypographyProps } from "@mui/material";
import { StaticImageData } from "next/image";
import { styles } from "./styles";
import { CustomContainer } from "@/components/layout";
import GSoftImage from "@/components/GSoftImage";

interface Props extends TypographyProps {
  topHeading: string;
  heading: string;
  desc: string;
  image: StaticImageData;
}

const MissionComponent = (props: Props) => {
  const { topHeading, heading, desc, image } = props;

  return (
    <Grid container item lg={12} md={12} sm={12} xs={12} sx={styles.box}>
      <CustomContainer>
        <Box
          sx={{
            height: 100,
            width: 100,
          }}
        >
          <GSoftImage src={image} alt="image" />
        </Box>
        <Typography variant="h5" variantMapping={{ h5: "p" }} sx={styles.topHeading}>
          {topHeading}
        </Typography>
        <Typography variant="h2">{heading}</Typography>
        <Typography variant="body1" sx={styles.text}>
          {desc}{" "}
        </Typography>
      </CustomContainer>
    </Grid>
  );
};

export default MissionComponent;
