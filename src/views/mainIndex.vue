<template>
  <div class="content">
    <top-header></top-header>
    <div class="banner">
      <div class="banner-text">
        <p class="banner-title">简单白-校园生活</p>
        <p class="banner-subtitle">包括衣食住行，从你踏入校园的那一刻，我们就是您的校园管理专家</p>
      </div>
      <div class="search">
        <input placeholder="今天需要什么呢？" type="text"/>
        <span class="iconfont icon-sousuo search-icon"></span>
      </div>
    </div>
    <div class="container">
      <div class="item">游戏</div>
      <div class="item">游戏</div>
      <div class="item">游戏</div>
      <div class="item">游戏</div>
      <div class="item">游戏</div>
      <div class="item">游戏</div>
      <div class="item">游戏</div>
      <div class="item">游戏</div>
      <div class="item">游戏</div>
    </div>
  </div>
</template>

<script>
import TopHeader from "@/components/TopHeader";
export default {
  name: 'mainIndex',
  components: {
    TopHeader
  },
  methods: {
    onSearch(value) {
      console.log(value);
    },
  },
}
</script>
<style lang="less" scoped>
  .content {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
.banner {
  width: 100%;
  height: 60vh;
  background:
      linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.43)),
      url("~@/assets/banner.jpg") center bottom no-repeat;
  background-size: 100% auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.banner-text {
  text-align: center;
  .banner-title {
    color: #FDB49E;
    font-size: 30px;
    font-weight: bold;
  }
  .banner-subtitle {
    margin-top: 15px;
    color: #FDB49E;
    font-size: 20px;
  }
}
.search {
  width: 40%;
  height: 10%;
  background-color: #FFFFFF;
  border-radius: 2vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  input {
    flex: 1;
    margin-left: 3%;
    height: 90%;
    font-size: 1rem;
    border: none;
  }
  input:focus {
    outline: none;
  }
  .search-icon {
    margin-right: 3%;
    font-size: 2rem;
  }
  .search-icon:hover {
    color: #42b983;
    cursor: pointer;
  }
}
/*内容部分*/
.container {
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  .item {
    background-color: pink;
    width: 30%;
    height: 40vh;
  }
}
</style>
