import { client } from "@/api/graphql/client";
import { GET_PROJECT_CATEGORIES, PORTFOLIO_LIST} from "@/api/graphql/queries/home";
import Page  from "@/app/services/template";
import { ALL_SERVICES, Service_Page_SEO, WHAT_WE_OFFER, WHAY_CHOSE_US } from "@/api/graphql/queries/service";
import { Metadata } from "next";
import { mapSeoData } from "@/utlis/next-seo.config";

export async function generateMetadata(
  ): Promise<Metadata> {
   const data= await client.query({
      query: Service_Page_SEO,
    });
    const seo = data?.data?.servicePage?.data?.attributes?.seo;

  
    return  mapSeoData(seo);
  }


const getData=async ()=>{
    try {
        const queries = [
          client.query({
            query: PORTFOLIO_LIST,
          }),
          client.query({
            query: ALL_SERVICES,
            variables: {
              pagination: {
                limit: 20,
              },
            },
          }),
          client.query({
            query: WHAT_WE_OFFER,
          }),
          client.query({
            query: WHAY_CHOSE_US,
          }),
          client.query({
            query: GET_PROJECT_CATEGORIES,
          })
        ];
    
        const response = await Promise.all(queries);
        const portfolio = response[0].data.portfolios.data || [];
        const allservices = response[1].data.services.data || [];
        const whatweffer = response[2].data.whatweoffer.data || [];
        const whaychoseus = response[3].data.whychooseuses.data || [];
        const projectCategories = response[4]?.data?.portfolioCategories?.data || [];
        if (response[0].data.portfolios.data.length > 0) {
          return {
            props: {
              portfolio: { list: portfolio },
              service: {
                allservices: allservices,
              },
              whatweffer: {
                whatweffer: whatweffer,
              },
              whaychoseus: {
                whaychoseus: whaychoseus,
              },
              projectCategories: projectCategories,
            },
          };
        } else {
          return { props: { error: true } };
        }
      } catch (error) {
        return { props: { error: true } };
      }
};
export default async function contact() {
 const data =await getData();

 
  return <Page  {...data} />;
}
