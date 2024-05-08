"use client";

import React, { useEffect, useState } from "react";
import MainHead from "@/components/Blog/components/Main";
import BlogCard from "@/components/Blog/components/BlogCard";
import { SEARCH_BLOG } from "@/api/graphql/queries/blog";
import { client } from "@/api/graphql/client";
import Layout from "@/components/layout";
import Progressbar from "@/components/ProgressBar/Progressbar";
import { Box, Pagination } from "@mui/material";
import ApiError from "@/components/PageError";

const Blogpage = (props: any) => {
  
  const { error } = props;
  const { popularBlog } = props;
  const [searchDat, setSearchDat] = useState("");
  const [searcBlogData, setSearchBlogData] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const searchNewBlogs = async (searchDat: any) => {
    const response = await client.query({
      query: SEARCH_BLOG,
      variables: {
        pagination: {
          page: currentPage,
          pageSize: 3,
        },
        filters: {
          title: {
            containsi: searchDat.trim(),
          },
        },
        sort: "publishedDate:desc",
      },
    });
    const searchblogs = response?.data?.blogs?.data || [];
    const pagination = response?.data?.blogs?.meta?.pagination.total || 1;
    setSearchBlogData(searchblogs);
    setTotalPages(Math.ceil(pagination / 3));
    backToTop();
  };
  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    searchNewBlogs(searchDat);
  }, [searchDat, currentPage]);

  const searchData = (searchBlogs: any) => {
    setSearchDat(searchBlogs);
  };

  if (error) {
    return (
      <Layout header={{ backgroundColor: "#001A1F" }}>
        <ApiError />
      </Layout>
    );
  }
  const handlePageChange = (_: any, value: any) => {
    setCurrentPage(value);
  };

  return (
    <Layout >
      <MainHead />
      <Progressbar />
      <Box style={{ backgroundColor: "#e5f0f3" }}>
        <BlogCard popularBlog={popularBlog} searchData={searchData} searcBlogData={searcBlogData} />
        <Box sx={{ display: "flex", justifyContent: "center", paddingBottom: "20px" }}>
          {totalPages > 1 && (
            <Pagination
              count={totalPages}
              page={currentPage}
              onChange={handlePageChange}
              variant="outlined"
              shape="rounded"
            />
          )}
        </Box>
      </Box>
    </Layout>
  );
};

export default Blogpage;

