import { client } from "@/api/graphql/client";

import Page  from "./template";

import { CareerJobs_SEO, GET_CAREER_JOBS } from "@/api/graphql/queries/career";
import { Metadata } from "next";
import { mapSeoData } from "@/utlis/next-seo.config";

export async function generateMetadata(props:any
  ): Promise<Metadata> {

    const data=await client.query({
    query: CareerJobs_SEO,
    variables: {
      filters: {
        slug: {
          eq: props.params.slug,
        },
      },
    },
  });
  const seo = data?.data?.careerJobPage?.data?.attributes?.seo || [];
    
 return  mapSeoData(seo);
 
  }



const getData=async (id:any)=>{
    try {
      
        const queries = [
          client.query({
            query: GET_CAREER_JOBS,
            variables: {
              filters: {
                slug: {
                  eq: id,
                },
              },
            },
          }),
          // client.query({
          //   query: CareerJobs_SEO,
          // }),
          // CareerJobs_SEO
        ];
    
        const response = await Promise.all(queries);
        const getcareerjob = response[0]?.data?.careerJobs?.data || [];
        // const seo = response[1]?.data?.CareerJobs_SEO?.data?.attributes?.seo || [];
        if (response[0]?.data?.careerJobs?.data.length > 0) {
          return {
            
              getcareerjob: {
                getcareerjob: getcareerjob[0],
              },
              // seo,
            
          };
        } else {
          return  { error: true } ;
        }
      } catch (error) {
        return  {error: true  };
      }
};
export default async function blogs(props:any) {

  

const data =await getData(props.params.slug);


  return <Page  {...data} />;
}
