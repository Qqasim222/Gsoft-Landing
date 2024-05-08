import React from "react";
import { client } from "@/api/graphql/client";
import { BENEFITS_CAREER_JOBS, CareerJobs_SEO } from "@/api/graphql/queries/career";
import Jobs from "./template";
import { mapSeoData } from "@/utlis/next-seo.config";
import { Metadata } from "next";

export async function generateMetadata(
  ): Promise<Metadata> {
   const data= await client.query({
      query: CareerJobs_SEO,
    });
    const seo = data?.data?.careerJobPage?.data?.attributes?.seo;

  
    return  mapSeoData(seo);
  }

const getData =async ()=>{
    try {
      const queries = [
        client.query({
          query: BENEFITS_CAREER_JOBS,
          variables: {
            pagination: {
              limit: 20,
            },
          },
        })
        // ,
        // client.query({
        //   query: CareerJobs_SEO,
        // }),
      ];
  
      const response = await Promise.all(queries);
      const benefitsList = response[0]?.data?.benefitsOfCareers?.data || [];
      // const seo = response[1]?.data?.careerJobPage?.data?.attributes?.seo || [];
      if (response[0]?.data?.benefitsOfCareers?.data.length > 0) {
        return {
          props: {
            benefitsList: benefitsList,
            // seo,
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
   <Jobs  {...data} />
    );
  };
  
  export default Page;