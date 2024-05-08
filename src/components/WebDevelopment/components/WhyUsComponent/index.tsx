import React from "react";
import { Grid, TypographyProps } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import Text from "@/components/GsoftText";
import { styles } from "./styles";

interface Props extends TypographyProps {
  image: StaticImageData;
  heading: string;
  desc: string;
}

const WhyUsComponent = (props: Props) => {
  const { image, heading, desc } = props;

  return (
    <Grid container item md={12} sx={styles.container}>
      <Image src={image} alt="img" layout="fixed" />
      <Text name={heading} variant="h5" variantMapping={{ h5: "h2" }} sx={styles.text} />
      <Text name={desc} variant="body2" variantMapping={{ body2: "p" }} />
    </Grid>
  );
};

export default WhyUsComponent;
