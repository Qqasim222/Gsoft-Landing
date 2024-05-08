"use client";
import React from "react";
import Questions from "@/components/Footer/components/Questions/Questions";
import FooterDetails from "@/components/Footer/components/FooterDetails/FooterDetails";
import AllRights from "@/components/Footer/components/AllRight/AllRights";
import { FooterProps } from "@/types/home";
import { useQuery } from "@apollo/client";
import { ASK_QUESTIONS, SERVICES_LIST, TECHNOLOGIES_LIST, SOCIAL_LINKS } from "@/api/graphql/queries/footer";

const Footer = (props: FooterProps) => {
  const { data } = useQuery(SERVICES_LIST);
  const { data: technologiesData } = useQuery(TECHNOLOGIES_LIST);
  const { data: socialLinkData } = useQuery(SOCIAL_LINKS);

  const { data: questionData } = useQuery(ASK_QUESTIONS);

  const services = data?.services?.data || [];
  const technologies = technologiesData?.technologies?.data || [];
  const sociallinks = socialLinkData?.homePage?.data || [];
  const askquestions = questionData?.frequentlyQuestion.data || [];

  return (
    <>
      {props.showFaq && <Questions askquestions={askquestions ? askquestions : {}} />}
      <FooterDetails services={services} technologies={technologies} sociallinks={sociallinks} />
      <AllRights />
    </>
  );
};

export default Footer;
