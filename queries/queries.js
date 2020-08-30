import gql from "graphql-tag";

export const getAllProjects = gql`
  query getAllProjects($filter: String!) {
    allProject(where: { project_type: { eq: $filter } }) {
      _id
      title {
        fr
        en
      }
      slug
      link
      short_description {
        fr
        en
      }
      long_description {
        fr
        en
      }
      alt_text {
        fr
        en
      }
      thumbnail {
        asset {
          url
        }
      }
    }
  }
`;

// $slug
export const getProject = gql`
  query getProject($slug: String!) {
    allProject(where: { slug: { eq: $slug } }) {
      title {
        fr
        en
      }
      _id
      alt_text {
        fr
        en
      }
      link
      long_description {
        fr
        en
      }
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
    allExperience(sort: [{ end_date: DESC }]) {
      title {
        fr
        en
      }
      job_description {
        fr
        en
      }
      start_date
      end_date
      time_span {
        fr
        en
      }
      job_type {
        fr
        en
      }
      city
      company
    }
  }
`;

export const getHomepage = gql`
  query getHomepage {
    allHomepage {
      title {
        fr
        en
      }
      tagline {
        fr
        en
      }
    }
  }
`;

export const getExperienceData = gql`
  query getExperienceData {
    allExperiencesPage {
      _id
      experience_title {
        fr
        en
      }
    }
  }
`;
