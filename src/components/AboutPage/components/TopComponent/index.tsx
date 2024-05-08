import React from "react";
import { Grid, TypographyProps } from "@mui/material";
import { StaticImageData } from "next/image";
import { styles } from "./styles";
import Text from "@/components/GsoftText";
import { CustomContainer } from "@/components/layout";
import Link from "next/link";

interface Props extends TypographyProps {
  heading: string;
  desc: string;
  image: StaticImageData;
}

const AboutComponent = (props: Props) => {
  const { heading, desc, image } = props;

  return (
    <Grid container sx={styles.container} style={{ backgroundImage: `url(${image})` }}>
      <Grid container item lg={10} md={12} sm={12} xs={12} sx={styles.box}>
        <CustomContainer>
          <Grid
            container
            item
            lg={12}
            md={12}
            xs={12}
            sm={12}
            sx={styles.box}
            textAlign={{ xs: "center", sm: "left", md: "left", lg: "left" }}
          >
            <Text variant="h1" name={heading} />
            <Text variant="subtitle1" name={desc} variantMapping={{ subtitle1: "p" }} sx={styles.text} />
            <Grid container item lg={4} md={5} sm={6} xs={12} xl={5} sx={styles.button} alignSelf={{ lg: "left" }}>
              <Link href="/estimate-your-project"  style={{textDecoration:"none"}}>
                <Text
                  variant="h6"
                  variantMapping={{
                    h6: "p",
                  }}
                  style={{ color: "white" }}
                  name="Let's discuss your project"
                />
              </Link>
            </Grid>
          </Grid>
        </CustomContainer>
      </Grid>
    </Grid>
  );
};

export default AboutComponent;
