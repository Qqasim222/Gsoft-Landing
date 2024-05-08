import React from "react";
import { Grid, TypographyProps } from "@mui/material";
import { StaticImageData } from "next/image";
import { styles } from "./styles";
import Text from "@/components/GsoftText";
import ComponentOne from "@/components/WebDevelopment/components/ServiceComponentOne";
import ComponentTwo from "@/components/WebDevelopment/components/ServicesComponentTwo";

interface Props extends TypographyProps {
  topHeading: string;
  heading: string;
  c1Heading: string;
  c1Desc: string;
  c1Point1: string;
  c1Point2: string;
  c1Point3: string;
  c1Point4: string;
  c1Image: StaticImageData;
  c2Heading: string;
  c2Desc: string;
  c2Point1: string;
  c2Point2: string;
  c2Point3: string;
  c2Point4: string;
  c2Image: StaticImageData;
  c3Heading: string;
  c3Desc: string;
  c3Point1: string;
  c3Point2: string;
  c3Point3: string;
  c3Point4: string;
  c3Image: StaticImageData;
}

const Services = (props: Props) => {
  const {
    topHeading,
    heading,
    c1Heading,
    c1Desc,
    c1Point1,
    c1Point2,
    c1Point3,
    c1Point4,
    c1Image,
    c2Heading,
    c2Desc,
    c2Point1,
    c2Point2,
    c2Point3,
    c2Point4,
    c2Image,
    c3Heading,
    c3Desc,
    c3Point1,
    c3Point2,
    c3Point3,
    c3Point4,
    c3Image,
  } = props;

  return (
    <Grid container sx={styles.container}>
      <Grid container item md={12} lg={11} sm={12} sx={styles.block}>
        <Grid container sx={styles.txt}>
          <Text name={topHeading} variantMapping={{ h5: "p" }} variant="h5" />
          <Text variant="h2" name={heading} />
        </Grid>

        <Grid container sx={styles.grid}>
          <ComponentOne
            heading={c1Heading}
            desc={c1Desc}
            point1={c1Point1}
            point2={c1Point2}
            point3={c1Point3}
            point4={c1Point4}
            image={c1Image}
          />
          <ComponentTwo
            heading={c2Heading}
            desc={c2Desc}
            point1={c2Point1}
            point2={c2Point2}
            point3={c2Point3}
            point4={c2Point4}
            image={c2Image}
          />
          <ComponentOne
            heading={c3Heading}
            desc={c3Desc}
            point1={c3Point1}
            point2={c3Point2}
            point3={c3Point3}
            point4={c3Point4}
            image={c3Image}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Services;
