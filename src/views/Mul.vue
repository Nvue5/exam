<template>
  <div class="mul">
    <div class="jumbotron jumbotron-fluid p-1">
      <div class="container">
        <h1 class="display-3">在线考试平台</h1>
        <p class="lead">选择题</p>
      </div>
    </div>

    <div id="app" class="container">
      <div class="progress">
        <div
          class="progress-bar progress-bar-striped bg-warning"
          role="progressbar"
          :style="{ width: pwidth + '%' }"
        >
          完成的进度
        </div>
      </div>

      <div class="jumbotron">

        <div class="container" v-if="finished">
          <div class="row mt-2 pt-2">
            <h1 class="display-3">完成</h1>
          </div>
          <div class="row mt-2 pt-2" v-if="isScore">
            <h2 class="display-4">得分:{{ total }}</h2>
          </div>
          <!--正确答案与用户提交答案的对比-->
          <div class="row mt-2 pt-2" v-else>
            <div class="col-6">
              <button
                type="button"
                @click="up(true)"
                class="btn btn-danger btn-lg btn-block"
              >
                返回
              </button>
            </div>
            <div class="col-6">
              <button
                type="button"
                @click="score"
                class="btn btn-primary btn-lg btn-block"
              >
                提交
              </button>
            </div>
          </div>
        </div>

        <div class="container" v-else>
          <div>
               <h1 class="display-3">{{  muls[now].title }}</h1>
            <div v-if="muls[now].right.length > 1">
              <div class="row mt-2 pt-2">
                <p class="lead">多选题</p>
              </div>
              <hr class="my-2" />
              <!-- v-for="a in singles[now].ans" -->
              <div
                class="row mt-2 pt-2"
                v-for="(a, index) in muls[now].ans"
                :key="index"
              >
                <div class="form-check">
                  <label class="form-check-label">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      v-model="choose"
                      name="right"
                      :value="String(Object.keys(a))"
                    />
                    <span class="badge badge-pill badge-primary">{{
                      String(Object.keys(a))
                    }}</span>
                    {{ String(Object.values(a)) }}
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div class="row mt-2 pt-2">
            <div class="col-6">
              <button
                type="button"
                id="btn1"
                @click="up"
                :class="[
                  'btn',
                  'btn-danger',
                  'btn-lg',
                  'btn-block',
                  now === 0 ? 'disabled' : '',
                ]"
              >
                上一题
              </button>
            </div>
            <div class="col-6">
              <button
                type="button"
                id="btn2"
                disabled
                @click="next"
                class="btn btn-primary btn-lg btn-block"
              >
                下一题
              </button>
            </div>
          </div>
        </div>
      </div>




                       <!--得分表单-->
        <div class="col-12">
        <table  class="t" >
          <thead>
            <tr>
              <th>题号</th>
              <th>已选择的答案</th>
              <th>正确答案</th>
               <th>得分</th>

            </tr>
          </thead>
          <tbody class="table" v-for="(item, index) in results" :key="index"
          >
            <tr   >
              <td scope="row">{{tihao[index]}}</td>
              <td>{{item[1]}}</td>
              <td>{{muls[index].right}}</td>
              <td>{{fshu[index]}}</td>
            </tr>
          </tbody>
          <div>总分：
            {{ total }} </div>
        </table>

         </div>




    </div>
  </div>
</template>



<script>
// @ is an alias to /src
import {mapState} from "vuex";
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  data() {
    return {
      title: "计算属性和样式",
    
      results: new Map(),
      choose: [],
      finished: false,
      isScore: false,
      total: 0,
      now: 0,
      fshu:[],
      f:0,
    tihao: []
    };
  },
  components: {
    HelloWorld,
  },
  watch: {
    //监听choose属性值变化
    choose: function (newval, oldval) {
      if (newval.length > 0) {
        $("#btn2").prop("disabled", false);
      } else {
        $("#btn2").prop("disabled", true);
      }
    },
    now: function (newval, oldval) {
      if (newval > 0) {
        console.log("btn1启用", newval);
        $("#btn1").prop("disabled", false);
      } else {
        $("#btn1").prop("disabled", true);
      }
    },
  },

  methods: {
    next() {
      //记录当前题的答案
      this.results.set(this.now, this.choose);
      console.log(this.results);
      this.now++;
      //已做过的题不清空选择
      if (this.results.get(this.now)) {
        this.choose = this.results.get(this.now);
      } else {
        this.choose = [];
      }

      if (this.now === 3) {
        this.finished = true;
      }
    },
    up(isEnd) {
      if (this.now === 0) {
        return;
      }
      if (isEnd) {
        this.finished = false;
      }
      this.now--;
      //获得前一题已选择的答案
      this.choose = this.results.get(this.now);
    },
    score() {
      let count = 0; //正确答案的个数
       let count1=0;  //全部答案的个数
      for (let entry of this.results) {
        if (this.muls[entry[0]].right.length === 1) {
          if (this.muls[entry[0]].right === entry[1]) {
         
             count++;
            count1++;
              this.tihao.push(count1);
            this.f+=100/this.muls.length;
                this.fshu.splice(count1,0, this.f);
            this.f=0;
          }else{
            count1++;
              this.tihao.push(count1);
             this.f=0;
             this.fshu.splice(count1,0, this.f);
           
          }

        } else {
          if (this.muls[entry[0]].right.join("") === entry[1].sort().join("")) {
            count++;
            count1++;  
            this.tihao.push(count1);
             this.f+=100/this.muls.length;
          this.fshu.splice(count1,0, this.f);
            this.f=0;
          }
          else{
             count1++;
              this.tihao.push(count1);
              this.f=0;
              this.fshu.splice(count1,0, this.f);

          }
        }
      }
      this.total = (count / this.muls.length) * 100;
      this.total = this.total.toFixed(2);
      this.isScore = true;
   
    },
  },
  computed: {
     ...mapState(["muls"]),
    pwidth() {
      return (this.now / this.muls.length) * 100;
    },
  },
};
</script>


<style>
.t{
   position: relative;
   left:330px;
   }

</style>