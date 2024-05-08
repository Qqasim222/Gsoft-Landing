import { client } from "@/api/graphql/client";
import { ABOUT, GET_PROJECT_CATEGORIES, GET_TESTIMONIALS, HOME_CAROUSAL, OUR_SERVICES, PORTFOLIO_LIST, TECHNOLOGY_CATEGORIES, WORK_FLOW } from "@/api/graphql/queries/home";
import Page  from "@/app/templete";

const getData=async ()=>{
  try {
    const queries = [
      client.query({
        query: HOME_CAROUSAL,
      }),
      client.query({
        query: ABOUT,
      }),
      client.query({
        query: OUR_SERVICES,
        variables: {
          pagination: {
            limit: 20,
          },
        },
      }),
      client.query({
        query: TECHNOLOGY_CATEGORIES,
      }),
      client.query({
        query: PORTFOLIO_LIST,
      }),
      client.query({
        query: GET_TESTIMONIALS,
        variables: {
          showOnHome: true,
        },
      }),
      client.query({
        query: GET_PROJECT_CATEGORIES,
      }),
      client.query({
        query: WORK_FLOW,
      }),
      
    ];

    const response = await Promise.all(queries);
    const header = response[0]?.data.homeCarousels?.data[0];
    const about = response[1]?.data?.about?.data?.attributes?.longDescription;
    const ourService = response[2].data.services.data || [];
    const technologyCategories = response[3]?.data?.technologyCategories?.data || [];
    const portfolio = response[4]?.data?.portfolios?.data || [];
    const testimonial = response[5]?.data?.reviews?.data || [];
    const projectCategories = response[6]?.data?.portfolioCategories?.data || [];
    const workflow = response[7]?.data?.workflows?.data || [];
    if (response[0]?.data.homeCarousels?.data.length > 0) {
      return {
      
          header: {
            ...header?.attributes,
          },
          projectCategories: projectCategories,
          about: {
            details: about,
          },
          services: { data: ourService },
          technologies: { list: technologyCategories },
          portfolio: { list: portfolio },
          testimonial: {
            list: testimonial,
          },

          workflow: {
            workflow: workflow,
          },
        
      };
    } else {
      return { props: { error: true } };
    }
  } catch (error) {
    return { props: { error: true } };
  }
};
export default async function Home() {
 const data =await getData();

 
 
  return <Page  {...data} />;
}
