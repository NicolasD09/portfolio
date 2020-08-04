<template>
  <div>
    <p>Param : {{ $route.params.slug }}</p>
    <div v-if="!this.$apollo.queries.allProject.loading">
      <p>{{allProject}}</p>
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";

export default {
  apollo: {
    allProject: {
      query: gql`
        query getProject($slug: String!) {
          allProject(where: { slug: { eq: $slug } }) {
            title
            _id
            long_description
            image {
              asset {
                url
              }
            }
          }
        }
      `,
      variables() {
        return {
          slug: this.slug
        }
      },
    },
  },
  computed: {
    slug: function () {
      return this.$route.params.slug;
    },
  },
};
</script>

<style>
</style>