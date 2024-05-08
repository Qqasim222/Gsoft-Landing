import {
  FooterProps,
  HeaderProps,
  PortfolioListProps,
  TestimonialProps,
  ServiceProp,
  whyChoseUsProp,
  whatWeProvideProp,
  whatWeOfferProp,
  WorkFlowProps,
  AskQuestionsProps,
  SocialLinksProps,
  ProjectCategoriProps,
} from "./home";

export interface Props {
  header: HeaderProps;
  portfolio: PortfolioListProps;
  error?: boolean;
  footer: FooterProps;
  testimonial: TestimonialProps;
  service: ServiceProp;
  whaychoseus: whyChoseUsProp;
  whatweprovide: whatWeProvideProp;
  whatweoffer: whatWeOfferProp;
  workflows: WorkFlowProps;
  askquestions: AskQuestionsProps;
  sociallinks: SocialLinksProps;
  projectCategories: ProjectCategoriProps;
  whaychooseus: any;
  whatweffer: any;
  seo: any;
}
