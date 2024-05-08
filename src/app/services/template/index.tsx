"use client";
import React from "react";
import { Grid, Typography } from "@mui/material";
import { styles } from "@/styles/services";
import Description from "@/components/Description";
import Services from "@/components/Services/components/ServicesBlock";
import Facilities from "@/components/Services/components/Facilities";
import PortfolioCard from "@/components/Portfolio";
import Layout from "@/components/layout";
import ApiError from "@/components/PageError";

function ServicesPage(props: any) {
  
  
  const { error, portfolio, service, whaychoseus, whatweffer, projectCategories } = props.props;

  return (
    <>
      {error === true ? (
        <Layout  header={{ backgroundColor: "#001A1F" }}>
          <ApiError />
        </Layout>
      ) : (
        <Layout >
          <Grid sx={styles.toolbar}>
            <Grid container item lg={12} md={12} sm={12} xs={12} sx={styles.Headings}>
              <Grid item lg={8} md={8} sm={10} xs={12} style={{ textAlign: "center", alignItems: "center" }}>
                <Typography variant="h1" sx={styles.styling}>
                  Our Services
                </Typography>
                <Typography sx={styles.description} fontSize={{ xs: "28px", sm: "28px", md: "30px", lg: "36px" }}>
                  Fast, secure, stunning websites & Web Apps at unbeatable prices.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Description
            title={whatweffer?.whatweffer?.attributes?.title}
            details={whatweffer?.whatweffer?.attributes?.description}
            name=""
          />
          <Services service={service} />
          <Facilities whaychoseus={whaychoseus} />
          <PortfolioCard
            list={portfolio?.list}
            tags={projectCategories}
            color={"black"}
            hoverbg={"black"}
            hoverColor={"white"}
            descColor={"#black"}
            tabColor={"secondary.light"}
          />
        </Layout>
      )}
    </>
  );
}

export default ServicesPage;
