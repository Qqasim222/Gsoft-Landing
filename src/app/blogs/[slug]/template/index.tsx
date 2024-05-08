"use client";
import React from "react";
import { useParams } from "next/navigation";
import { Box, Button, CardHeader, Grid, TextField, Typography } from "@mui/material";
import Layout, { CustomContainer } from "@/components/layout";
import { styles } from "@/components/Blog/components/BlogDetail/Style";
import Header from "@/components/Services/components/Header";
import fb from "@assest/images/fb.png";
import whatsapp from "@assest/images/whatsapp.png";
import twitter from "@assest/images/twiter.png";
import linkedIn from "@assest/images/linkedIn.png";
import Link from "next/link";
import GSoftImage from "@/components/GSoftImage";
import { FacebookShareButton, WhatsappShareButton, TwitterShareButton, LinkedinShareButton } from "react-share";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import ApiError from "@/components/PageError";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";


const BlogDetail = (props: any) => {
  const { blogs, popularBlog, error } = props;
      const params = useParams();

  const shareUrl = process.env.NEXT_PUBLIC_SITE_URL + "blogs/" + params.slug;

  return (
    <>
      {error === true ? (
        <Layout  header={{ backgroundColor: "#001A1F" }}>
          <ApiError />
        </Layout>
      ) : (
        <main>
          <Layout>
            <Header
              heading={blogs?.blogdetails?.attributes?.title}
              desc={blogs?.blogdetails?.attributes?.publishedDate}
            />
            <CustomContainer>
              <Grid container item xs={12} sm={12} md={12} lg={12} sx={styles.Blog}>
                <Grid item xs={11} md={11} sm={11} lg={7}>
                  <Box
                    sx={{
                      height: { xs: 207, sm: 500, md: 400, lg: 380 },
                      width: { xs: "100%", sm: 710, md: 750, lg: 580 },
                    }}
                  >
                    <GSoftImage
                      alt="img"
                      src={blogs?.blogdetails?.attributes?.picture?.data?.attributes?.url}
                      quality={"100"}
                      style={{ objectFit: "contain" }}
                    />
                  </Box>
                  <Grid item xs={12} md={12} sm={12} lg={12}>
                    <ReactMarkdown
                      // eslint-disable-next-line react/no-children-prop
                      children={blogs?.blogdetails?.attributes?.description}
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
                    <Grid container gap={1} xs={12} sm={12} md={12} lg={12} sx={{ justifyContent: "space-between" }}>
                      <Grid
                        container
                        gap={1}
                        xs={12}
                        sm={12}
                        md={8.8}
                        lg={9}
                        sx={{
                          alignItems: "center",
                          justifyContent: { lg: "flex-start" },
                        }}
                      >
                        <Typography>Tags:</Typography>
                        {blogs?.blogdetails?.attributes?.tags.split(" ").map((tag: any, index: any) => {
                          return (
                            <Link key={index} href={`/tags/${tag.split("#").join("")}`}>
                            <Button
                              key={`${tag?.id}-${index}`}
                              variant="outlined"
                              sx={{
                                borderRadius: "24px",
                                backgroundColor: "white",
                                color: "#B8B8B8",
                                borderColor: "#B8B8B8",
                              }}
                            >
                              {tag}
                            </Button>
                            </Link>
                          );
                        })}
                      </Grid>
                      <Grid
                        container
                        xs={8}
                        sm={3}
                        md={3}
                        lg={2.8}
                        sx={{
                          alignItems: "baseline",
                          justifyContent: "space-between",
                        }}
                      >
                        <Link href={shareUrl}>
                        <FacebookShareButton url={shareUrl}>
                          <Box sx={{ height: "34px", width: "34px" }}>
                            <GSoftImage alt="img" src={fb} />
                          </Box>
                        </FacebookShareButton>
                        </Link>
                        <Link href={shareUrl}>

                        <WhatsappShareButton url={shareUrl}>
                          <Box sx={{ height: "34px", width: "34px" }}>
                            <GSoftImage alt="img" src={whatsapp} />
                          </Box>
                        </WhatsappShareButton>
                        </Link>
                        <Link href={shareUrl}>

                        <TwitterShareButton url={shareUrl}>
                          <Box sx={{ height: "34px", width: "34px" }}>
                            <GSoftImage alt="img" src={twitter} />
                          </Box>
                        </TwitterShareButton>
                        </Link>

                        <Link href={shareUrl}>

                        <LinkedinShareButton url={shareUrl}>
                          <Box sx={{ height: "34px", width: "34px" }}>
                            <GSoftImage alt="img" src={linkedIn} />
                          </Box>
                        </LinkedinShareButton>
                        </Link>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={11} md={11} sm={11} lg={5} sx={styles.FeatureCard}>
                  <Grid sx={styles.Text}>
                    <Typography variant="h6">Most Popular</Typography>
                  </Grid>
                  <Box sx={styles.GridText}>
                    <Grid item lg={12}>
                      <TextField
                        style={{ width: "100%" }}
                        InputLabelProps={{
                          style: { color: "error.dark" },
                        }}
                        size="small"
                        placeholder="Search the blog"
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="start">
                              <SearchIcon sx={{ cursor: "pointer" }} />
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Grid>
                  </Box>
                  <Box>
                    {popularBlog?.popularBlog?.map((item: any, index: any) => {
                      return (
                        <Box sx={styles.cardText} key={`${item.id}-${index}`}>
                          <Link
                            href={`/blogs/${item?.attributes?.slug}`}
                            style={{ textDecoration: "none", color: "black" }}
                          >
                            <CardHeader
                              title={item?.attributes?.title}
                              subheader={item?.attributes?.publishedDate}
                              desc="Gosft"
                            />
                          </Link>
                        </Box>
                      );
                    })}
                  </Box>
                </Grid>
              </Grid>
            </CustomContainer>
          </Layout>
        </main>
      )}
    </>
  );
};

export default BlogDetail;


