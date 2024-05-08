import { client } from "@/api/graphql/client";
import {  GET_PROJECT_CATEGORIES,  PORTFOLIO_LIST } from "@/api/graphql/queries/home";
import Page  from "@/app/services/[slug]/template";
import { redirect } from "next/navigation";
import { GET_SERVICE, WHAT_WE_OFFER, WHAT_WE_PROVIDE, WHAY_CHOSE_US, WORK_FLOWS } from "@/api/graphql/queries/service";
import { Metadata } from "next";
import { mapSeoData } from "@/utlis/next-seo.config";

export async function generateMetadata(props:any
  ): Promise<Metadata> {

    const data=await client.query({
    query: GET_SERVICE,
    variables: {
      filters: {
        slug: {
          eq: props.params.slug,
        },
      },
    },
  });
  const seo = data.data.services.data[0].attributes.seo || [];  
    
 return  mapSeoData(seo);
 
  }

  export async function generateStaticParams() {
    const data=await client.query({
      query: GET_SERVICE,
    });
    const servicesSlug=data?.data.services?.data;

    return servicesSlug.map((item:any) => ({
      slug: item.attributes.slug,
    }));
  }

const getData=async (id:any)=>{
    try {
        const queries = [
          client.query({
            query: GET_SERVICE,
            variables: {
              filters: {
                slug: {
                  eq: id,
                },
              },
            },
          }),
          client.query({
            query: WHAT_WE_OFFER,
          }),
          client.query({
            query: WHAT_WE_PROVIDE,
          }),
          client.query({
            query: WHAY_CHOSE_US,
          }),
          client.query({
            query: WORK_FLOWS,
          }),
          client.query({
            query: GET_PROJECT_CATEGORIES,
          }),
          client.query({
            query: PORTFOLIO_LIST,
          }),
        ];
        const response = await Promise.all(queries);
        const service = response[0].data.services?.data || [];
        const whatweoffer = response[1].data.whatweoffer.data || [];
        const whatweprovide = response[2].data.serviceProvideSections.data || [];
        const whaychoseus = response[3].data.whychooseuses.data || [];
        const workflows = response[4].data.workflows.data || [];
        const projectCategories = response[5]?.data?.portfolioCategories?.data || [];
        const portfolio = response[6]?.data?.portfolios?.data || [];
        const seo = response[0]?.data?.services?.data[0]?.attributes?.seo || [];
        if (response[0].data.services?.data.length > 0) {
          return {
        
              service: {
                service: service[0],
              },
              whatweoffer: {
                whatweoffer: whatweoffer,
              },
              whatweprovide: {
                whatweprovide: whatweprovide,
              },
              whaychoseus: {
                whaychoseus: whaychoseus,
              },
              workflows: {
                workflows: workflows,
              },
              projectCategories: projectCategories,
              portfolio: { list: portfolio },
              seo,
            
          };
        } else {
          redirect("/");
            return {
            
          };

        }
      } catch (error) {
        redirect("/");
        
        return {
          
        };
      }
};
export default async function blogs(props:any) {

  

const data =await getData(props.params.slug);


  return <Page  {...data} />;
}
