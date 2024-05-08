import React from "react";
import { Box, Grid, useMediaQuery, useTheme } from "@mui/material";
import Text from "@/components/GsoftText";
import { styles } from "./styles";
import WhyUsComponent from "@/components/Services/components/WhyUsComponent";
import illustration from "@assest/images/illustration.png";
import { CustomContainer } from "@/components/layout";
import GSoftImage from "@/components/GSoftImage";
interface Props {
  whaychoseus: any;
}
const WhyUs = ({ whaychoseus }: Props) => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Grid container sx={styles.container}>
      <CustomContainer>
        <Grid container item lg={12} sx={styles.block}>
          <Text name="Our Core Values" variant="h5" variantMapping={{ h5: "h2" }} />
          <Text name="Why Choose Us?" variant="h2" variantMapping={{ h2: "h2" }} />
        </Grid>

        <Grid container item lg={12} md={11} sx={styles.grid}>
          <Grid container item md={3.5} sx={styles.box}>
            {whaychoseus?.whaychoseus?.slice(0, 3)?.map((item: any, index: any) => {
              return (
                <WhyUsComponent
                  key={`${item?.id}-${index}`}
                  heading={item?.attributes?.title}
                  desc={item?.attributes?.description}
                  image={item?.attributes?.photo?.data?.attributes?.url}
                />
              );
            })}
          </Grid>

          {isMatch ? (
            ""
          ) : (
            <Grid container item md={5} sx={styles.img}>
              <Box
                sx={{
                  height: 500,
                  width: 400,
                }}
              >
                <GSoftImage src={illustration} alt="img" />
              </Box>
            </Grid>
          )}

          <Grid container item md={3.5} sx={styles.box}>
            {whaychoseus?.whaychoseus?.slice(3, 6)?.map((item: any, index: any) => {
              return (
                <WhyUsComponent
                  key={`${item?.id}-${index}`}
                  heading={item?.attributes?.title}
                  desc={item?.attributes?.description}
                  image={item?.attributes?.photo?.data?.attributes?.url}
                />
              );
            })}
          </Grid>
        </Grid>
      </CustomContainer>
    </Grid>
  );
};

export default WhyUs;
