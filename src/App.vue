<template>
  <div id="app">
   

   <nav class="navbar navbar-expand-sm navbar-light bg-success">
            <a class="navbar-brand" href="/" style="color:white">首页</a>
            <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse"
                data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="collapsibleNavId" >
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0" >
                 
                    <li class="nav-item">
                        <a class="nav-link" href="/single"  style="color:rgb(153, 212, 160)">单选题</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/mul"  style="color:rgb(153, 212, 160)">多选题</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/timu" style="color:rgb(153, 212, 160)" >综合考试</a>
                    </li>
                     <li class="nav-item">
                        <a class="nav-link" href="/about" style="color:rgb(153, 212, 160)" >统计成绩</a>
                    </li>
                   
                </ul>
                <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="text" placeholder="搜索题目、用户">
                    <button class="btn btn-outline-danger my-2 my-sm-0" type="submit">搜索</button>

                </form>
            </div>
        </nav>
    <MyList  />
   <div class="container">
    
      <router-view  name="header" />
     <router-view />
       <router-view  name="footer" />


   </div>
  </div>
</template>



<script>
import MyList from './components/MyList.vue'


export default {
   name: 'App',
  components: {
   MyList
  },
  data() {
    return {
      progress:10
      
    }
  },methods: {
     
  },
  
  
}
</script>
<style lang="css">

</style>