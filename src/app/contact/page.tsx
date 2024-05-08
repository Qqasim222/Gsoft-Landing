
import { client } from "@/api/graphql/client";
import Page  from "@/app/contact/templete";
import { Contact_Page_SEO } from "@/api/graphql/queries/contact";
import { Metadata } from "next";
import { mapSeoData } from "@/utlis/next-seo.config";

export async function generateMetadata(
  ): Promise<Metadata> {
   const data= await client.query({
      query: Contact_Page_SEO,
    });
    const seo = data?.data?.contactPageStatic?.data?.attributes?.seo;

  
    return  mapSeoData(seo);
  }

const getData=async ()=>{
    try {
        const queries = [
          client.query({
            query: Contact_Page_SEO,
          }),
        ];
         await Promise.all(queries);
        // const seo = response[0]?.data?.contactPageStatic?.data?.attributes?.seo || [];
        return {
          props: {
            // seo,
          },
        };
      } catch (error) {
        return { props: { error: true } };
      }
};
export default async function contact() {
 const data =await getData();

 
  return <Page  {...data} />;
}
