import { client } from "@/api/graphql/client";
import { BLOG_LIST } from "@/api/graphql/queries/blog";
import { GET_CAREER_JOBS } from "@/api/graphql/queries/career";
import { SERVICES_LIST } from "@/api/graphql/queries/footer";
import { GET_PORTFOLIO_CATEGORIES } from "@/api/graphql/queries/portfolio";
import { MetadataRoute } from "next";
 
export default async function sitemap(): MetadataRoute.Sitemap {
    const urls = [
        {
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 1,
          url: `${process.env.NEXT_PUBLIC_SITE_URL}`,
        
        },
        {
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 1,
      url: `${process.env.NEXT_PUBLIC_SITE_URL}about`,
    
    },
    {
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 1,
      url: `${process.env.NEXT_PUBLIC_SITE_URL}blogs`,
    
    },
    {
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 1,
        url: `${process.env.NEXT_PUBLIC_SITE_URL}careers`,
    
    },
    {
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 1,
      url: `${process.env.NEXT_PUBLIC_SITE_URL}contact`,
    
    },
    {
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 1,
      url: `${process.env.NEXT_PUBLIC_SITE_URL}estimate-your-project`,
    
    },
    {
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 1,
      url: `${process.env.NEXT_PUBLIC_SITE_URL}life-at-gsoft`,
    
    },
    {
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 1,
      url: `${process.env.NEXT_PUBLIC_SITE_URL}portfolio`,
    },
    {
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 1,
      url: `${process.env.NEXT_PUBLIC_SITE_URL}services`,
    
    }

];

    const service = await client.query({
      query: SERVICES_LIST,
    });
  
    const blogs = await client.query({
      query: BLOG_LIST,
    });

    const portfolio = await client.query({
        query: GET_PORTFOLIO_CATEGORIES,
      });
      const jobDetails = await client.query({
        query: GET_CAREER_JOBS,
      });
  
      const serviceList = service?.data?.services?.data || [];
    const blogsList = blogs?.data?.blogs?.data || [];
    const portfolioList = portfolio?.data.portfolioCategories.data[0].attributes.portfolios.data || [];
    const jobDetailsList = jobDetails?.data.careerJobs.data || [];
    const tagList = blogs?.data?.blogs?.data || [];

    

   

    serviceList.map((item:any) => {
      urls.push({
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 1,
     
        url: `${process.env.NEXT_PUBLIC_SITE_URL}services/${item?.attributes?.slug}`,
    
    });
    });
    blogsList.map((item:any) => {
      urls.push({
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 1,
     
        url: `${process.env.NEXT_PUBLIC_SITE_URL}blogs/${item?.attributes?.slug}`,
      });
    });
    portfolioList.map((item:any) => {        
        urls.push({
          lastModified: new Date(),
          changeFrequency: "monthly",
          priority: 1,
       
          url: `${process.env.NEXT_PUBLIC_SITE_URL}portfolio/${item?.attributes?.slug}`,
      
      });
      });

      jobDetailsList.map((item:any) => {   
             
        urls.push({
          lastModified: new Date(),
          changeFrequency: "monthly",
          priority: 1,
       
          url: `${process.env.NEXT_PUBLIC_SITE_URL}jobDetails/${item?.attributes?.slug}`,
      
      });
      });
      tagList.map((item:any) => {   
             
        urls.push({
          lastModified: new Date(),
          changeFrequency: "monthly",
          priority: 1,
       
          url: `${process.env.NEXT_PUBLIC_SITE_URL}tags/${item.attributes.tags}`,
      
      });
      });

   
    return urls;
  
}