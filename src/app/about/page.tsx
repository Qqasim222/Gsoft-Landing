import React from "react";
import { client } from "@/api/graphql/client";
import { ABOUT_US, About_SEO_Query, MEET_OUR_TEAM } from "@/api/graphql/queries/about";
import { GET_PROJECT_CATEGORIES, GET_TESTIMONIALS, HOME_CAROUSAL, PORTFOLIO_LIST, TECHNOLOGY_CATEGORIES } from "@/api/graphql/queries/home";
import About from "./template";
import { Metadata } from "next";
import { mapSeoData } from "@/utlis/next-seo.config";

export async function generateMetadata(
  ): Promise<Metadata> {
   const data= await client.query({
      query: About_SEO_Query,
    });
    const seo = data?.data?.about?.data?.attributes?.seo;

  
    return  mapSeoData(seo);
  }
const getData =async ()=>{
    try {
      const queries = [
        client.query({
          query: HOME_CAROUSAL,
        }),
  
        client.query({
          query: PORTFOLIO_LIST,
        }),
        client.query({
          query: TECHNOLOGY_CATEGORIES,
        }),
        client.query({
          query: GET_TESTIMONIALS,
        }),
        client.query({
          query: ABOUT_US,
        }),
        client.query({
          query: MEET_OUR_TEAM,
        }),
        client.query({
          query: GET_PROJECT_CATEGORIES,
        }),
      ];
  
      const response = await Promise.all(queries);
      const header = response[0]?.data.homeCarousels?.data[0];
      const portfolio = response[1]?.data?.portfolios?.data || [];
      const technologyCategories = response[2].data.technologyCategories.data || [];
      const testimonial = response[3].data.reviews.data || [];
      const projectCategories = response[6]?.data?.portfolioCategories?.data || [];
      const aboutUs = response[4]?.data?.about?.data || [];
      const meetOurTeam = response[5]?.data?.usersPermissionsUsers?.data || [];
      if (response[0]?.data.homeCarousels?.data.length > 0) {
        return {
          props: {
            header: {
              ...header?.attributes,
              coverPhoto: {
                ...header?.attributes?.coverPhoto?.data?.attributes,
              },
            },
            projectCategories: projectCategories,
            technologies: { list: technologyCategories },
  
            portfolio: { list: portfolio },
            testimonial: {
              list: testimonial,
            },
            aboutUs: {
              aboutUs: aboutUs,
            },
            meetOurTeam: {
              meetOurTeam: meetOurTeam,
            },
          },
        };
      } else {
        return { error: true } ;
      }
    } catch (error) {
      return  { error: true } ;
    }
  };
  const Page = async () => {

    const data= await  getData();
    return (
   <About  {...data} />
    );
  };
  
  export default Page;