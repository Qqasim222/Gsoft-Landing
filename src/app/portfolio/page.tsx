import React from "react";
import Portfolio from "./template";
import { client } from "@/api/graphql/client";
import { GET_PORTFOLIO_CATEGORIES, Portfolio_Page_SEO } from "@/api/graphql/queries/portfolio";
import { TECHNOLOGY_CATEGORIES } from "@/api/graphql/queries/home";
import { Metadata } from "next";
import { mapSeoData } from "@/utlis/next-seo.config";

export async function generateMetadata(
  ): Promise<Metadata> {
   const data= await client.query({
      query: Portfolio_Page_SEO,
    });
    const seo = data?.data?.portfolioPage?.data?.attributes?.seo;

  
    return  mapSeoData(seo);
  }

const getData =async ()=>{
  try {
    const queries = [
      client.query({
        query: GET_PORTFOLIO_CATEGORIES,
      }),
      client.query({
        query: TECHNOLOGY_CATEGORIES,
      })
    ];

    const response = await Promise.all(queries);
    const getProjectCategories = response[0].data.portfolioCategories.data || [];
    const technologyCategories = response[1]?.data?.technologyCategories?.data || [];
    if (response[0].data.portfolioCategories.data.length > 0) {
      return {
        
          getProjectCategories: {
            getProjectCategories: getProjectCategories,
          },
          technologies: { list: technologyCategories },
        
      };
    } else {
      return {  error: true };
    }
  } catch (error) {
    return {  error: true  };
  
}
};
const Page = async () => {

  const data= await  getData();
  return (
 <Portfolio  {...data} />
  );
};

export default Page;













