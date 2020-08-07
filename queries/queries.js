import gql from "graphql-tag";

const getAllProjects = gql`
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



export {getAllProjects}