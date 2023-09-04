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
      <a-row :gutter="10">
        <a-col :span="4">
          <div class="container-left f-col">
            <div class="container-left-item f-r-center">
              <span class="iconfont icon-shouye"></span>
              <span class="font-18">关注</span>
            </div>
            <div class="container-left-item f-r-center">
              <span class="iconfont icon-shouye"></span>
              <span class="font-18">综合</span>
            </div>
            <div class="container-left-item f-r-center">
              <span class="iconfont icon-shouye"></span>
              <span class="font-18">二手市场</span>
            </div>
            <div class="container-left-item f-r-center">
              <span class="iconfont icon-shouye"></span>
              <span class="font-18">校园跑腿</span>
            </div>
          </div>
        </a-col>
        <a-col :span="16">
          <div class="container-middle">
            <div class="container-middle-top">
              <a-textarea
                  placeholder="有什么新鲜事儿想分享给大家？"
                  :auto-size="{ minRows: 2, maxRows: 6 }"
              />
              <div class="shuoshuo-tools f-r-between">
                <div class="shuoshuo-icon f-r">
                  <span
                      class="iconfont icon-biaoqing"
                      @click="toggleEmojione"
                      v-click-outside="closeEmojione"
                  >表情</span>
                  <Picker set="emojione" v-if="showPicker" class="my-picker" />
                  <div @click="uploadImage">
                    <span class="iconfont icon-tupian"></span>图片
                    <input type="file" ref="fileInput" @change="handleFileUpload" multiple style="display: none" />
                  </div>
                  <span class="iconfont icon-shipinbofang">视频</span>
                  <span class="iconfont icon-huati">话题</span>
                </div>
                <a-button type="primary">发送</a-button>
              </div>
              <div class="load-img f-r" v-for="(url, index) in imageUrls" :key="index">
                <img :src="url" alt="Uploaded image" />
              </div>
            </div>
            <div class="container-middle-content">
              <a-tabs default-active-key="1" @change="callback">
                <a-tab-pane key="1" tab="推荐">
                  <div class="post-list f-r-between">
                    <div class="f-col">
                      <div class="post-title">雷军写的代码上热搜了！</div>
                      <p class="post-content">就在昨天，[雷军写的代码]相关话题先后上了一波热搜和热榜。出于好奇，第一时间点进...</p>
                      <div class="post-footer">
                        <span class="post-author">小白菜</span>
                        <span class="line-v"></span>
                        <span class="iconfont icon-shezhi">2.0w</span>
                        <span class="iconfont icon-shezhi">赞</span>
                      </div>
                    </div>
                    <div class="post-img"></div>
                  </div>
                </a-tab-pane>
                <a-tab-pane key="2" tab="最新" force-render>
                  最新
                </a-tab-pane>
              </a-tabs>
            </div>
          </div>

        </a-col>
        <a-col :span="4">
          <div class="container-right">
            <div class="user-box">
              <div class="f-r">
                <div class="user-img"></div>
                <span class="user-name">小白菜白又白</span>
                <span class="iconfont icon-shezhi"></span>
              </div>
              <div class="f-r">
                <div class="user-info-item">
                  <div class="user-info-num">3</div>
                  <div class="user-info-name">获赞</div>
                </div>
                <div class="user-info-item">
                  <div class="user-info-num">1</div>
                  <div class="user-info-name">粉丝</div>
                </div>
                <div class="user-info-item">
                  <div class="user-info-num">2</div>
                  <div class="user-info-name">关注</div>
                </div>
              </div>
            </div>
          </div>
        </a-col>
      </a-row>
    </div>
  </div>
</template>
<script>
import { Picker } from 'emoji-mart-vue'
import vClickOutside from 'v-click-outside'
import TopHeader from "@/components/TopHeader";
export default {
  name: 'mainIndex',
  directives: {
    clickOutside: vClickOutside.directive
  },
  data() {
    return {
      showPicker: false,
      imageUrls: []
    }
  },
  components: {
    Picker,
    TopHeader
  },
  methods: {
    onSearch(value) {
      console.log(value);
    },
    toggleEmojione() {
      this.showPicker = !this.showPicker;
    },
    closeEmojione() {
      this.showPicker = false;
    },
    callback(key) {
      console.log(key);
    },
    uploadImage() {
      this.$refs.fileInput.click();
    },
    handleFileUpload() {
      const files = this.$refs.fileInput.files;
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();
        reader.onload = e => {
          this.imageUrls.push(e.target.result);
        };
        reader.readAsDataURL(file);
      }
    }
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
  height: 80vh;
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
  width: 80%;
  .container-left {
    width: 100%;
    height: 400px;
    background-color: #FFFFFF;
    .container-left-item {
      padding: 2% 10%;
      width: 100%;
      height: 100px;
    }
    .container-left-item:hover {
      background-color: #0086b3;
    }
  }
  .container-middle {
    width: 100%;
    height: 600px;
    /*发说说*/
    .container-middle-top {
      padding: 5%;
      width: 100%;
      height: 150px;
      background-color: #FFFFFF;
      .shuoshuo-tools {
        .shuoshuo-icon {
          position: relative;
        }
        .shuoshuo-icon span{
          box-sizing: border-box;
          margin: 0 10px;
          width: 60px;
        }
        .shuoshuo-icon div:hover {
          border: 1px solid #0086b3;
          cursor: pointer;
        }
      }
      .my-picker {
        position: absolute;
        bottom: 20px;
      }
      .load-img {
        width: 100%;
        & > img {
          width: 100px;
          height: 100px;
        }
      }
    }
    .container-middle-content {
      .post-list {
        padding: 2% 3%;
        width: 100%;
        height: 100px;
        background-color: #FFFFFF;
        .post-img {
          width: 90px;
          height: 90px;
          border-radius: 10px;
          background-color: grey;
        }
      }
    }
  }
}
</style>
