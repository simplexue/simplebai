<template>
  <div class="content">
    chatAI
    <div class="content-left"></div>
    <div class="content-right">
      <div class="chat-header">
        <div class="f-r">
          <div class="chat-icon">i</div>
          <div class="chat-title">ChatAI</div>
        </div>
        <div class="f-r">
          <div class="version">Chat3.5</div>
          <div class="setting">设置</div>
        </div>
      </div>
      <div class="chat-container">
        <div class="chat-request-box f-r">
          <div class="userimg">用户</div>
          <div class="chat-request-text">今天天气好吗？新的一天，希望你能够鼓励我！</div>
        </div>
        <div class="chat-answer-box f-r">
          <div class="userimg">用户</div>
          <div class="chat-request-text">很高兴回答您的问题！今天的天气很好，希望您在新的一天能够有新的收获！</div>
        </div>
      </div>
      <div class="chat-input">
        <div class="chat-input-box">
          <textarea placeholder="请输入文本内容" type="text"></textarea>
          <button class="submit-btn" @click="click()">发送</button>
        </div>
      </div>


    </div>

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


<style lang="less" scoped>
.content {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
}
.content-left {
  background-color: #df5000;
  width: 30%;
  height: 100%;
}
.content-right {
  background-color: #42b983;
  width: 70%;
  height: 100%;
}
.chat-header {
  width: 100%;
  height: 10%;
  background-color: #9a6e3a;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.chat-container {
  background-color: #0086b3;
  width: 100%;
  height: 80%;
  overflow: auto;
}
.chat-input {
  background-color: #FFFFFF;
  width: 100%;
  height: 10%;
}
.chat-input-box {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  .submit-btn {
    width: 100px;
    height: 40px;
    background-color: @chat-red-color;
    color: #FFFFFF;
    font-size: 30px;
  }
}

</style>
