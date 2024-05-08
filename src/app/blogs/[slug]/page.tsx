import { client } from "@/api/graphql/client";
import Page  from "@/app/blogs/[slug]/template";
import { BLOG_DETAILS, POPULAR_BLOG ,BLOG_DETAILS_SEO} from "@/api/graphql/queries/blog";
import { redirect } from "next/navigation";
import { mapSeodataForBlogsPreview } from "@/utlis/next-seo.config";
import { Metadata } from "next";

export async function generateMetadata(props:any
  ): Promise<Metadata> {

    const data=await client.query({
    query: BLOG_DETAILS_SEO,
    variables: {
      filters: {
        slug: {
          eq: props.params.slug,
        },
      },
    },
  });
  const seo = data?.data?.blogs?.data[0]?.attributes?.seo || [];
    
 return  mapSeodataForBlogsPreview(seo);
 
  }



const getData=async (id:any)=>{
    try {
        const queries = [
          client.query({
            query: BLOG_DETAILS,
            variables: {
              filters: {
                slug: {
                  eq: id,
                },
              },
            },
          }),
          client.query({
            query: POPULAR_BLOG,
          }),
        ];
    
        const response = await Promise.all(queries);
        const blogdetails = response[0].data?.blogs?.data || [];
        const popularBlog = response[1]?.data?.blogs?.data || [];
       
        if (response[0].data.blogs.data.length > 0) {
          return {
        
              blogs: {
                blogdetails: blogdetails[0],
              },
              popularBlog: {
                popularBlog: popularBlog,
              },
              
            
          };
        } else {
          redirect("/");
          return ;
        }
      } catch (error) {
        return { props: { error: true } };
      }
};

export async function generateStaticParams() {
  const data=await client.query({
    query: BLOG_DETAILS,
  });
  const blogSlug=data?.data.blogs.data;
  return blogSlug.map((item:any) => ({
    slug: item.attributes.slug,
  }));
}

export default async function blogs(props:any) {

  

const data =await getData(props.params.slug);


  return <Page  {...data} />;
}
