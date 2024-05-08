"use client";
import React from "react";
import { Box, Button, Grid } from "@mui/material";
import { styles } from "./styles";
import Text from "@/components/GsoftText";
import fb from "@assest/images/fb.png";
import insta from "@assest/images/insta.png";
import linkedIn from "@assest/images/linkedIn.png";
import twiter from "@assest/images/twiter.png";
import be from "@assest/images/be.png";

import up from "@assest/images/Up.png";
import { FooterProps } from "@/types/home";
import Link from "next/link";
import { CustomContainer } from "@/components/layout";
import GSoftImage from "@/components/GSoftImage";

const FooterDetails = (props: FooterProps) => {
  const { services = [], technologies = [], sociallinks } = props;

  const BackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Grid container sx={styles.container}>
      <CustomContainer>
        <Grid container item lg={12} md={12} sx={styles.box}>
          <Grid item md={2.5} sm={5} xs={12} sx={styles.block}>
            <Text variant="h4" variantMapping={{ h4: "p" }} name="COMPANY" />
            <Link href="/about" style={{ textDecoration: "none" }}>
              <Text variant="body2" name="About" sx={styles.text} />
            </Link>

            <Link href="/life-at-gsoft" style={{ textDecoration: "none" }}>
              <Text variant="body2" name="Life at Gsoft" sx={styles.text} />
            </Link>
            <Link href="/contact" style={{ textDecoration: "none" }}>
              <Text variant="body2" name="Contact us" sx={styles.text} />
            </Link>
            <Link href="/careers" style={{ textDecoration: "none" }}>
              <Text variant="body2" name="Careers" sx={styles.text} />
            </Link>
          </Grid>
          <Grid item md={3} sm={5} xs={12} sx={styles.block}>
            <Text variant="h4" variantMapping={{ h4: "p" }} name="SERVICES" />
            {services.slice(0, 5).map((item, index) => (
              <Box key={"services" + index}>
              <Link href={`/services/${item?.attributes?.slug}`} style={{ textDecoration: "none" }}>
              <Text variant="body2" key={index} name={item.attributes.title} sx={styles.text} />
                </Link>
              </Box>
            ))}
          </Grid>
          <Grid item md={3} sm={5} xs={12} sx={styles.block}>
            <Text variant="h4" variantMapping={{ h4: "p" }} name="SERVICES" />
            {services.slice(5, 10).map((item, index) => (
              <Box key={"services" + index}>
                 <Link href={`/services/${item?.attributes?.slug}`} style={{ textDecoration: "none" }}>
                <Text variant="body2" key={index} name={item.attributes.title} sx={styles.text} />
                </Link>
              </Box>
            ))}
          </Grid>
          <Grid item md={2.5} sm={5} xs={12} sx={styles.block}>
            <Text variant="h4" variantMapping={{ h4: "p" }} name="TECHNOLOGIES" />
            <Grid container item xs={12} sm={12} md={12} sx={styles.tecBlock2}>
              {technologies.map((item, index) => (
                <Text variant={"caption"} key={index} name={item?.attributes?.title} sx={styles.technologies} />
              ))}
            </Grid>
          </Grid>
        </Grid>
        <Grid container item lg={12} md={12} sx={styles.topGrid}>
          <Grid container item md={3.5} sm={5} sx={styles.tecBlock}>
            <a href={sociallinks?.attributes?.facebook} target="_blank" rel="noopener noreferrer">
              <Box sx={styles.imageSize}>
                <GSoftImage alt="fb" src={fb} />
              </Box>
            </a>
            <a href={sociallinks?.attributes?.instagram} target="_blank" rel="noopener noreferrer">
              <Box sx={styles.imageSize}>
                <GSoftImage alt="insta" src={insta} />
              </Box>
            </a>
            <a href={sociallinks?.attributes?.linkedin} target="_blank" rel="noopener noreferrer">
              <Box sx={styles.imageSize}>
                <GSoftImage alt="linkedin" src={linkedIn} />
              </Box>
            </a>
            <a href={sociallinks?.attributes?.twitter} target="_blank" rel="noopener noreferrer">
              <Box sx={styles.imageSize}>
                <GSoftImage alt="twiter" src={twiter} />
              </Box>
            </a>

            <a href={sociallinks?.attributes?.behance} target="_blank" rel="noopener noreferrer">
              <Box sx={styles.imageSize}>
                <GSoftImage alt="be" src={be} />
              </Box>
            </a>
          </Grid>
          <Button>
            <Box sx={{ ...styles.imageSize, marginLeft: "-34px" }}>
              <GSoftImage alt="up" src={up} onClick={BackToTop} />
            </Box>
          </Button>
        </Grid>
      </CustomContainer>
    </Grid>
  );
};

export default FooterDetails;
