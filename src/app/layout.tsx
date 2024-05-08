 import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import ApploClientProvider from "@/components/Provider/apploClientProvider";
import ThemeProvider from "@/components/Provider/themeProvider";
import { client } from "@/api/graphql/client";
import { SOCIAL_LINKS } from "@/api/graphql/queries/footer";
import { mapSeoData } from "@/utlis/next-seo.config";
import Script from "next/script";
const inter = Montserrat({ subsets: ["latin"] ,style:["normal"], weight:["100","200","300","400","500","700","800","900"]});

export async function generateMetadata(
): Promise<Metadata> {
  // read route params
 const data= await client.query({
    query: SOCIAL_LINKS,
  });
  const seo = data?.data?.homePage?.data?.attributes?.seo;
 
  return  mapSeoData(seo);
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Script
        id="gtag-base"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TN93ZDX');`,
        }}
      />
       <Script async src={"https://www.googletagmanager.com/gtag/js?id=G-ZMVR3V0SS4"}></Script>
      <Script>
        {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config','G-ZMVR3V0SS4');`}
      </Script>
     
      <body className={inter.className}>
        <AppRouterCacheProvider>
          <ThemeProvider>
          <ApploClientProvider>
            
        {children}
        
              </ApploClientProvider>
              </ThemeProvider>
        </AppRouterCacheProvider>
        </body>
    </html>
  );
}
