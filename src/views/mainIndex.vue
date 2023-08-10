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
      </div>
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
    width: 100vw;
  }
.banner {
  width: 100vw;
  height: 50vh;
  background-color: #42b983;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.banner-text {
  text-align: center;
  .banner-title {
    color: #FFFFFF;
    font-size: 30px;
    font-weight: bold;
  }
  .banner-subtitle {
    margin-top: 15px;
    color: blue;
    font-size: 20px;
  }
}
</style>
