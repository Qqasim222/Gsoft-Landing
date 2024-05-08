"use client";
import React, { useEffect } from "react";
import { Grid, Box, useMediaQuery, useTheme, TypographyProps } from "@mui/material";
import { StaticImageData } from "next/image";
import { styles } from "./styles";
import Text from "@/components/GsoftText";
import CommonButton from "@/components/Button/CommonButton";
import { CustomContainer } from "@/components/layout";
import GSoftImage from "@/components/GSoftImage";
import Aos from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

interface Props extends TypographyProps {
  heading?: string;
  desc?: string;
  point1?: string;
  point2?: string;
  point3?: string;
  point4?: string;
  image?: StaticImageData;
  points?: any;
  direction?: string;
}

const ComponentOne = (props: Props) => {

  const { heading, desc, points, image, direction = "row-reverse" } = props;
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    Aos.init({ duration: 2000, Offset: 120 });
  }, []);
  return (
    <CustomContainer>
      <Grid
        container
        item
        md={12}
        lg={12}
        sm={12}
        sx={{ ...styles.box, flexDirection: !isMatch ? direction : "row", justifyContent: "space-evenly" }}
        data-aos="fade-right"
        data-aos-duration="1500"
        data-aos-easing="ease-out-cubic"
      >
        <Grid container item lg={5} md={12} sm={12} xs={12}>
          <Box
            sx={{
              width: 500,
              height: 430,
            }}
          >
            <GSoftImage
              src={image}
              alt="image"
              style={{
                objectFit: "contain",
              }}
            />
          </Box>
        </Grid>

        <Grid container item lg={6} md={12} sm={12} xs={12} sx={styles.grid}>
          <Text
            fontSize={"42px"}
            fontWeight={"bold"}
            lineHeight={"50px"}
            name={heading}
            style={{
              marginTop: isMatch ? "4%" : "0%",
            }}
          />
          <Text fontSize={"16px"} lineHeight={"24px"} name={desc} />
          <Grid container sx={styles.points}>
            <Box sx={styles.tick}>
              <Text name="✓" variant="h6" sx={styles.txt} />
              <Text fontSize={"16px"} lineHeight={"24px"} name={points?.point1} />
            </Box>
            <Box sx={styles.tick}>
              <Text name="✓" variant="h6" variantMapping={{ h6: "p" }} sx={styles.txt} />
              <Text fontSize={"16px"} lineHeight={"24px"} name={points?.point2} />
            </Box>
            <Box sx={styles.tick}>
              <Text name="✓" variant="h6" variantMapping={{ h6: "p" }} sx={styles.txt} />
              <Text fontSize={"16px"} lineHeight={"24px"} name={points?.point3} />
            </Box>
            <Box sx={styles.tick}>
              <Text name="✓" variant="h6" variantMapping={{ h6: "p" }} sx={styles.txt} />
              <Text fontSize={"16px"} lineHeight={"24px"} name={points?.point4} />
            </Box>
          </Grid>
          <Grid sx={{ paddingTop: "25px" }}>
            <Link style={{textDecoration:"none"}}  href="/estimate-your-project">
            <CommonButton
              heading={{
                variant: "h6",
                variantMapping: { h6: "p" },
              }}
              name="Get Quote"
              variant="contained"
              sx={styles.button}
            />
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </CustomContainer>
  );
};

export default ComponentOne;
