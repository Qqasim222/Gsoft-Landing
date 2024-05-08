import { gql } from "@apollo/client";

export const ESTIMATE_YOUR_PROJECT = gql`
  mutation CreateEstimateYourProject($data: EstimateYourProjectInput!) {
    createEstimateYourProject(data: $data) {
      data {
        id
        attributes {
          companyName
          description
          email
          image {
            data {
              id
              attributes {
                url
              }
            }
          }
          name
          phoneNo
          priority
          projectStatus
          projectType
          selectYourRegion
        }
      }
    }
  }
`;
export const UPLOAD_FILE = gql`
  mutation fileUpload($file: [Upload]!) {
    fileUpload(file: $file) {
      url
    }
  }
`;
export const ESTIMATE_YOUR_PROJECT_SEO = gql`
  query {
    estimateYourProjectPage {
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
