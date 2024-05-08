import { gql } from "@apollo/client";

export const TECHNOLOGIES_LIST = gql`
  query {
    technologies {
      data {
        id
        attributes {
          title
          technology_category {
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

export const SERVICES_LIST = gql`
  query Services($filters: ServiceFiltersInput) {
    services(filters: $filters) {
      data {
        id
        attributes {
          slug
          title
          description
          picture {
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

export const ASK_QUESTIONS = gql`
  query {
    frequentlyQuestion {
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
          buttonText
          questions {
            id
            question
            answer
          }
        }
      }
    }
  }
`;

export const SOCIAL_LINKS = gql`
  query {
    homePage {
      data {
        id
        attributes {
          facebook
          instagram
          twitter
          behance
          dribble
          linkedin
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
