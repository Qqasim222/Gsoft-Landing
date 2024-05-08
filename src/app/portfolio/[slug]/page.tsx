import { client } from "@/api/graphql/client";
import Page  from "@/app/portfolio/[slug]/template";
import { Portfolio_Detail_Page, Portfolio_Detail_Page_SEO } from "@/api/graphql/queries/portfolio";
import { Metadata } from "next";
import { mapSeoData } from "@/utlis/next-seo.config";


export async function generateMetadata(props:any
  ): Promise<Metadata> {

    const data=await client.query({
    query: Portfolio_Detail_Page_SEO,
    variables: {
      filters: {
        slug: {
          eq: props.params.slug,
        },
      },
    },
  });
  const seo = data?.data.portfolios?.data[0]?.attributes.seo || [];      
 return  mapSeoData(seo);
 
  }


const getData=async (id:any)=>{
    try {
        const queries = [
          client.query({
            query: Portfolio_Detail_Page,
            variables: {
              filters: {
                slug: {
                  eq: id,
                },
              },
            },
          }),
        ];
    
        const response = await Promise.all(queries);
        const portfolio = response[0]?.data?.portfolios?.data || [];
        if (response[0].data.portfolios.data.length > 0) {
          return {
              portfolio: {
                portfolio: portfolio[0],
              },
          };
        } else {
          return {
            redirect: {
              permanent: true,
              destination: "/",
            },
          };
        }
      } catch (error) {
        return {
          redirect: {
            permanent: true,
            destination: "/",
          },
        };
      }
};

export async function generateStaticParams() {
  const data=await client.query({
    query: Portfolio_Detail_Page,
  });
  const PortfolioSlug=data?.data.portfolios.data;
  
  return PortfolioSlug.map((item:any) => (
    {
    slug: item.attributes.slug,
  }));
}


export default async function blogs(props:any) {

  

const data =await getData(props.params.slug);


  return <Page  {...data} />;
}
