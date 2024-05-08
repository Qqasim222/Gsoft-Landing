"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { Grid, Typography } from "@mui/material";
import { styles } from "./styles";
import Text from "@/components/GsoftText";
import { HeaderProps } from "@/types/home";
import { CustomContainer } from "@/components/layout";
import Aos from "aos";
import "aos/dist/aos.css";
import Banner from "./banner";

const HomeHeader = (props: HeaderProps) => {
  const { buttonText, heading, description } = props;
  useEffect(() => {
    Aos.init({ duration: 2000, offset: 120 });
  }, []);


  return (
    <>
      <Banner />
      <Grid container item md={12} sm={12} xs={12} sx={styles.container}>
        <CustomContainer sx={{ zIndex: 5 }}>
          <Grid
            item
            md={10.5}
            sm={12}
            xs={12}
            lg={12}
            sx={styles.box}
            style={{ display: "flex", flexDirection: "column" }}
            data-aos="fade-right"
          >
            <Grid item md={12} sm={12} xs={12} lg={12}>
              <Grid item lg={12} md={12} sm={12} xs={12} sx={styles.typo}>
                <Typography
                  variant="h1"
                  fontWeight={"bold"}
                  sx={styles.headertext}
                  dangerouslySetInnerHTML={{
                    __html: heading,
                  }}
                ></Typography>
              </Grid>
              <Grid item lg={6.5} md={12} sm={12} xs={12}>
                <Typography
                  fontSize={{ xs: "16px", sm: "16px", md: "16px", lg: "16px" }}
                  sx={styles.desc}
                  dangerouslySetInnerHTML={{
                    __html: description,
                  }}
                />
              </Grid>
            </Grid>
           

            <Link href="/estimate-your-project" style={{textDecoration:"none",color:"white"}}>
            <Grid item xs={11} sm={5} md={4} lg={4} xl={4} sx={styles.button} >
           
              <Text
                variant="h6"
                variantMapping={{
                  h6: "p",
                }}
                name={buttonText}
              />
             
            </Grid>
            </Link>
            
          </Grid>
        </CustomContainer>
      </Grid>
    </>
  );
};

export default HomeHeader;
