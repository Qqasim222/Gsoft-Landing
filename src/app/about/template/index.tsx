"use client";
import { useTheme } from "@mui/material";
import AboutComponent from "@/components/AboutPage/components/TopComponent";
import Offers from "@/components/Services/components/ServicesOffers";
import Mission from "@/components/AboutPage/components/Mission";
import Counts from "@/components/AboutPage/components/Counts";
import Leadership from "@/components/AboutPage/components/Leadership";
import PortfolioCard from "@/components/Portfolio";
import Testimonial from "@/components/Testimonials";
import Layout from "@/components/layout";
import ApiError from "@/components/PageError";

const About = (props:any) => {
  const theme = useTheme();
  const { error} = props;

  return (
    <>
      {error === true ? (
        <Layout  header={{ backgroundColor: "#001A1F" }}>
          <ApiError />
        </Layout>
      ) : (
        <Layout>
          <main>
            <AboutComponent
              desc={props?.props.aboutUs?.aboutUs?.attributes?.shortDescription}
              // desc={"Software Development Company | Global Software Consulting"}
              image={props?.props.aboutUs?.aboutUs?.attributes?.coverPicture?.data?.attributes?.url}
              {...props.header}
              heading="About"
            />
            <Offers
              topHeading="Work with the Tech Leader."
              heading={props?.props.aboutUs?.aboutUs?.attributes?.shortDescription}
              desc={props?.props.aboutUs?.aboutUs?.attributes?.longDescription}
              image={props?.props.aboutUs?.aboutUs?.attributes?.image1?.data?.attributes?.url}

            />

            <Mission aboutUs={props?.props.aboutUs} />
            <Counts
              countImg={props?.props.aboutUs?.aboutUs?.attributes?.image2?.data?.attributes?.url}
              count1={props?.props.aboutUs?.aboutUs?.attributes?.ClientsNumber}
              title1={props?.props.aboutUs?.aboutUs?.attributes?.totalClients}
              count2={props?.props.aboutUs?.aboutUs?.attributes?.projectsNumber}
              title2={props?.props.aboutUs?.aboutUs?.attributes?.totalProjects}
              count3={props?.props.aboutUs?.aboutUs?.attributes?.hourOfSupport}
              title3={props?.props.aboutUs?.aboutUs?.attributes?.totalHours}
              count4={props?.props.aboutUs?.aboutUs?.attributes?.talentedGsoftian}
              title4={props?.props.aboutUs?.aboutUs?.attributes?.totalGsoftians}
            />
           <Leadership meetOurTeam={props?.props?.meetOurTeam} />
            <PortfolioCard
              list={props?.props.portfolio?.list}
              tags={props?.props.projectCategories}
              bgcolor={theme.palette.primary.light}
              color={theme.palette.secondary.main}
              hoverbg={theme.palette.secondary.main}
              hoverColor={theme.palette.secondary.light}
              descColor={theme.palette.success.light}
              tabColor={theme.palette.success.light}
            />
               
            <Testimonial list={props?.props.testimonial?.list} />
        
          </main>
        </Layout>
      )}
</>
  );
};
export default About;