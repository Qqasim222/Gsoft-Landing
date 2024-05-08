export type CoverPhoto = {
  url: string;
  name: string;
  thumbnail: string;
  formats: {
    url: string;
    name: string;
  };
};
export type Technologies = {
  id: string;
  attributes: {
    title: string;
  };
};
export type Services = {
  id: string;
  attributes: {
    slug: any;
    title: string;
  };
};

export type ProjectCategories = {
  id: string;
  attributes: {
    name: string;
  };
  tags: string;
};

export type Portfolio = {
  id: string;
  attributes: {
    slug: any;
    __typename: string;
    title: string;
    category: string;
    description: string;
    coverPicture: { data: { attributes: CoverPhoto } };
    tags: string;
  };
};

export type HeaderProps = {
  heading: string;
  description: string;
  buttonText: string;
  coverPhoto: CoverPhoto;
};

export type BlogProps = {
  blogs: any;
  blogdetails: any;
};

export type DescriptionProps = {
  title: string;
  name: string;
  details: string;
};

export type User = {
  name: string;
  username: string;
  designation: string;
  profilePicture: {
    data: {
      id: string;
      attributes: CoverPhoto;
    };
  };
};
export type OurServicesProps = {
  data: {
    id: string;
    attributes: {
      slug: any;
      title: string;
      description: string;
      picture: {
        data: {
          attributes: CoverPhoto;
        };
      };
    };
  }[];
};

export type TechnologiesProps = {
  list: {
    id: string;
    attributes: {
      title: string;
    };
  }[];
  bgcolor: string;
  color: string;
  filter?: string;
  tabColor?: string;
  hoverColor?: any;
  hoverbg?: any;
  descColor?: any;
};

export type PortfolioListProps = {
  bgcolor?: string;
  color?: string;
  hoverbg?: string;
  hoverColor?: string;
  descColor?: string;
  tabColor?: string;
  list?: Portfolio[];
  tags?: ProjectCategories[];
};

export type TestimonialProps = {
  list: {
    id: string;
    attributes: {
      rating: number;
      review: string;
      showOnHome: boolean;

      user: {
        data: {
          attributes: User;
        };
      };
    };
  }[];
};
export type ServiceProp = {
  service: any;
  allservices: any;
};
export type FooterProps = {
  services?: Services[];
  technologies?: Technologies[];
  askquestions?: any;
  sociallinks?: any;
  showFaq?: boolean;
};
export interface Props {
  header: HeaderProps;
  about: DescriptionProps;
  services: OurServicesProps;
  technologies: TechnologiesProps;
  portfolio: PortfolioListProps;
  testimonial: TestimonialProps;
  error?: boolean;
  footer: FooterProps;
  message?: string;
  projectCategories?: ProjectCategories[];
  workflow: any;
  askquestions: AskQuestionsProps;
  sociallinks: SocialLinksProps;
  whaychoseus: any;
  seo: any;
}

export type PortfolioListQuery = {
  portfolios: { data: Portfolio[] };
};
export type whyChoseUsProp = {
  whaychooseus: any;
};
export type whatWeOfferProp = {
  whatweoffer: any;
};
export type whatWeProvideProp = {
  whatweprovide: any;
};
export type WorkFlowProps = {
  workflows: any;
};
export type AskQuestionsProps = {
  askquestions: any;
};
export type SocialLinksProps = {
  sociallinks: any;
};
export type ProjectCategoriProps = {
  projectCategories: any;
};
