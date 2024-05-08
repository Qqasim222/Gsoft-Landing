import { client } from "@/api/graphql/client";
import Page  from "@/app/estimate-your-project/template";
import { mapSeoData } from "@/utlis/next-seo.config";
import { Metadata } from "next";
import { ESTIMATE_YOUR_PROJECT_SEO } from "@/api/graphql/queries/estimate-your-project";


export async function generateMetadata(
  ): Promise<Metadata> {
   const data= await client.query({
      query: ESTIMATE_YOUR_PROJECT_SEO,
    });
    const seo = data?.data?.estimateYourProjectPage?.data?.attributes?.seo;
  
    return  mapSeoData(seo);
  }

const getData=async ()=>{
    try {
        // const queries = [
        //   client.query({
        //     query: ESTIMATE_YOUR_PROJECT_SEO,
        //   }),
        // ];
        // const response = await Promise.all(queries);
        // const seo = response[0]?.data?.estimateYourProjectPage?.data?.attributes?.seo || [];
        return {
          props: {
            // seo,
          },
        };
      } catch (error) {
        return { props: { error: true } };
      }
};
export default async function LifeGsoft() {
 const data =await getData();

 
  return <Page  {...data} />;
}
