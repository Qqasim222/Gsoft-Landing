import { client } from "@/api/graphql/client";
import Page  from "@/app/life-at-gsoft/templete";
import { LIFE_AT_GSOFT, Life_at_gsoft_Page_SEO } from "@/api/graphql/queries/lifeatgsoft";
import { Metadata } from "next";
import { mapSeoData } from "@/utlis/next-seo.config";

export async function generateMetadata(
  ): Promise<Metadata> {
   const data= await client.query({
      query: Life_at_gsoft_Page_SEO,
    });
    const seo = data?.data?.lifeAtGSoft?.data?.attributes?.seo;

  
    return  mapSeoData(seo);
  }

const getData=async ()=>{
  try {
    const queries = [
      client.query({
        query: LIFE_AT_GSOFT,
      })
    ];
    const response = await Promise.all(queries);
    const lifeatgsoft = response[0]?.data?.lifeAtGsofts?.data || [];
    if (response[0]?.data?.lifeAtGsofts?.data.length > 0) {
      return {
        
          lifeatgsoft: {
            lifeatgsoft: lifeatgsoft[0],
            // eslint-disable-next-line no-unsafe-optional-chaining
            images: [{ description: lifeatgsoft[0].attributes }, ...lifeatgsoft[0]?.attributes?.images?.data],
          },
        
      };
    } else {
      return {   error: true  };
    }
  } catch (error) {
    return {  error: true  };
  }
};
export default async function LifeGsoft() {
 const data =await getData();

 
  return <Page  {...data} />;
}
