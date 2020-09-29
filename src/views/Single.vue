<template>
  <div class="single">
     <div class="jumbotron jumbotron-fluid p-1">
        <div class="container">
            <h1 class="display-3">在线考试平台</h1>
            <p class="lead">选择题</p>
        </div>
    </div>

    <div id="app" class="container">
         <div class="progress">
            <div class="progress-bar progress-bar-striped bg-warning" role="progressbar" :style="{'width': pwidth+'%'}">
                完成的进度</div>
        </div>

        <div class="jumbotron">
            <div class="container" v-if="finished">
                <div class="row mt-2 pt-2">
                    <h1 class="display-3">完成</h1>
                </div>
                <div class="row mt-2 pt-2" v-if="isScore">
                    <h2 class="display-4">得分:{{total}}</h2>
                </div>
                <!--正确答案与用户提交答案的对比-->
                <div class="row mt-2 pt-2" v-else>
                    <div class="col-6">
                        <button type="button" @click="up(true)" class=" btn  btn-danger btn-lg btn-block ">返回</button>
                    </div>
                    <div class="col-6">
                        <button type="button" @click="score" class="btn btn-primary btn-lg btn-block">提交</button>
                    </div>
                </div>
                
            </div>

            <div class="container"  v-else>
                
                <div >
                      <h1 class="display-3">{{  singles[now].title }}</h1>
                    <div class="row mt-2 pt-2">
                        <p class="lead">单选题</p>

                    </div>
                    <hr class="my-2">
                    <!-- v-for="a in singles[now].ans" -->
                    <div class="row mt-2 pt-2" 
                    v-for="(a, index) in singles[now].ans" :key="index"
                     >
                        <div class="form-check">
                            <label class="form-check-label">
                                <input type="radio" class="form-check-input" v-model="choose" name="right"
                                    :value="String(Object.keys(a))">
                                <span class="badge badge-pill badge-primary">{{String(Object.keys(a))}}</span>
                                {{String(Object.values(a))}}
                            </label>
                        </div>
                    </div>
                </div>
                <div class="row mt-2 pt-2">
                    <div class="col-6">
                        <button type="button" id="btn1" @click="up"
                            :class="['btn','btn-danger','btn-lg','btn-block',now===0?'disabled':'']">上一题</button>
                    </div>
                    <div class="col-6">
                        <button type="button" id="btn2" disabled @click="next"
                            class="btn btn-primary btn-lg btn-block">下一题</button>
                    </div>
                </div>
            </div>





        </div>


    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  data() {
    return {
      title:'计算属性和样式',
       singles:[{
        "title":"最长的河?",
        "ans":[
            {"A":"尼罗河"},
            {"B":"亚马逊河"},
            {"C":"长江"},
            {"D":"黄河"}
        ],
        "right":"B"
    },
    {
        "title":"市值最高的公司?",
        "ans":[
            {"A":"中国移动"},
            {"B":"阿里巴巴"},
            {"C":"可口可乐"},
            {"D":"苹果"}
        ],
        "right":"D"
    },
    {
        "title":"最流行的程序设计语言?",
        "ans":[
            {"A":"java"},
            {"B":"c"},
            {"C":"c++"},
            {"D":"php"}
        ],
        "right":"A"
    },
    {
        "title":"世界上最骚的人?",
        "ans":[
            {"A":"保加利亚妖王"},
            {"B":"美国妖王"},
            {"C":"中国妖王"},
            {"D":"印度阿三"}
        ],
        "right":"A"
    },
    {
        "title":"最好的学习网站?",
        "ans":[
            {"A":"bilibili"},
            {"B":"慕课网"},
            {"C":"学习通"},
            {"D":"淘宝"}
        ],
        "right":"A"
    }],
     
   
  
    results: new Map(),
   choose: [],
    finished: false,
    isScore: false,
    total: 0,
    now:0
    
    }
    
  },
  components: {
    HelloWorld
  }, watch: {
                //监听choose属性值变化
                choose: function (newval, oldval) {
                    if (newval.length > 0) {
                        $("#btn2").prop("disabled", false)
                    } else {
                        $("#btn2").prop("disabled", true)
                    }
                },
                now: function (newval, oldval) {
                    if (newval > 0) {
                        console.log("btn1启用", newval)
                        $("#btn1").prop('disabled', false);

                    } else {
                        $("#btn1").prop('disabled', true);
                    }
                }

            },

  
  
  methods: {
      next() {
                    //记录当前题的答案
                    this.results.set(this.now, this.choose);
                    console.log(this.results)
                    this.now++;
                    //已做过的题不清空选择
                    if (this.results.get(this.now)) {
                        this.choose = this.results.get(this.now);
                    } else {
                        this.choose = [];
                    }


                    if (this.now === 5) {
                        this.finished = true
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
                    this.choose = this.results.get(this.now)
                },
                score() {
                    let count = 0;
                    for (let entry of this.results) {
                        if (this.singles[entry[0]].right.length === 1) {
                            if (this.singles[entry[0]].right === entry[1]) {
                                count++
                            }
                        }else{
                            if(this.singles[entry[0]].right.join('')===entry[1].sort().join('')){
                                count++;
                            }                            
                        }

                    }
                    this.total = (count / this.singles.length) * 100
                    this.total = this.total.toFixed(2);
                    this.isScore = true;
                }
      
  },computed: {
        pwidth() {
                    return (this.now / this.singles.length) * 100
                }
    
  },


}
</script>
