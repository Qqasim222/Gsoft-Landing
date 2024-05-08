import { gql } from "@apollo/client";

export const CAREER_JOBS = gql`
  query {
    careerJobs {
      data {
        id
        attributes {
          slug
          title
          description
        }
      }
    }
  }
`;
export const SEARCH_JOBS = gql`
  query Query($filters: CareerJobFiltersInput) {
    careerJobs(filters: $filters) {
      data {
        id
        attributes {
          slug
          title
          description
          openingDate
          closeingDate
          experience
          city
        }
      }
    }
  }
`;

export const GET_CAREER_JOBS = gql`
  query Query($filters: CareerJobFiltersInput) {
    careerJobs(filters: $filters) {
      data {
        id
        attributes {
          slug
          title
          description
          openingDate
          closeingDate
          experience
          city
        }
      }
    }
  }
`;

export const BENEFITS_CAREER_JOBS = gql`
  query Query($pagination: PaginationArg) {
    benefitsOfCareers(pagination: $pagination) {
      data {
        id
        attributes {
          title
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

export const APPLY_JOB = gql`
  mutation Mutation($data: ApplyForJobInput!) {
    createApplyForJob(data: $data) {
      data {
        id
        attributes {
          name
          email
          phoneNo
          coverLetter
          CV {
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

export const GETTING_STEPS_CAREER_JOBS = gql`
  query {
    stepsOfCareerJob {
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
          coverPicture2 {
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
              }
            }
          }
        }
      }
    }
  }
`;

export const CareerJobs_SEO = gql`
  query {
    careerJobPage {
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
