"use client";
import Header from "@/components/Services/components/Header";
import Services from "@/components/Services/components/MoreServices";
import Layout from "@/components/layout";
import Progressbar from "@/components/ProgressBar/Progressbar";
import ApiError from "@/components/PageError";

const WebDevelopment = (props: any) => {
  const { service, error } = props;
  return (
    <>
      {error === true ? (
        <Layout  header={{ backgroundColor: "#001A1F" }}>
          <ApiError />
        </Layout>
      ) : (
        <Layout >
          <Progressbar />
          <Header
            heading={service?.service?.attributes?.title}
            desc={service?.service?.attributes?.description}
            image={service?.service?.attributes?.coverPicture?.data?.attributes?.url}
          />
          {/* <Offers
            topHeading="Our Services"
            heading={whatweoffer?.whatweoffer?.attributes?.title}
            desc={whatweoffer?.whatweoffer?.attributes?.description}
            image={whatweoffer?.whatweoffer?.attributes?.picture?.data?.attributes?.url}
          />
          {whatweprovide?.whatweprovide?.map((item: any, index: any) => {
            return (
              <ServicesDescription
                key={`${item?.id}-${index}`}
                topHeading="Our Services"
                heading={item?.attributes?.title}
                desc={item?.attributes?.description}
                image={item?.attributes?.coverPicture?.data?.attributes?.url}
              />
            );
          })} */}
          <Services service={service} />
          {/* <WorkFlow workflows={workflows} />
          <Facilities whaychoseus={whaychoseus} /> */}
        </Layout>
      )}
    </>
  );
};

export default WebDevelopment;
