"use client";

import { Container, ContainerProps } from "@mui/material";
import React from "react";
 import Footer from "@/components/Footer/Footer";
import Header from "@/components/Navbar/Header";
// import { NextSeo, NextSeoProps } from "next-seo";
// import ApiError from "./PageError";
interface LayoutProps extends ContainerProps {
  children: React.ReactNode;
  header?: { backgroundColor?: string };
  // seo?: NextSeoProps;
  showFaq?: boolean;
  error?: boolean;
}
export default function Layout(props: LayoutProps) {
  const { children, header} = props;
  return (
    <Container maxWidth={false} disableGutters>
      <Header {...header} />
      {children}
      <Footer/>
     
    </Container>
  );
}

export function CustomContainer(props: ContainerProps) {
  const { children } = props;
  return (
    <Container maxWidth={"lg"} disableGutters {...props}>
      {children}
    </Container>
  );
}
