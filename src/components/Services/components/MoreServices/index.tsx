import React from "react";
import { Grid, TypographyProps } from "@mui/material";

import { styles } from "./styles";
import Text from "@/components/GsoftText";
import ComponentOne from "@/components/Services/components/ServiceComponentOne";
import { CustomContainer } from "@/components/layout";

interface Props extends TypographyProps {
  service?: any;
  topHeading?: string;
  heading?: string;
  desc?: string;
  image?: any;
  points?: string;
}

const Services = (props: Props) => {
  const { service, topHeading, heading } = props;

  return (
    <Grid container sx={styles.container}>
      <CustomContainer>
        <Grid container item md={12} lg={12} sm={12} sx={styles.block}>
          <Grid container sx={styles.txt}>
            <Text name={topHeading} variantMapping={{ h5: "p" }} variant="h5" />
            <Text variant="h2" name={heading} />
          </Grid>

          <Grid container sx={styles.grid}>
            {service?.service?.attributes?.serviceType?.map((item: any, index: any) => {
              return (
                <ComponentOne
                  key={`${item?.id}-${index}`}
                  heading={item?.title}
                  desc={item?.description}
                  image={item?.picture?.data?.attributes?.url}
                  points={item}
                  direction={index % 2 == 0 ? "row" : "row-reverse"}
                />
              );
            })}
          </Grid>
        </Grid>
      </CustomContainer>
    </Grid>
  );
};

export default Services;
