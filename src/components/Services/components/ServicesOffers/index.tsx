import React, { useEffect } from "react";
import { Grid, useMediaQuery, useTheme, TypographyProps, Box } from "@mui/material";
import { StaticImageData } from "next/image";

import { styles } from "./styles";
import Text from "@/components/GsoftText";
import { CustomContainer } from "@/components/layout";
import Aos from "aos";
import "aos/dist/aos.css";
import GSoftImage from "@/components/GSoftImage";

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
  useEffect(() => {
    Aos.init({ duration: 2000, offset: 120 });
  }, []);

  return (
    <Grid container sx={styles.container}>
      <CustomContainer>
        <Grid data-aos="fade-right" container item lg={12} md={12} sx={styles.block}>
          <Grid item md={6} lg={6} sx={styles.box}>
            <Text
              name={topHeading}
              fontSize={{ xs: "16px", sm: "16px", md: "16px", lg: "16px" }}
              style={{ color: "black" }}
            />
            <Text
              fontSize={{ xs: "32px", sm: "32px", md: "48px", lg: "48px" }}
              lineHeight={{ xs: "42px", sm: "42px", md: "58px", lg: "58px" }}
              name={heading}
              style={{ color: "black" }}
            />
            <Text sx={styles.text} variant="body1" name={desc} />
          </Grid>
          {isMatch ? (
            ""
          ) : (
            <Grid container item md={5} lg={5}>
              <Box
                sx={{
                  height: { xs: 300, sm: 400, md: 500, lg: 500 },
                  width: { xs: 300, sm: 500, md: 600, lg: 600 },
                }}
              >
                <GSoftImage src={image} alt="image" />
              </Box>
            </Grid>
          )}
        </Grid>
      </CustomContainer>
    </Grid>
  );
};

export default Offers;
