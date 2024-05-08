import { gql } from "@apollo/client";

export const LIFE_AT_GSOFT = gql`
  query {
    lifeAtGsofts {
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
          title
          description
          images {
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

export const Life_at_gsoft_Page_SEO = gql`
  query {
    lifeAtGSoft {
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
