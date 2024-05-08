import { gql } from "@apollo/client";

export const BLOG_LIST = gql`
  query ($pagination: PaginationArg) {
    blogs(pagination: $pagination) {
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
          slug
          picture {
            data {
              id
              attributes {
                url
                previewUrl
              }
            }
          }
          description
          tags
          seo {
            metaTitle
            metaDescription
          }
        }
      }
      meta {
        pagination {
          total
        }
      }
    }
  }
`;

export const BLOG_DETAILS = gql`
  query Query($filters: BlogFiltersInput) {
    blogs(filters: $filters) {
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
          order
          slug
          publishedDate
          picture {
            data {
              id
              attributes {
                url
                previewUrl
              }
            }
          }
          description
          tags
          
        }
      }
    }
  }
`;

export const BLOG_DETAILS_SEO = gql`
  query Query($filters: BlogFiltersInput) {
    blogs(filters: $filters) {
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
        }
      }
    }
  }
`;
export const POPULAR_BLOG = gql`
  query {
    blogs(filters: { isPopular: { eq: true } }) {
      data {
        id
        attributes {
          slug
          picture {
            data {
              id
              attributes {
                url
              }
            }
          }
          title
          publishedDate
          user {
            data {
              id
              attributes {
                username
              }
            }
          }
        }
      }
    }
  }
`;
export const PREV_BLOG = gql`
  query Blogs($filters: BlogFiltersInput, $pagination: PaginationArg) {
    blogs(filters: $filters, pagination: $pagination) {
      data {
        id
        attributes {
          isPopular
          order
          slug
          tags
          title
          seo {
            metaDescription
            keywords
            focuskeyphrase
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

export const NEXT_BLOG = gql`
  query Blogs($filters: BlogFiltersInput, $pagination: PaginationArg) {
    blogs(filters: $filters, pagination: $pagination) {
      data {
        id
        attributes {
          isPopular
          order
          slug
          tags
          title
          seo {
            metaDescription
            keywords
            focuskeyphrase
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

export const SEARCH_BLOG = gql`
  query Blogs($filters: BlogFiltersInput, $pagination: PaginationArg, $sort: [String]) {
    blogs(filters: $filters, pagination: $pagination, sort: $sort) {
      data {
        id
        attributes {
          picture {
            data {
              id
              attributes {
                url
              }
            }
          }
          order
          publishedDate
          title
          description
          slug
          tags
        }
      }
      meta {
        pagination {
          total
        }
      }
    }
  }
`;

export const BlogPage_SEO = gql`
  query {
    blogPage {
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
