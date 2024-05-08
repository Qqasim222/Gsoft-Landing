import React from "react";
import { Grid, useMediaQuery, useTheme, TypographyProps } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import { styles } from "./styles";
import Text from "@/components/GsoftText";

interface Props extends TypographyProps {
  topHeading: string;
  heading: string;
  desc: string;
  image: StaticImageData;
}

const Offers = (props: Props) => {
  const { topHeading, heading, desc, image } = props;
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid container sx={styles.container}>
      <Grid container item md={12} lg={11} sx={styles.block}>
        <Grid item md={6} lg={6} sx={styles.box}>
          <Text name={topHeading} variantMapping={{ h5: "p" }} variant="h5" />
          <Text variant="h2" name={heading} />
          <Text sx={styles.text} variant="body1" name={desc} />
        </Grid>
        {isMatch ? (
          ""
        ) : (
          <Grid container item md={5}>
            <Image src={image} alt="image" layout="fixed" />
          </Grid>
        )}
      </Grid>
    </Grid>
  );
};

export default Offers;
