<template>
  <div class="Nav">
    <nav class="navbar navbar-expand-sm navbar-light bg-success">
            <a class="navbar-brand" href="#" style="color:white">在线测试</a>
            <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse"
                data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="collapsibleNavId" >
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0" >
                    <li class="nav-item active">
                        <a class="nav-link" href="#" style="color:white">首页 <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"  style="color:rgb(153, 212, 160)">单选题</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"  style="color:rgb(153, 212, 160)">多选题</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" style="color:rgb(153, 212, 160)" >模拟测试</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false"  style="color:rgb(153, 212, 160)">关于</a>
                        <div class="dropdown-menu" aria-labelledby="dropdownId">
                            <a class="dropdown-item" href="#">Action 1</a>
                            <a class="dropdown-item" href="#">Action 2</a>
                        </div>
                    </li>
                </ul>
                <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="text" placeholder="搜索题目、用户">
                    <button class="btn btn-outline-danger my-2 my-sm-0" type="submit">搜索</button>

                </form>
            </div>
        </nav>
  </div>
</template>