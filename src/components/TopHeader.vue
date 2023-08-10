<template>
  <div class="header-box">
    <div class="header">
      <div class="nav">
        <div class="nav-item">生活</div>
        <div class="nav-item">服务</div>
        <div class="nav-item">学习</div>
        <div class="nav-item">chat</div>
      </div>
      <div class="title">简单白-校园生活</div>
      <div class="auth-box">
        <div class="auth-btn" @click="toLogin()">登录</div>
        <div class="auth-btn" @click="toLogin()">注册</div>
      </div>
      <a-switch default-checked @change="onChange" />
    </div>
  </div>

</template>

<script>
export default {
  name: 'TopHeader',
  data() {
    return {};
  },
  methods: {
    onChange(checked) {
      console.log(`a-switch to ${checked}`);
    },
    toLogin() {
      this.$router.push('/login')
    }
  },
}
</script>

<style lang="less" scoped>
.header-box {
  height: 5rem;
}
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  transition: transform .2s;
  background-color: #FFFFFF;
  height: 5rem;
  border-bottom: 1px solid rgba(168,168,168,0.2);
  box-shadow:  9px 9px 24px #f7f7f7;
  font-size: 1.167rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
}
.nav {
  width: 30%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  .nav-item {
    width: 5vw;
    height: 5vh;
    line-height: 5vh;
    text-align: center;
  }
  .nav-item:hover {
    color: #42b983;
    cursor: pointer;
  }
}
.title {
  width: 30%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
}
/*登录注册*/
.auth-box {
  width: 11%;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.auth-btn {
  width: 100px;
  padding: 0.5vw;
  background-color: #FFFFFF;
  border-radius: 8px;
  color: black;
  text-align: center;
  transition: all 0.3s ease-in-out;
}
.auth-btn:hover {
  background-color: black;
  color: #FFFFFF;
}
</style>
