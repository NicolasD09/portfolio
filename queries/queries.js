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
`;

export const getProject = gql`
  query getProject($slug: String!) {
    allProject(where: { slug: { eq: $slug } }) {
      title
      _id
      alt_text
      link
      long_descriptionRaw
      technologies
      image {
        asset {
          url
        }
      }
    }
  }
`;
export const getExperiences = gql`
  query getExperience {
    allExperience(sort: [{ date_fin: DESC }]) {
      title
      _id
      date_debut
      date_fin
      job_type
      job_descriptionRaw
      duree
      city
      company
    }
  }
`;
