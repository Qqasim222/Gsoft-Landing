import { client } from "@/api/graphql/client";
import Page  from "./template";
import { SEARCH_BLOG } from "@/api/graphql/queries/blog";

const getData=async (id:any)=>{
    try {
      
      const queries = [
        client.query({
          query: SEARCH_BLOG,
          variables: {
            filters: {
              tags: {
                containsi: id,
              },
            },
          },
        }),
      ];
    
      const response = await Promise.all(queries);
      const searchblogs = response[0]?.data?.blogs?.data || [];
      [...searchblogs]?.sort((a, b) => {
        const dateA:any = new Date(a.attributes.publishedDate);
        const dateB:any = new Date(b.attributes.publishedDate);
        return dateB - dateA;
      });
        // const seo = response[1]?.data?.CareerJobs_SEO?.data?.attributes?.seo || [];
        if (response[0]?.data?.blogs?.data.length > 0) {
          return {
                searchblogs: searchblogs,id,
            
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
