import { Metadata } from "next";

const config = {
  openGraph: {
    type: "Website",
    // locale: "en_IE",
    url: "https://gsoftconsulting.com/",
    title: "Global Software Consulting",
    siteName: "Global Software Consulting",
    description: "We offer modern solutions for growing your business.",
    images: [
        {
          url: "/Gsoftfavicon.png",
          width: 800,
          height: 600,
          alt: "Global Software Consulting",
        },
        {
          url: "/Gsoftfavicon.png",
          width: 800,
          height: 600,
          alt: "Global Software Consulting",
        },
      ],
  },
  twitter: {
    handle: "@handle",
    site: "@site",
    creator: "@creator",
    card: "summary_large_image",
    description: "We offer modern solutions for growing your business.",
    // url: "https://gsoftconsulting.com/",
    // title: "Global Software Consulting",
    // domain: "gsoftconsulting.com",
    images: [
      {
        url: "/Gsoftfavicon.png",
        width: 800,
        height: 600,
        alt: "Global Software Consulting",
      },
      {
        url: "/Gsoftfavicon.png",
        width: 800,
        height: 600,
        alt: "Global Software Consulting",
      },
    ],
  },
  titleTemplate: "Global Software Consulting",
  defaultTitle: "Global Software Consulting",
  title: "Global Software Consulting",
  description: "We offer modern solutions for growing your business.",
  additionalLinkTags: [
    {
      rel: "favicon",
      href: "public/Gsoftfavicon.png",
    },
    {
      rel: "icon",
      href: "/Gsoftfavicon.png",
      sizes: "76x76",
    },
  ],
  // viewport:"width=device-width, initial-scale=1",
  robotsProps: {
    nosnippet: true,
    notranslate: true,
    noimageindex: true,
    noarchive: true,
    maxSnippet: -1,
    maxImagePreview: "standard",
    maxVideoPreview: -1,
  },
  canonical: "https://gsoftconsulting.com/",
  additionalMetaTags: [
    {
      property: "",
      content: "",
    },
    {
      name: "",
      content: "",
    },
  ],
};

export default config;

export const mapSeoData = (data: any): Metadata => {
  
  return {
    title: data?.titleMeta || config.titleTemplate,
    description: data?.metaDescription || config.description,
    creator:"global softwear consulting",
    keywords: data?.keywords ||"next js, react",
    // viewport:data?.metaViewport || config.viewport,

   applicationName:"global softwear consulting"  ,
   metadataBase: new URL(data?.canonicalURL || config.canonical ),
   manifest:`${process.env.NEXT_PUBLIC_SITE_URL}/manifest.json`,
   verification:{ google:"zM8iimY1IFz41BnwPRihxtztMpi7OMvtnxPIItReJnc"},
   robots:{
    index:true,
    nosnippet: true,
    noimageindex: true,
    notranslate: true,
   "max-image-preview":"standard",
   "max-snippet": -1,

   },
   icons:[{ rel: "icon", url: "/Gsoftfavicon.png" }, { rel: "apple-touch-icon", url: "/icon-512x512.png" }],
    openGraph: {
      type: "website",
      locale: "en_IE",
      url: data?.canonicalURL || config.canonical,
      siteName: data?.focuskeyphrase || config.title,
      title: data?.focuskeyphrase || config.title,
      description: data?.metaDescriptionmeta || config.openGraph?.description,
      
      images: [
        {
          url: data?.metaImage?.data?.attributes?.url,
          width: 800,
          height: 600,
          alt: "Global Software Consulting",
        },
        {
          url: data?.metaImage?.data?.attributes?.url,
          width: 800,
          height: 600,
          alt: "Global Software Consulting",
        },
      ],
    },
    twitter: {
      title: data?.titleMeta || config.titleTemplate,
      description: data?.metaDescriptionmeta || config.openGraph?.description,
      site: "@site",
      images: [
        {
          url: data?.metaImage?.data?.attributes?.url,
          width: 800,
          height: 600,
          alt: "Global Software Consulting",
        },
        {
          url: data?.metaImage?.data?.attributes?.url,
          width: 800,
          height: 600,
          alt: "Global Software Consulting",
        },
      ],
    },
    
  };
};

export const mapSeodataForBlogsPreview = (data: any) => {
  return {
    title: data?.titleMeta || config.titleTemplate,
    description: data?.metaDescription || config.description,
    keywords: data?.keywords ||"next js, react",
    manifest:`${process.env.NEXT_PUBLIC_SITE_URL}/manifest.json`,
    verification:{ google:"zM8iimY1IFz41BnwPRihxtztMpi7OMvtnxPIItReJnc"},
    creator:"global softwear consulting",
   applicationName:"global softwear consulting"  ,
  //  viewport:data?.metaViewport || config.viewport,
   robots:{
    index:true,
    nosnippet: true,
    noimageindex: true,
    notranslate: true,
   "max-image-preview":"standard",
   "max-snippet": -1,
   },
   icons:"/Gsoftfavicon.png",

    openGraph: {
      type: "article",
         
      locale: "en_IE",
      url: data?.canonicalURL || config.canonical,
      siteName: data?.title || config.title,
      title: data?.titleMeta || config.title,
      description: data?.metaDescription || config.openGraph?.description,
      authors: [
        {
          url: data?.metaImage?.data?.attributes?.url,
          secure_url: data?.metaImage?.data?.attributes?.url,
          width: 650,
          height: 850,
          alt: data?.titleMeta || config.title,
          type: "image/webp",
          secureUrl: data?.metaImage?.data?.attributes?.url,
        },
        {
          url: data?.metaImage?.data?.attributes?.url,
          width: 800,
          height: 600,
          alt: data?.titleMeta || config.title,
          type: "image/webp",
          secureUrl: data?.metaImage?.data?.attributes?.url,
        },
      ],
    },
    twitter: {
      site: "@site",
      card: "summary_large_image",
      description: data?.metaDescription || config.openGraph?.description,
      title: data?.titleMeta || config.title,
      images: [
        {
          url: data?.metaImage?.data?.attributes?.url,
          width: 800,
          height: 600,
          alt: "Global Software Consulting",
        },
        {
          url: data?.metaImage?.data?.attributes?.url,
          width: 800,
          height: 600,
          alt: "Global Software Consulting",
        },
      ],
    },
};
};
