<template>
  <div class="header">
    <div class="nav f-r">
      <div class="nav-item">生活</div>
      <div class="nav-item">服务</div>
      <div class="nav-item">学习</div>
      <div class="nav-item">chat</div>
    </div>
    <div class="title">简单白-校园生活</div>
    <div class="auth-box f-r">
      <div class="auth-btn">登录</div>
      <div class="auth-btn">注册</div>
    </div>
    <a-switch default-checked @change="onChange" />
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
  },
}
</script>

<style lang="less" scoped>
.header {
  background-color: #FFFFFF;
  height: 50px;
  border-bottom: 1px solid rgba(168,168,168,0.2);
  box-shadow:  9px 9px 24px #f7f7f7;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}
.nav {
  .nav-item {
    width: 100px;
    height: 40px;
    line-height: 40px;
    text-align: center;
  }
  .nav-item:hover {
    color: #42b983;
    cursor: pointer;
  }
}
.title {
  width: 50%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
}
/*登录注册*/
.auth-box {
  cursor: pointer;
}
.auth-btn {
  width: 100px;
  height: 30px;
  background-color: #FFFFFF;
  border-radius: 8px;
  color: black;
  text-align: center;
  transition: all 0.3s ease-in-out;
}
.auth-btn:hover {
  width: 100px;
  height: 30px;
  background-color: black;
  border-radius: 8px;
  color: #FFFFFF;
  text-align: center;
}
</style>
