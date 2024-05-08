import {
  FooterProps,
  HeaderProps,
  OurServicesProps,
  PortfolioListProps,
  TechnologiesProps,
  TestimonialProps,
  ProjectCategories,
} from "./home";

export interface Props {
  header: HeaderProps;
  services: OurServicesProps;
  technologies: TechnologiesProps;
  projectCategories?: ProjectCategories[];
  portfolio: PortfolioListProps;
  error?: boolean;
  footer: FooterProps;
  testimonial: TestimonialProps;
  askquestions: any;
  sociallinks: any;
  aboutUs: any;
  meetOurTeam: any;
  seo: any;
}
