<template>
  <div class="content">
    chatAI
    <button class="submit-btn" @click="click()">发送</button>
  </div>
</template>

<script>
export default {
  methods: {
    click() {
      this.$axios.get('/hello')
          .then(response => {
            console.log(response.data);
          })
          .catch(error => {
            console.log(error);
          });
    },
  },
}
</script>


<style scoped>
  .submit-btn {
    width: 100px;
    height: 40px;
    background-color: #42b983;
    color: #df5000;
    font-size: 30px;
  }
</style>
