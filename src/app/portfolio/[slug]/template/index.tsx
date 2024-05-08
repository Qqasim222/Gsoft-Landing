"use client";
import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import Layout, { CustomContainer } from "@/components/layout";
import { styles } from "@/components/Portfolio/detailpage/styles";
import Header from "@/components/Services/components/Header";
import GSoftImage from "@/components/GSoftImage";
import Text from "@/components/GsoftText";
import ApiError from "@/components/PageError";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Link from "next/link";

const PortfolioDetail = (props: any) => {
  const { portfolio, error } = props;
  return (
    <>
      {error === true ? (
        <Layout  header={{ backgroundColor: "#001A1F" }}>
          <ApiError />
        </Layout>
      ) : (
        <main>
          <Layout >
            <Header heading={portfolio?.portfolio?.attributes?.title} />
            <CustomContainer>
              <Grid container item xs={11.5} sm={11.5} md={11.5} lg={12} sx={styles.Main}>
                <Box
                  sx={{
                    height: { xs: 210, sm: 400, md: 400, lg: 450 },
                    width: { xs: "100%", sm: "100%", md: "79%", lg: "73%" },
                  }}
                >
                  <GSoftImage
                    src={portfolio?.portfolio?.attributes?.coverPicture?.data?.attributes?.url}
                    alt="Portfolio detail Image"
                    quality={"100"}
                    style={{ objectFit: "contain" }}
                  />
                </Box>
                <Grid
                  container
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  lg={12}
                  sx={{ display: "flex", margin: "auto", paddingTop: "20px" }}
                >
                  {portfolio?.portfolio?.attributes?.tags?.split(",").map((tag: any, index: any) => {
                    return (
                      <Text key={`${tag?.id}-${index}`} sx={styles.technologyHeadings} fontSize={"14px"} name={tag} />
                    );
                  })}
                  <Markdown
                    // eslint-disable-next-line react/no-children-prop
                    children={portfolio?.portfolio?.attributes?.description}
                    remarkPlugins={[remarkGfm]}
                    className="markdown"
                    components={{
                      // eslint-disable-next-line @typescript-eslint/no-unused-vars
                      h1: ({ node, ...props }) => (
                        <Typography fontSize={32} variant="h1" sx={{ fontWeight: "bold" }} {...props} />
                      ),
                      // eslint-disable-next-line @typescript-eslint/no-unused-vars
                      h2: ({ node, ...props }) => (
                        <Typography fontSize={28} variant="h2" sx={{ fontWeight: "bold" }} {...props} />
                      ),
                      // eslint-disable-next-line @typescript-eslint/no-unused-vars
                      h3: ({ node, ...props }) => (
                        <Typography fontSize={24} variant="h3" sx={{ fontWeight: "bold" }} {...props} />
                      ),
                      // eslint-disable-next-line @typescript-eslint/no-unused-vars
                      h4: ({ node, ...props }) => (
                        <Typography fontSize={20} variant="h4" sx={{ fontWeight: "bold" }} {...props} />
                      ),
                      // eslint-disable-next-line @typescript-eslint/no-unused-vars
                      h5: ({ node, ...props }) => (
                        <Typography fontSize={18} variant="h5" sx={{ fontWeight: "bold" }} {...props} />
                      ),
                      // eslint-disable-next-line @typescript-eslint/no-unused-vars
                      h6: ({ node, ...props }) => (
                        <Typography fontSize={16} variant="h6" sx={{ fontWeight: "bold" }} {...props} />
                      ),
                      // eslint-disable-next-line @typescript-eslint/no-unused-vars
                      p: ({ node, ...props }) => <Typography fontSize={16} fontWeight={"400"} {...props} />,
                     // eslint-disable-next-line @typescript-eslint/no-unused-vars
                      ul: ({ node, ...props }) => <Typography fontSize={16} fontWeight={"400"} {...props} />,
                    }}
                  />
                </Grid>

                <Grid item xs={12} sm={12} md={12} lg={12} sx={{ margin: "auto", paddingTop: "20px" }}>
                  {portfolio?.portfolio?.attributes?.playStoreLink || portfolio?.portfolio?.attributes?.AppStoreLink ? (
                    <Typography
                      sx={{
                        fontSize: "28px",
                        fontWeight: 600,
                        lineHeight: "42px",
                      }}
                    >
                      Download Now:
                    </Typography>
                  ) : (
                    <></>
                  )}
                  <Grid container item xs={12} sm={12} md={12} lg={12} sx={{ display: "flex" }}>
                    {portfolio?.portfolio?.attributes?.playStoreLink && (
                      <>
                        <Box
                          sx={{ height: 60, width: 210, cursor: "pointer" }}
                        >
                          <Link href={portfolio?.portfolio?.attributes?.playStoreLink}>
                          <GSoftImage
                            src={portfolio?.portfolio?.attributes?.playStore?.data?.attributes?.url}
                            alt="Play Store Image"
                          />
                          </Link>
                        </Box>
                      </>
                    )}
                    {portfolio?.portfolio?.attributes?.AppStoreLink && (
                      <>
                        <Box
                          sx={{ height: 60, width: 210, cursor: "pointer" }}
                          marginLeft={{ xs: "0px", sm: "20px" }}
                        >
                          <Link href={portfolio?.portfolio?.attributes?.AppStoreLink}>

                          <GSoftImage
                            src={portfolio?.portfolio?.attributes?.AppStore?.data?.attributes?.url}
                            alt="App Store Image"
                          />
                          </Link>
                        </Box>
                      </>
                    )}
                  </Grid>
                </Grid>
              </Grid>
            </CustomContainer>
          </Layout>
        </main>
      )}
    </>
  );
};

export default PortfolioDetail;
