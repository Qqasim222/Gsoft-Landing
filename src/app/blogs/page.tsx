  import { client } from "@/api/graphql/client";
  import Page  from "@/app/blogs/template";
import { Metadata } from "next";
import { mapSeoData } from "@/utlis/next-seo.config";
import { BlogPage_SEO, POPULAR_BLOG } from "@/api/graphql/queries/blog";


  export async function generateMetadata(
    ): Promise<Metadata> {
     const data= await client.query({
        query: BlogPage_SEO,
      });
      const seo = data?.data?.blogPage?.data?.attributes?.seo;

    
      return  mapSeoData(seo);
    }


  const getData=async ()=>{
    try {
      const queries = [
        client.query({
          query: POPULAR_BLOG,
        }),
        // client.query({
        //   query: BlogPage_SEO,
        // }),
      ];
  
      const response = await Promise.all(queries);
      const popularBlog = response[0]?.data?.blogs?.data || [];
      // const seo = response[1]?.data?.blogPage?.data?.attributes?.seo || [];
      return {
          popularBlog: {
            popularBlog: popularBlog,
          }
      };
    } catch (error) {
      return { props: { error: true } };
    }
  };
  export default async function blogs() {

  const data =await getData();

  
    return <Page  {...data} />;
  }
