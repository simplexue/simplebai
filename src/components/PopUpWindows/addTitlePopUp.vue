<template>
  <div class="modal" v-if="visible">
    <div class="content">
      <div class="header">
        <span>{{ title }}</span>
        <span class="iconfont icon-guanbi"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "addTitlePopUp",
  data(){
    return {
      title: '',
      visible: false,
    }
  },
  methods: {
    show (record) {
      this.visible=true;
      this.title=record.title;
    },
  },
}
</script>

<style scoped>
.header {
  height: 40px;
  width: 100%;
  color: #3500E0;
  border-bottom: 1px solid black;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
}
</style>
