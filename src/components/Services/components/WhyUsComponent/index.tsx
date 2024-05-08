import React from "react";
import { Box, Grid, TypographyProps } from "@mui/material";
import { StaticImageData } from "next/image";
import Text from "@/components/GsoftText";
import { styles } from "./styles";
import GSoftImage from "@/components/GSoftImage";

interface Props extends TypographyProps {
  image: StaticImageData;
  heading: string;
  desc: string;
}

const WhyUsComponent = (props: Props) => {
  const { image, heading, desc } = props;

  return (
    <Grid container item md={12} sx={styles.container}>
      <Box
        sx={{
          height: 40,
          width: 40,
        }}
      >
        <GSoftImage src={image} alt="img" style={{ objectFit: "contain" }} />
      </Box>
      <Text name={heading} variant="h5" variantMapping={{ h5: "h2" }} sx={styles.text} />
      <Text name={desc} variant="body2" variantMapping={{ body2: "p" }} />
    </Grid>
  );
};

export default WhyUsComponent;
