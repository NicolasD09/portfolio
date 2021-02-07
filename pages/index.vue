<template>
  <div class="wrapper">
    <h1>The new version is coming soon ⏲</h1>
    <p>nicdx.dev@gmail.com</p>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.wrapper{
  background: rgb(1, 13, 34);
  display: flex;
  flex-direction: column;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  color: white;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 15px;
}

h1{
  font-size: calc(24px + (36 - 24) * ((100vw - 300px) / (1600 - 300)));
  margin-bottom: 30px;
}
p{
  font-size: calc(16px + (24 - 16) * ((100vw - 300px) / (1600 - 300)));
}

</style>