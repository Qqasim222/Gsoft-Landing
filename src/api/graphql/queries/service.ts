import { gql } from "@apollo/client";

export const ALL_SERVICES = gql`
  query Services($filters: ServiceFiltersInput, $pagination: PaginationArg) {
    services(filters: $filters, pagination: $pagination) {
      data {
        id
        attributes {
          slug
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
          picture {
            data {
              id
              attributes {
                url
                previewUrl
              }
            }
          }

          serviceType {
            id
            title
            description
            picture {
              data {
                id
                attributes {
                  url
                  previewUrl
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_SERVICE = gql`
  query Query($filters: ServiceFiltersInput) {
    services(filters: $filters) {
      data {
        id
        attributes {
          slug
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
          picture {
            data {
              id
              attributes {
                url
                previewUrl
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
          serviceType {
            id
            title
            description
            point1
            point2
            point3
            point4
            picture {
              data {
                id
                attributes {
                  url
                  previewUrl
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const WHAT_WE_OFFER = gql`
  query {
    whatweoffer {
      data {
        id
        attributes {
          title
          description
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

export const WHAT_WE_PROVIDE = gql`
  query {
    serviceProvideSections {
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
        }
      }
    }
  }
`;

export const WHAY_CHOSE_US = gql`
  query {
    whychooseuses {
      data {
        id
        attributes {
          title
          description
          photo {
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

export const WORK_FLOWS = gql`
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

export const Service_Page_SEO = gql`
  query {
    servicePage {
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

export const Service_filtered = gql`
  query {
    serviceCategories(filters: { title: { eq: "Development" } }) {
      data {
        id
        attributes {
          title
          services {
            data {
              id
              attributes {
                title
              }
            }
          }
        }
      }
    }
  }
`;
