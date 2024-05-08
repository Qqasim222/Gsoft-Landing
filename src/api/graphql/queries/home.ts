import { gql } from "@apollo/client";

export const HOME_CAROUSAL = gql`
  query {
    homeCarousels {
      data {
        id
        attributes {
          heading
          description
          buttonText
          coverPhoto {
            data {
              id
              attributes {
                url
                name
                formats
              }
            }
          }
        }
      }
    }
  }
`;

export const OUR_SERVICES = gql`
  query Services($filters: ServiceFiltersInput, $pagination: PaginationArg) {
    services(filters: $filters, pagination: $pagination) {
      data {
        id
        attributes {
          order
          title
          description
          slug
          picture {
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

export const ABOUT = gql`
  query {
    about {
      data {
        id
        attributes {
          longDescription
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

export const PORTFOLIO_LIST = gql`
  query Portfolios($filters: PortfolioFiltersInput) {
    portfolios(filters: $filters) {
      data {
        id
        attributes {
          title
          description
          tags
          slug
          coverPicture {
            data {
              id
              attributes {
                url
                name
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_TESTIMONIALS = gql`
  query {
    reviews {
      data {
        id
        attributes {
          rating
          review
          showOnHome
          user {
            data {
              id
              attributes {
                username
                firstName
                lastName
                designation
                description
                role {
                  data {
                    id
                    attributes {
                      name
                      type
                    }
                  }
                }
                profilePicture {
                  data {
                    id
                    attributes {
                      url
                      name
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_PROJECT_CATEGORIES = gql`
  query {
    portfolioCategories {
      data {
        id
        attributes {
          name
          order
          description
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
                title
              }
            }
          }
        }
      }
    }
  }
`;

export const WORK_FLOW = gql`
  query {
    workflows(sort: "id") {
      data {
        id
        attributes {
          title
          description
          logo {
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
