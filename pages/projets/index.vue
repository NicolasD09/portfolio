<template>
<div>

  <h1 class="text-6xl">Projets</h1>
  <ul>
    <li v-for="project in allProject" :key="project._id">
      {{ project.title }}
    </li>
  </ul>
</div>
</template>

<script>
import gql from "graphql-tag";
export default {
  name: "projets",
  apollo: {
    allProject: gql`
      query getAllProjects {
        allProject {
          _id
          title
        } 
      }
    `,
  },
};
</script>
<style>
</style>