<template>
  <MainNavbar />
  <div class="practice">
    <div class="content">
      <!-- 讀取data 資料 -->
      <div class="app">
        <p>單價 : {{ price }}</p>
        <p>數量 : {{ quantity }}</p>
        <p>總金額 : {{ subtotal() }}</p>
        <!-- computed 不需要用小括號紀錄屬性 -->
        <p>總金額 : {{ subtotal1 }}</p>
      </div>

      <!-- v-bind 屬性綁定 v-model -->
      <div class="app" v-bind:id="aaa">
        <p>日幣 = 0.22 台幣</p>
        <p>美元 = 31.84 台幣</p>
        <!-- v-model 是綁定input的內容會跑到 vue 實體物件 -->
        <div>台幣 : <input type="text" v-model="twd" /></div>
        <div>日幣 : <input type="text" v-model="jpd" /></div>
        <div>美元 : <input type="text" v-model="usd" /></div>
        <p>{{ twd }}</p>
      </div>

      <div class="app">
        <!-- v-model radiobutton  v-model="picked" -->
        <div class="radio">
          <div class="radio1">
            <input type="radio" id="one" v-model="picked" value="男生" />
            <label for="one"></label>男生
          </div>

          <div class="radio2">
            <input type="radio" id="two" v-model="picked" value="女生" />
            <label for="two">女生</label>
          </div>
          <!-- 預設會跑出未選擇選項，選擇才會顯示value值 -->
          <p>{{ picked || "未選擇" }}</p>
        </div>

        <!-- v-mode checkbox  v-model="checkedNames" -->
        <div class="checkbox">
          <h3>誰會先結婚</h3>
          <input type="checkbox" id="n1" v-model="checkedNames" value="Mary" />
          <label for="n1">Mary</label>
          <input type="checkbox" id="n2" v-model="checkedNames" value="Lary" />
          <label for="n2">Lary</label>
          <input type="checkbox" id="n3" v-model="checkedNames" value="Jay" />
          <label for="n3">Jay</label>
          <input type="checkbox" id="n4" v-model="checkedNames" value="James" />
          <label for="n4">James</label>
          <p>check: {{ checkedNames }}</p>
        </div>

        <div class="checkbox1">
          <input type="checkbox" id="choose1" v-model="ischecked" value="" />
          <label for="choose1">status: {{ ischecked }}</label>
        </div>

        <!--下拉是選單 v-model -->
        <div class="select">
          <select v-model="choose">
            <!-- disabled 保證使用者不會送出此預設值 -->
            <option disabled value="">--請選擇--</option>
            <option value="台北市">台北市</option>
            <option value="新北市">新北市</option>
            <option value="桃園市">桃園市</option>
            <option value="新竹市">新竹市</option>
          </select>
          <!-- 預設會跑出未選擇選項，選擇才會顯示value值 -->
          <p>{{ choose || "未選擇" }}</p>
        </div>
      </div>
    </div>

    <div class="content">
      <!-- v-html 可以讀html的格式 -->
      <div class="app">
        <h style="color: red">v-text v-html</h>
        <div>{{ text }}</div>
        <div v-text="text"></div>
        <div v-html="text"></div>
      </div>

      <!--v-bind，v-for-->
      <div class="app">
        <!-- v-for="item in items :key="item -->
        <div class="text1">
          <div v-for="m in message" :key="m">{{ m }}</div>
        </div>
        <!-- v-bind 控制 css  .trim 忽略空格-->
        <!-- keydown enter 按下enter鍵會輸出得字母 -->
        <p>請輸入email :</p>
        <input
          type="text"
          v-model.trim="msg"
          v-bind:class="{ error: msg.length > 10 }"
          style="outline: none"
          @keydown.enter="addMessage"
        />
      </div>

      <div class="app">
        <p><input type="text" v-model.number="amount" /></p>
        <p>{{ count }}</p>
        <!-- event 前一定要加$符號 -->
        <!-- 事件綁定 v-on:事件名稱 = 運算式子 也可以寫成 @事件名稱 = 運算式子 -->
        <button v-on:click="plus(amount, $event)">plus</button>
        <button @click="minus()">minus</button>

        <!-- v-if , v-else , v-else-if -->
        <div class="if" v-if="count > 20">block a</div>
        <div class="else" v-else>block b</div>

        <!-- .stop = event.stopPropagation() 阻擋冒泡事件 -->
        <!-- click.stop click 點擊事件不會向外傳遞 -->
        <!-- event.preventDefault 阻擋元素預設行為 -->
        <div class="outer" @click="alert('outer')">
          <span>outer</span>
          <div class="inner" @click.stop="alert('inner')">Inner</div>
        </div>
      </div>
    </div>

    <div class="content">
      <!-- v-for 將陣列的資料進行渲染-->
      <div class="app">
        <div v-for="item in items" :key="item">{{ item }}</div>
        <!-- index 加入索引 -->
        <div v-for="(item, index) in items" :key="item">
          {{ index }}:{{ item }}
        </div>
        <div v-for="page in 3" :key="page">
          <a href>{{ page }}</a>
        </div>
        <div v-for="i in eventNumber" :key="i">{{ i }}</div>
      </div>

      <div class="app">
        <div>從props 來的 parentMsg {{ parentMsg }}</div>
        <div>自己的msg {{ msg1 }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.practice {
  /* 並排 */
  display: inline-block;
}
.content {
  /* 往右排 */
  display: flex;
}
.app {
  width: 300px;
  height: 250px;
  margin-top: 20px;
  margin-left: 30px;
  padding: 5px;
  border: solid 2px black;
}
.error {
  color: red;
  border: red solid 2px;
}

p {
  font-size: 20px;
}
</style>

<script>
import MainNavbar from "@/components/navBar.vue";

export default {
  components: {
    MainNavbar,
  },

  data() {
    return {
      price: 100,
      quantity: 200,
      twd: "",
      // 預設選男生
      picked: "",
      checkedNames: [],
      ischecked: false,
      choose: "",
      text: "<h1>123<h1>",
      message: ["apple", "banana"],
      msg: "",
      count: 0,
      amount: 0,
      items: ["008", "js"],
      numbers: [2, 5, 2, 3, 4, 1, 4, 10, 6],
      msg1: "chiid node ",
    };
  },

  // methods 屬性
  methods: {
    subtotal: function () {
      return this.quantity * this.price;
    },
    plus(amount) {
      this.count += amount;
    },
    minus() {
      this.count--;
    },
    addMessage() {
      // 用push 將資料推進
      this.message.push(this.msg);
      this.msg = "";
      // // 等畫面更新過後再擊時抓取元素屬性
      // const el = this.$el.querySelector(".text1");
      // el.scrollTop = el.scrollHeight;
    },
  },

  // computed 計算屬性 無法用參數 methods 可以
  // 有this 的地方確保不要用 arrow function，因為箭頭函數沒有它們自己的 this ， 會導致computed 出錯
  computed: {
    subtotal1: function () {
      return this.quantity * this.price;
    },
    jpd: {
      // 先get取得值
      // toFixed(3) 小數點三位
      get() {
        return Number.parseFloat(Number(this.twd) / 0.22).toFixed(3);
      },
      // 在jpd更新的時候透過set改寫twd數值變回原位
      // 沒有set 不允許改變對應的computed 屬姓
      set(val) {
        this.twd = Number.parseFloat(Number(val) * 0.22).toFixed(3);
      },
    },
    usd: {
      get() {
        return Number.parseFloat(Number(this.twd) / 31.84).toFixed(3);
      },
      set(val) {
        this.twd = Number.parseFloat(Number(val) * 31.84).toFixed(3);
      },
    },
    eventNumber() {
      return this.numbers.filter((number) => number % 2 === 0);
    },
  },

  props: ["parentMsg"],
};
</script>
