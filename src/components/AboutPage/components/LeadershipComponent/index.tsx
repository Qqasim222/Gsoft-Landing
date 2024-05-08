import React from "react";
import { Box, Grid, Typography, TypographyProps } from "@mui/material";
import  { StaticImageData } from "next/image";
import { styles } from "./styles";
import GSoftImage from "@/components/GSoftImage";

interface Props extends TypographyProps {
  image: StaticImageData;
  name: string;
  title: string;
  desc: string;
}

const LeadershipComponent = (props: Props) => {
  const { image, name, title, desc } = props;

  return (
    <Grid container item md={3.85} sm={5.5} xs={12} sx={styles.container}>
      <Grid sx={styles.box}>
        <Box
          style={{
            height: "100px",
            width: "100px",
          }}
        >
          <GSoftImage src={image} alt="image" />
        </Box>
        <Grid sx={styles.text}>
          <Typography variant="h4" variantMapping={{ h4: "p" }}>
            {name}{" "}
          </Typography>
          <Typography variant="h5" variantMapping={{ h5: "p" }} sx={styles.title}>
            {title}{" "}
          </Typography>
        </Grid>
      </Grid>
      <Typography variantMapping={{ h6: "p" }} sx={styles.desc} variant="h6">
        {" "}
        {desc}{" "}
      </Typography>
    </Grid>
  );
};

export default LeadershipComponent;
