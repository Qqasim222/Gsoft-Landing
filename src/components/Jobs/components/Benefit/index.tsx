import React from "react";
import { Grid, Typography } from "@mui/material";
import { styles } from "./styles";
import BenefitComponent from "../BenefitComponent";
import { CustomContainer } from "@/components/layout";

const Benefits = (props: any) => {
  const { benefitsList } = props;

  return (
    <Grid container item md={12} sm={12} xs={12} sx={styles.container}>
      <CustomContainer>
        <Grid container item lg={12} md={12} sm={12} xs={12} sx={styles.text}>
          <Typography variant="h5" variantMapping={{ h5: "h1" }}>
            Benefits
          </Typography>
        </Grid>

        <Grid container item lg={12} md={12} sm={12} xs={12} sx={styles.text}>
          <Typography variantMapping={{ h2: "h2" }} variant="h2">
            How we care about you
          </Typography>
        </Grid>

        <Grid container item lg={12} md={12} sm={12} xs={12} sx={styles.description}>
          <Typography variant="body1">
            Our employees are our most important assets and our key value proposition is employee development and career
            growth. Our first priority is hiring from within and growing our employees through coaching, mentoring, and
            training, both internal and external. We also have a range of exciting initiatives including employee
            engagement, appreciation, and fun activities all year round."
          </Typography>
        </Grid>
        <Grid container item lg={12} md={12} sx={styles.benefits}>
          {benefitsList?.map((item: any, index: any) => {
            return (
              <BenefitComponent
                key={`${item?.id}-${index}`}
                image={item?.attributes?.logo?.data[0]?.attributes?.url}
                text={item?.attributes?.title}
              />
            );
          })}
        </Grid>
      </CustomContainer>
    </Grid>
  );
};

export default Benefits;
