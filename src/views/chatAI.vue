<template>
  <div class="content">
    <div class="content-left">
      <div class="top-btn-box">
        <div class="add-btn" @click="showModal()">+</div>
        <el-button type="primary" @click="showModal">
          Open Modal with async logic
        </el-button>
        <el-dialog
            :visible.sync="open"
            :title="'Title'"
            :before-close="handleCancel"
        >
          <p>{{ modalText }}</p>
          <span slot="footer" class="dialog-footer">
            <el-button @click="handleCancel">Cancel</el-button>
            <el-button type="primary" :loading="confirmLoading" @click="handleOk">
              Confirm
            </el-button>
          </span>
        </el-dialog>
        <div class="expand-btn">&lt;&gt;</div>
      </div>
      <div class="chat-title-box">
        <div class="chat-title">会话</div>
        <div class="chat-title-list f-col" v-for="(value,index) in QuestionList" :key="index">
          <div class="chat-title-item">
            <span class="iconfont icon-shouye"></span>
            <span class="chat-title-text">{{ value.title }}</span>
            <span class="chat-title-tools">
              <span class="iconfont icon-tianxie p-r-10"></span>
              <span class="iconfont icon-shanchu"></span>
            </span>
          </div>
        </div>
      </div>
      <div class="chat-user-box f-r">
        <div class="chat-user-img"></div>
        <div class="chat-user-name">小白菜</div>
        <div class="iconfont icon-zhuti chat-user-tools"></div>
      </div>
    </div>
    <div class="content-right">
      <div class="chat-header">
        <div class="f-r">
          <div class="iconfont icon-talk-s chat-icon"></div>
          <div class="chat-header-title">ChatAI</div>
        </div>
        <div class="f-r">
          <div class="version">
            <a-select default-value="chat-3.5" style="width: 120px" @change="handleChange">
              <a-select-option value="gpt-3.5-turbo">
                chat-3.5
              </a-select-option>
              <a-select-option value="gpt-4">
                chat-4.0
              </a-select-option>
            </a-select>
          </div>
          <div class="iconfont icon-shezhi setting-icon"></div>
        </div>
      </div>
      <div class="chat-container">
        <div class="chat-dialog-box" v-for="(item,index) in dialogData" :key="index">
          <div class="chat-request-box f-r">
            <div class="chat-user-img"></div>
            <div class="chat-request-text" v-html="item.request"></div>
          </div>
          <div class="chat-answer-box f-r">
            <div class="chat-ai-img"></div>
            <div class="chat-request-text" v-html="item.answer"></div>
          </div>
        </div>
      </div>
<!--      对话输入框-->
      <div class="chat-input">
<!--        刷新按钮-->
        <div class="refresh-btn-box">
          <div class="iconfont icon-shuaxin refresh-icon"></div>
        </div>
        <div class="clear-btn" @click="clearClick()">清空</div>
        <div class="chat-input-box">
          <textarea placeholder="请输入文本内容"
                    type="text"
                    class="chat-input-text"
                    v-model="requestText"
                    @input="autoGrow"
                    @keydown.enter.prevent="submitClick"
                    ref="myTextarea"
          ></textarea>
          <div class="iconfont icon-jiantouyou submit-btn" @click="submitClick()"></div>
        </div>
      </div>
    </div>
<!--    弹窗-->
    <add-title-pop-up ref="addTitlePopUp"></add-title-pop-up>
  </div>
</template>

<script>
import addTitlePopUp from "@/components/PopUpWindows/addTitlePopUp";
import AddTitlePopUp from "@/components/PopUpWindows/addTitlePopUp";
export default {
  components: {AddTitlePopUp},
  data() {
    return {
      open: false,
      confirmLoading: false,
      modalText: 'Content of the modal',

      requestText: '',
      contextArray: [],
      OPENAI_API_KEY: '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',
      dialogData: JSON.parse(localStorage.getItem('dialogData')) || [],
      // dialogData: [
      //   {
      //     request: '你好！',
      //     answer: '你也好呀'
      //   },
      // ],
      QuestionList: [
        {title:'小红书'},
        {title:'小白书'},
      ],
    }
  },
  computed: {
    addTitlePopUp,
  },
  methods: {
    showModal() {
      this.open = true;
    },
    handleOk() {
      this.modalText = 'The modal will be closed after two seconds';
      this.confirmLoading = true;
      setTimeout(() => {
        this.open = false;
        this.confirmLoading = false;
      }, 2000);
    },
    handleCancel() {
      console.log('Clicked cancel button');
      this.open = false;
    },

    handleChange(value) {
      console.log(`selected ${value}`);
    },
    addClick(record) {
      this.$refs.addTitlePopUp.show(record)
    },
    clearClick() {

    },
    submitClick() {
      console.log('Before request, dialogData:', this.dialogData);
      // 获取最后6条对话记录
      let recentDialogs = this.dialogData.slice(-6);

      // 创建一个新的数组，包含过去的对话和当前的请求
      let messages = recentDialogs.map(dialog => {
        return [
          {role: 'user', content: dialog.request},
          {role: 'assistant', content: dialog.answer}
        ];
      }).flat();

      // 添加当前的请求
      messages.push({role: 'user', content: this.requestText});

      // 发送POST请求
      this.$axios.post('https://api.openai.com/v1/chat/completions', {
        model: 'gpt-3.5-turbo',
        messages: messages,
        temperature: 0.7
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.OPENAI_API_KEY
        }
      }).then(response => {
        console.log(response.data);
        console.log('返回的值是：',response.data.choices[0].message.content)
        // Convert GPT-3's output from Markdown to HTML
        let text = response.data.choices[0].message.content;

        // 将请求和答案一起推入dialogData
        this.dialogData.push({
          request: this.requestText,
          answer: text
        });

        console.log('dialogData=',this.dialogData)

        // 清空输入框
        this.requestText = '';
      }).catch(error => {
        console.log(error);
      });
      // 在对话记录被更新之后，将其存储到LocalStorage
      localStorage.setItem('dialogData', JSON.stringify(this.dialogData));
    },
    // 自动增加对话框高度
    autoGrow() {
      this.$refs.myTextarea.style.height = 'auto';
      this.$refs.myTextarea.style.height = (this.$refs.myTextarea.scrollHeight) + 'px';
    }

  },
  mounted() {
    this.autoGrow();
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
  background-color: #FFFFFF;
  width: 15%;
  height: 100%;
  box-shadow: 0px 3px 6px gray;
  z-index: 9999;
}
.top-btn-box {
  width: 100%;
  height: 10%;
  padding: 0 5%;
  color: #FFFFFF;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  .add-btn {
    background-color: #3500E0;
    width: 50px;
    height: 50px;
    line-height: 50px;
    font-size: 2rem;
    text-align: center;
    border-radius: 0 15px 15px 15px;
    cursor: pointer;
  }
  .expand-btn {
    background-color: #D75151;
    width: 40px;
    height: 40px;
    line-height: 40px;
    font-size: 1.3rem;
    text-align: center;
    border-radius: 5px;
    cursor: pointer;
  }
}
.chat-title-box {
  width: 100%;
  height: 80%;
  .chat-title {
    padding-left: 5%;
    padding-bottom: 5%;
    color: #333333;
    font-size: 1.4rem;
    font-weight: bold;
  }
  .chat-title-list {
    width: 100%;
  }
  .chat-title-item {
    background-color: #FFFFFF;
    width: 100%;
    height: 60px;
    padding: 0 5%;
    border-left: 4px solid #3500E0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    .chat-title-text {
      width: 70%;
    }
    .chat-title-tools {
      width: 20%;
      text-align: right;
    }
  }
  .chat-title-item:hover {
    background-color: rgba(172,214,231,0.2);
    cursor: pointer;
  }
}
.chat-user-box {
  width: 100%;
  height: 10%;
  padding: 0 5%;
  background-color: rgba(172,214,231,0.2);
  .chat-user-img {
    margin-right: 10px;
    width: 40px;
    height: 40px;
    background-color: #3500E0;
    border-radius: 5px;
  }
  .chat-user-name {
    width: 70%;
  }
  .chat-user-tools {
    color: #D75151;
    font-size: 1.4rem;
  }
}
/*右侧----------------start*/
.content-right {
  background-color: #42b983;
  width: 85%;
  height: 100%;
}
.chat-header {
  width: 100%;
  height: 8%;
  padding: 0 2%;
  background-color: #FFFFFF;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 3px 6px gray;
  border-bottom: 1px solid gray;
  z-index: 999;
  .chat-icon {
    font-size: 2.4rem;
    color: #3500E0;
  }
  .chat-header-title {
    font-size: 2.4rem;
    color: #333333;
  }
  .setting-icon {
    margin-left: 10px;
    font-size: 2rem;
    color: #D75151;
  }
}
.chat-container {
  background-color: #FFFFFF;
  width: 100%;
  height: 82%;
  overflow: auto;
  z-index: 1;
  .chat-request-box {
    width: 100%;
    height: 10%;
    padding: 10px 5%;
    .chat-user-img {
      margin-right: 10px;
      background-color: #BDDBF3;
      width: 40px;
      height: 40px;
      border-radius: 5px;
    }
  }
  .chat-answer-box {
    width: 100%;
    height: 10%;
    padding: 10px 5%;
    background-color: rgba(172,214,231,0.4);
    .chat-ai-img {
      margin-right: 10px;
      background-color: #FFFFFF;
      width: 40px;
      height: 40px;
      border-radius: 5px;
    }
  }
  .chat-request-text {
    font-size: 1rem;
    color: #333333;
  }
}
.refresh-btn-box {
  position: absolute;
  top: -50px;
  right: 80px;
  width: 40px;
  height: 40px;
  background-color: #3500E0;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.refresh-icon {
  color: #FFFFFF;
  font-size: 1.4rem;
  transform: rotate(30deg);
}
.chat-input {
  position: relative;
  background-color: #FFFFFF;
  width: 100%;
  min-height: 10%;
  padding: 0 5%;
  z-index: 1000;
}
.chat-input-box {
  width: 100%;
  border: 1px solid #CBCBCB;
  box-shadow: 0px 3px 6px gray;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  .chat-input-text {
    flex: 1;
    min-height: 30px;
    overflow: hidden;
    border: none;
    background: transparent;
    padding: 18px;
    resize: none;
    font-size: 1.2rem;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }
  .chat-input-text:focus {
    outline: none;
  }
  .submit-btn {
    margin: 0 20px;
    width: 30px;
    height: 30px;
    background-color: #D75151;
    border-radius: 50%;
    color: #FFFFFF;
    font-size: 1.2rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  .submit-btn:hover {
    background-color: #702020;
  }
}

</style>
