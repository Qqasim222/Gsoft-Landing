"use client";
import Container from "@mui/material/Container";
// import { useTheme } from "@mui/material";
import Header from "@/components/Services/components/Header";
import Menu from "@/components/Portfolio/ProjectList";
import portfolio from "@assest/images/portfolio.png";
import Layout from "@/components/layout";
import Technologies from "@/components/Home/components/Technologies/Technologies";
import Progressbar from "@/components/ProgressBar/Progressbar";
import ApiError from "@/components/PageError";

const Portfolio = (props: any) => {
  const { technologies, getProjectCategories, error } = props;

  return (
    <>
      {error === true ? (
        <Layout  header={{ backgroundColor: "#001A1F" }}>
          <ApiError />
        </Layout>
      ) : (
        <Layout >
          <Container maxWidth={false} disableGutters>
            <main>
              <Header heading="Portfolio" desc="Our Work Speaks Itself" image={portfolio} />
              <Progressbar />
              <Menu getProjectCategories={getProjectCategories} />
              <Technologies list={technologies?.list} />
            </main>
          </Container>
        </Layout>
      )}
    </>
  );
};

export default  Portfolio;