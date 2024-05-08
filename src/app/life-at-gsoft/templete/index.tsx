"use client";
import { Grid, Typography, useTheme, useMediaQuery, Box } from "@mui/material";
import React from "react";
import { styles } from "@/components/LifeAtGsoft/Style";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Layout from "@/components/layout";
import Container from "@mui/material/Container";
import Header from "@/components/Services/components/Header";
import GSoftImage from "@/components/GSoftImage";
import Progressbar from "@/components/ProgressBar/Progressbar";
import ApiError from "@/components/PageError";

const lifeAtGsoft = (props: any) => {

  const { lifeatgsoft, error } = props;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const theme = useTheme();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const isMatch = useMediaQuery(theme?.breakpoints.down("md"));

  return (
    
    <>
      {error === true ? (
        <Layout header={{ backgroundColor: "#001A1F" }}>
          <ApiError />
        </Layout>
      ) : (
        <>
        <Layout>
          <Container maxWidth={false} disableGutters>
            <main>
              <Header
              style={{padding:"250px"}}
                heading={lifeatgsoft?.lifeatgsoft?.attributes?.title}
                desc="Our Work Speaks Itself"
                image={lifeatgsoft?.lifeatgsoft?.attributes?.coverPicture?.data?.attributes?.url}
              />
            </main>
          </Container>
          <Progressbar />
            <Grid container lg={12} md={12} sm={12} xs={12} sx={styles.container}>
              <Grid item lg={10} md={8} sm={8} xs={12}>
                <ImageList variant="quilted" gap={8} sx={styles.imglist} cols={4}>
                  {lifeatgsoft?.images.map((item: any, i: any) => {
                    let mobilecols = 4;
                    let cols = 2;
                    let rows = 2;
                    const index = i % 10 == 0 ? i : i % 10;

                    if (index + 1 == 1) {
                      (rows = 2), (cols = 2), (mobilecols = 4);
                    }
                    if (index + 1 == 2) {
                      (rows = 2), (cols = 2), (mobilecols = 4);
                    }
                    if (index + 1 == 3) {
                      (rows = 4), (cols = 2), (mobilecols = 4);
                    }
                    if (index + 1 == 4) {
                      (rows = 2), (cols = 2), (mobilecols = 4);
                    }
                    if (index + 1 == 5) {
                      (rows = 2), (cols = 1), (mobilecols = 2);
                    }
                    if (index + 1 == 6) {
                      (rows = 2), (cols = 1), (mobilecols = 2);
                    }
                    if (index + 1 == 7) {
                      (rows = 2), (cols = 2), (mobilecols = 2);
                    }
                    if (index + 1 == 8) {
                      (rows = 2), (cols = 2), (mobilecols = 2);
                    }
                    if (index + 1 == 9) {
                      (rows = 2), (cols = 2), (mobilecols = 2);
                    }
                    if (index + 1 == 10) {
                      (rows = 2), (cols = 2), (mobilecols = 2);
                    }

                    return (
                      <ImageListItem key={item.img} cols={isMatch ? mobilecols : cols} rows={rows}>
                        {item.attributes?.url ? (
                          <Box
                            sx={{
                              height: i == 1 || i == 0 ? 300 : 140 * rows,
                              width: "100%",
                            }}
                          >
                            <GSoftImage src={item.attributes?.url} alt="gsoft" style={{ objectFit: "cover" }} />
                          </Box>
                        ) : (
                          <Grid>
                            <Typography style={{ fontSize: "16px" }} sx={styles.typoText1}>
                              {"Our team"}
                            </Typography>
                            <Typography style={{ fontSize: "22px" }} fontWeight={"600"} sx={styles.typoText2}>
                              {item.description.title}
                            </Typography>
                            <Typography style={{ fontSize: "16px" }} sx={styles.typoText3}>
                              {item.description.description}
                            </Typography>
                          </Grid>
                        )}
                      </ImageListItem>
                    );
                  })}
                </ImageList>
              </Grid>
            </Grid>
         </Layout>
         </>
      )}
    </>
  );
};

export default lifeAtGsoft;

