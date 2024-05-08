import React from "react";
import { Grid, TypographyProps } from "@mui/material";
import { StaticImageData } from "next/image";
import { styles } from "./styles";
import Text from "@/components/GsoftText";

interface Props extends TypographyProps {
  heading: string;
  desc?: string;
  image?: StaticImageData;
  component: React.ReactNode;
}

const WebDev = (props: Props) => {
  const { heading, desc = "", image } = props;

  return (
    <Grid container sx={(styles.container, { backgroundImage: `url(${image?.src})` })}>
      <Grid container item md={12} lg={12} sm={12} xs={12} sx={styles.block}>
        <Text sx={{ paddingTop: "60px" }} name={heading} variant="h1" />
        <Text variant="subtitle1" variantMapping={{ subtitle1: "p" }} name={desc} />
        {props.component}
      </Grid>
    </Grid>
  );
};

export default WebDev;
