import gql from "graphql-tag";

export const getAllProjects = gql`
query getAllProjects($filter: String!) {
  allProject(where: { project_type: { eq: $filter } }) {
    _id
    title
    slug
    link
    short_descriptionRaw
    alt_text
    thumbnail {
      asset {
        url
      }
    }
  }
}
`

export const getProject = gql`
  query getProject($slug: String!) {
    allProject(where: { slug: { eq: $slug } }) {
      title
      _id
      long_descriptionRaw
      image {
        asset {
          url
        }
      }
    }
  }
`