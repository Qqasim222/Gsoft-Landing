"use client";
import { NextPage } from "next";
// import Description from "components/Description";
// import Services from "components/Services";
import WorkFlow from "@/components/WorkFlow/WorkFlow";
// import Technologies from "components/Home/components/Technologies/Technologies";
import Testimonial from "@/components/Testimonials";
import PortfolioCard from "@/components/Portfolio";
  import Header from "@/components/Home/components/Header";
  import Description  from "@/components/Description";
// import Progressbar from "components/ProgressBar/Progressbar";
import { useTheme } from "@mui/material";
import { Props } from "@/types/home";
import Layout from "@/components/layout";
import ApiError from "@/components/PageError";
import Progressbar from "@/components/ProgressBar/Progressbar";
import Services from "@/components/Services";
import Technologies from "@/components/Home/components/Technologies/Technologies";

const Home: NextPage<Props> = (props) => {
  const theme = useTheme();
  const { header, about, services, technologies, portfolio, error, testimonial, projectCategories, workflow } =
    props;
  return (
    <>
      {error === true ? (
        <Layout  header={{ backgroundColor: "#001A1F" }}>
          <ApiError />
        </Layout>
      ) : (
        <Layout  showFaq={true}>
         <Header {...header} />
          <Progressbar />
         
          <Description title="Who We Are" name="CONSULTANCY. DESIGN. DEVELOPMENT." details={about.details} />
          <Services {...services} />
          <Technologies
            list={technologies.list}
            bgcolor={theme.palette.primary.light}
            color={theme.palette.secondary.main}
            filter="brightness(0) invert(1)"
            tabColor={theme.palette.success.light}
          />
          <WorkFlow workflow={workflow} />
          <PortfolioCard
            list={portfolio?.list}
            tags={projectCategories}
            bgcolor={theme.palette.primary.light}
            color={theme.palette.secondary.main}
            hoverbg={theme.palette.secondary.main}
            hoverColor={theme.palette.secondary.light}
            descColor={theme.palette.success.light}
            tabColor={theme.palette.success.light}
          />
          <Testimonial list={testimonial.list} />
        </Layout>
      )}
    </>
  );
};


export default Home;

