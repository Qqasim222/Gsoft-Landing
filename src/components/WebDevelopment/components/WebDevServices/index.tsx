import React from "react";
import { Grid, TypographyProps } from "@mui/material";
import { StaticImageData } from "next/image";
import { styles } from "./styles";
import Text from "@/components/GsoftText";

interface Props extends TypographyProps {
  topHeading: string;
  heading: string;
  desc: string;
  image: StaticImageData;
}

const WebDevServices = (props: Props) => {
  const { topHeading, heading, desc, image } = props;

  return (
    <Grid
      container
      sx={
        (styles.container,
        {
          backgroundImage: `url(${image?.src})`,
        })
      }
    >
      <Grid item md={10} lg={9} sm={12} xs={12} sx={styles.box}>
        <Text name={topHeading} variant="h5" variantMapping={{ h5: "p" }} />
        <Text variant="h2" name={heading} />
        <Text sx={styles.text} variant="body1" name={desc} />
      </Grid>
    </Grid>
  );
};

export default WebDevServices;
