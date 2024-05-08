import React, { useEffect } from "react";
import { Grid } from "@mui/material";
import { styles } from "./styles";
import Text from "@/components/GsoftText";
import { DescriptionProps } from "@/types/home";
import { CustomContainer } from "@/components/layout";
import Aos from "aos";
import "aos/dist/aos.css";

const About = ({ title, name, details }: DescriptionProps) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <CustomContainer>
      <Grid data-aos="fade-right" container item md={12} sm={12} xs={12} sx={styles.container}>
        <Grid container item lg={12} md={12} sm={12} xs={12} sx={styles.text}>
          <Text fontSize={{ xs: "26px", sm: "26px", md: "26px", lg: "26px" }} name={title} sx={styles.stylingtitle} />
        </Grid>
        <Grid container item lg={12} md={12} sm={12} xs={12} sx={styles.text}>
          <Text name={name} sx={styles.stylingheading} />
        </Grid>
        <Grid container item lg={12} md={12} sm={12} xs={12} sx={styles.description}>
          <Text sx={styles.color} variant="body1" name={details} />
        </Grid>
      </Grid>
    </CustomContainer>
  );
};

export default About;
