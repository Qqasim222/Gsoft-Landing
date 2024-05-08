import { gql } from "@apollo/client";

export const ABOUT_US = gql`
  query {
    about {
      data {
        id
        attributes {
          image1 {
            data {
              attributes {
                url
              }
            }
          }
          image2 {
            data {
              attributes {
                url
              }
            }
          }
          shortDescription
          longDescription
          totalClients
          ClientsNumber
          totalProjects
          projectsNumber
          totalHours
          hourOfSupport
          totalGsoftians
          talentedGsoftian
          ourVision
          ourMission
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

export const MEET_OUR_TEAM = gql`
  query {
    usersPermissionsUsers {
      data {
        id
        attributes {
          profilePicture {
            data {
              id
              attributes {
                url
              }
            }
          }
          username
          designation
          description
        }
      }
    }
  }
`;

export const About_SEO_Query = gql`
  query {
    about {
      data {
        id
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
        }
      }
    }
  }
`;
