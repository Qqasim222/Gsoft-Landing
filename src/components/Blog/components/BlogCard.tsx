import React, { useState } from "react";
import { Grid, Typography, Box, TextField, Button } from "@mui/material";
import CardHeader from "@mui/material/CardHeader";
// import Pagination from "@mui/material/Pagination";
import { styles } from "../styles";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { CustomContainer } from "@/components/layout";
import GSoftImage from "@/components/GSoftImage";
// import { useRouter } from "next/navigation";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import Link from "next/link";

const BlogCard = (props: any) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const route = useRouter();
  const { searcBlogData, popularBlog, searchData } = props;
  const [searchBlogs, setSearchBlogs] = useState("");
  const [updated, setUpdated] = useState(searchBlogs);
  const searchField = (event: any) => {
    setSearchBlogs(event?.target?.value);
  };
  const searchMe = () => {
    setUpdated(searchBlogs);
  };
  const handleKeyDown = (e: any) => {
    if (e.key === "Enter") {
      setUpdated(searchBlogs);
    }
  };
  searchData(updated);
  const popularBlogLimit = popularBlog?.popularBlog.slice(0, 5);

  return (
    <CustomContainer>
      <Grid container item xs={12} sm={12} md={12} lg={12} gap={2} sx={styles.Blog}>
        <Grid item xs={12} sm={12} md={12} lg={2.6} sx={styles.Articals}>
          <Box
            sx={{
              borderRadius: "11px",
              backgroundColor: "white",
              display: "flex",
              flexDirection: "column",
              padding: "50px 32px",
            }}
          >
            <Typography fontSize={"24px !important"} fontWeight="700" sx={{ marginBottom: "8px", lineHeight: "1.5px" }}>
              Articles
            </Typography>
            <Typography fontSize={"14px !important"} fontWeight="500" sx={{ marginTop: "20px", lineHeight: "30px" }}>
              Mute on the boring weblogs. Here is something fresh in the articles billet! We uncover what you want to
              read. Whether you are a marketer exploring the marketing guides or a non-specialist with an online
              business looking for some insights and tips, we have something for everyone.
            </Typography>
          </Box>
        </Grid>
        <Grid item sx={styles.cardGriding} xs={11.5} md={11.5} sm={11.5} lg={6.4}>
          {searcBlogData?.map((data: any, index: any) => {
            return (
              <Link key={index} href={`/blogs/${data?.attributes?.slug}`} style={{textDecoration:"none",color:"#000000"}}>
               <Box
                key={`${data.id}-${index}`}
                sx={{
                  backgroundColor: "white",
                  borderRadius: "11px",
                  marginBottom: "20px",
                  cursor: "pointer",
                }}
                // onClick={() => {
                //   route.push(`/blogs/${data?.attributes?.slug}`);
                // }}
              >
                <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                  <CardHeader
                    subheader={data?.attributes?.publishedDate}
                    sx={{
                      backgroundColor: "#16B1E1",
                      borderRadius: "0 11px 0px 20px",
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    paddingLeft: "30px",
                    paddingRight: "30px",
                    paddingBottom: "40px",
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      lineHeight: "36px",
                    }}
                  >
                    {data.attributes.title}
                  </Typography>
                  <Box
                    sx={{
                      height: { xs: 207, sm: 500, md: 400, lg: 380 },
                      width: { xs: "100%", sm: 710, md: 700, lg: 580 },
                    }}
                  >
                    <GSoftImage
                      alt="img"
                      src={data?.attributes?.picture?.data?.attributes?.url}
                      quality={"100"}
                      style={{ objectFit: "contain" }}
                    />
                  </Box>
                  <Typography
                    sx={{ paddingTop: "24px", fontSize: "18px", lineHeight: "28px", color: "#555555" }}
                    dangerouslySetInnerHTML={{
                      __html: data.attributes.description.slice(0, 212) + "....",
                    }}
                  ></Typography>
                  <Button
                    sx={{
                      color: "secondary.dark",
                      borderRadius: "30px",
                      padding: "15px 25px",
                      marginTop: "20px",
                      backgroundColor: "#10b2db",
                      "&:hover": {
                        backgroundColor: "#10b2db",
                      },
                    }}
                    // onClick={() => {
                    //   route.push(`/blog/${data?.attributes?.slug}`);
                    // }}
                  >
                    <Typography fontSize={"14px !important"} fontWeight={"700"}>
                      Read More
                    </Typography>
                    <ArrowRightAltIcon
                      sx={{
                        color: "secondary.main",
                      }}
                    />
                  </Button>
                </Box>
              </Box>
              </Link>
              
            );
          })}
        </Grid>
        <Grid item xs={6} md={5.5} sm={6} lg={2.6} sx={styles.FeatureCard}>
          <Box
            sx={{
              backgroundColor: "white",
              padding: "10px",
              borderRadius: "11px",
              paddingTop: "15px",
            }}
          >
            <Box sx={styles.Text}>
              <Typography variant="h6">Most Popular</Typography>
            </Box>
            <Box sx={styles.GridText}>
              <Grid item lg={12}>
                <TextField
                  style={{ width: "100%" }}
                  InputLabelProps={{
                    style: { color: "error.dark" },
                  }}
                  size="small"
                  placeholder="Search the blog"
                  onChange={searchField}
                  onKeyDown={(e) => handleKeyDown(e)}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon onClick={() => searchMe()} sx={{ cursor: "pointer" }} />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
            </Box>
            {popularBlogLimit?.map((item: any) => {
              return (
                <>
                <Link
                  href={`/blogs/${item.attributes.slug} `}
                  style={{textDecoration:"none",color:"black"}}
                  >
                  <Box sx={styles.cardText}  fontSize="15px" fontWeight="400">
                  

        
                      <CardHeader
                        title={item?.attributes?.title}
                        // avatar={
                        //   <Avatar
                        //     sx={{ bgcolor: blue[500] }}
                        //     aria-label='recipe'
                        //     src='/Gsoftfavicon.png'
                        //   ></Avatar>
                        // }
                        subheader={item?.attributes?.publishedDate}
                        desc="Gosft"
                      />
                  </Box>
                    </Link>
                </>
              );
            })}
          </Box>
        </Grid>
      </Grid>
    </CustomContainer>
  );
};

export default BlogCard;
