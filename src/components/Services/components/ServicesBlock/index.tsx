import React, { useEffect } from "react";
import { Box, Grid } from "@mui/material";
import { styles } from "./styles";
import Text from "@/components/GsoftText";
import { CustomContainer } from "@/components/layout";
import GSoftImage from "@/components/GSoftImage";
import Aos from "aos";
import "aos/dist/aos.css";

function Services(props: any) {
  const { service } = props;
  
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Grid container sx={styles.containerServices}>
      <CustomContainer>
        <Grid data-aos="fade-right" container item lg={12} md={12} sm={12} xs={12} sx={styles.descriptionServices}>
          {service.allservices.map((item: any, index: any) => (
            <Grid container key={index} item sm={6} xs={12} md={4} lg={3} sx={styles.container}>
              <Box
                sx={{
                  width: 60,
                  height: 60,
                }}
              >
                <GSoftImage
                  src={item?.attributes?.picture?.data?.attributes?.url}
                  alt="image"
                  style={{
                    filter: "brightness(0) invert(100%)",
                  }}
                />
              </Box>
              <Text sx={styles.styling} variant="h4" name={item?.attributes?.title} />
              <Text variant="body2" name={item?.attributes?.description} sx={styles.stylings} />
            </Grid>
          ))}
        </Grid>
      </CustomContainer>
    </Grid>
  );
}

export default Services;
