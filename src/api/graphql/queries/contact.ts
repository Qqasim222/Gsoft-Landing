import { gql } from "@apollo/client";

export const Contact_Page_SEO = gql`
  query {
    contactPageStatic {
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
export const ESTIMATE_PROJECT = gql`
  mutation Mutation($data: ContactPageInput!) {
    createContactPage(data: $data) {
      data {
        attributes {
          email
          message
          name
          phoneNo
        }
      }
    }
  }
`;
