import { gql } from "@apollo/client";

export const GET_PORTFOLIO_CATEGORIES = gql`
  query Query($filters: PortfolioCategoryFiltersInput) {
    portfolioCategories(filters: $filters) {
      data {
        id
        attributes {
          name
          description
          order
          picture {
            data {
              id
              attributes {
                url
              }
            }
          }
          portfolios {
            data {
              id
              attributes {
                coverPicture {
                  data {
                    id
                    attributes {
                      url
                    }
                  }
                }
                description
                tags
                slug
                title
              }
            }
          }
        }
      }
    }
  }
`;

export const TECHNOLOGY_CATEGORIES = gql`
  query {
    technologyCategories {
      data {
        id
        attributes {
          title
          picture {
            data {
              id
              attributes {
                url
              }
            }
          }
          description
          technologies {
            data {
              id
              attributes {
                logo {
                  data {
                    id
                    attributes {
                      url
                    }
                  }
                }
                title
                description
              }
            }
          }
        }
      }
    }
  }
`;

export const Portfolio_Page_SEO = gql`
  query {
    portfolioPage {
      data {
        id
        attributes {
          title
          description
          coverPicture {
            data {
              id
              attributes {
                url
              }
            }
          }
          seo {
            metaDescription
            metaTitle
            metaImage {
              data {
                id
                attributes {
                  url
                }
              }
            }
            metaSocial {
              id
              description
            }
            metaRobots
            keywords
            metaViewport
            canonicalURL
            titleMeta
            descriptionMeta
            focuskeyphrase
          }
        }
      }
    }
  }
`;

export const Portfolio_Detail_Page = gql`
  query Portfolios($filters: PortfolioFiltersInput) {
    portfolios(filters: $filters) {
      data {
        id
        attributes {
          playStore {
            data {
              id
              attributes {
                url
              }
            }
          }
          AppStore {
            data {
              id
              attributes {
                url
              }
            }
          }
          playStoreLink
          AppStoreLink
          title
          tags
          slug
          portfolio_category {
            data {
              id
              attributes {
                name
                description
                order
              }
            }
          }
          seo {
            metaDescription
            metaTitle
            metaImage {
              data {
                id
                attributes {
                  url
                }
              }
            }
            metaSocial {
              id
              description
            }
            metaRobots
            keywords
            metaViewport
            canonicalURL
            titleMeta
            descriptionMeta
            focuskeyphrase
          }
          description
          coverPicture {
            data {
              id
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;
export const Portfolio_Detail_Page_SEO = gql`
  query Portfolios($filters: PortfolioFiltersInput) {
    portfolios(filters: $filters) {
      data {
        attributes {
          seo {
            metaDescription
            metaTitle
            metaImage {
              data {
                id
                attributes {
                  url
                }
              }
            }
            metaSocial {
              id
              description
            }
            metaRobots
            keywords
            metaViewport
            canonicalURL
            titleMeta
            descriptionMeta
            focuskeyphrase
          }
          description
          coverPicture {
            data {
              id
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;