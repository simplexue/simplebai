<template>
  <div class="header" :class="{ 'top-view': atTop, 'other-view': !atTop }">
    <div class="nav">
      <div class="nav-item">生活</div>
      <div class="nav-item">服务</div>
      <div class="nav-item">学习</div>
      <div class="nav-item" @click="toChat()">chat</div>
    </div>
    <div class="title">简单白-校园生活</div>
    <div class="auth-box">
      <div class="auth-btn" @click="toLogin()">登录</div>
      <div class="auth-btn" @click="toLogin()">注册</div>
    </div>
    <a-switch default-checked @change="onChange" />
  </div>
</template>

<script>
export default {
  name: 'TopHeader',
  data() {
    return {
      atTop: true,  // 初始假设用户在顶部
    };
  },
  methods: {
    checkScroll() {
      // 当滚动距离超过一定值时，改变atTop的值
      this.atTop = window.pageYOffset <= 0;
    },
    onChange(checked) {
      console.log(`a-switch to ${checked}`);
    },
    toLogin() {
      this.$router.push('/login')
    },
    toChat() {
      this.$router.push('/chatai')
    },
  },
  mounted() {
    window.addEventListener('scroll', this.checkScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.checkScroll);
  },
}
</script>

<style lang="less" scoped>
//.header-box {
//  height: 5rem;
//}
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  transition: transform .2s;
  height: 5rem;
  color: #FFFFFF;
  font-weight: bold;
  font-size: 1.167rem;
  transition: all 0.5s ease-in-out;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
}
.top-view {
  /* 顶部视角样式，比如背景色和文字颜色 */

}

.other-view {
  /* 非顶部视角样式，比如背景色和文字颜色 */
  background-color: #FFFFFF;
  //box-shadow:  9px 9px 24px #f7f7f7;
  color: #df5000;
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
