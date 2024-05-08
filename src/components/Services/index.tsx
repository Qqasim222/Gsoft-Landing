
import React, { useEffect } from "react";
import { Grid } from "@mui/material";
import { styles } from "./styles";
import Text from "@/components/GsoftText";
import Block from "@/components/DevelopmentBlock";
import { OurServicesProps } from "@/types/home";
import { CustomContainer } from "@/components/layout";
import Aos from "aos";
import "aos/dist/aos.css";

const Services = (props: OurServicesProps) => {
  const { data = [] } = props;
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <Grid container sx={styles.container}>
      <CustomContainer>
        <Grid data-aos="fade-right" container item lg={12} md={12} sm={12} xs={12} sx={styles.text}>
          <Text variant="h2" name="Our 360° Services" sx={styles.styling} />
        </Grid>
        <Grid data-aos="fade-right" container item lg={12} md={12} sm={12} xs={12} sx={styles.description}>
          {data.map((item) => {
            return (
            
              <>
             <Block
                key={item.id}
                name={item?.attributes?.title}
                image={item?.attributes?.picture?.data?.attributes?.url}
                description={item?.attributes?.description}
                 pathname={`/services/${item?.attributes?.slug}`}
              />              
              </>
              
            );
          })}
        </Grid>
      </CustomContainer>
    </Grid>
  );
};

export default Services;
