<template>
  <div id="footer">
    <ul>
      <router-link
        tag="li"
        v-for="item in tabbars"
        :key="item.id"
        :to="item.path"
      >
        <i class="iconfont" v-html="item.icon"></i>
        <span>{{item.text}}</span>
      </router-link>
    </ul>

  </div>
</template>

<script>
  export default {
    name:"TabBar",
    data(){
      return{
        tabbars:[
          {
            id:0,
            text:"外卖",
            icon:"&#xe61e;",
            path:"/msite"
          },
          {
            id:1,
            text:"搜索",
            icon:"&#xe61d;",
            path:"/search"
          },
          {
            id:2,
            text:"订单",
            icon:"&#xe604;",
            path:"/order"
          },
          {
            id:3,
            text:"我的",
            icon:"&#xe61b;",
            path:"/profile"
          },
        ]
      }
    }

  }
</script>

<style>
  #footer{
    width: 100%;
    height: 50px;
    position:fixed;
    left: 0;
    bottom: 0;
    border-top: 1px solid red;
    background: #fff;

  }
  #footer ul{
    width: 100%;
    height: 100%;
    display:flex;
    justify-content: space-between;
    align-items: center;
  }
  #footer ul li {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  #footer ul li span{
    font-size: 13px;
    margin-top: 5px;


  }
  #footer ul li i{
    font-size: 20px;
  }
  #footer ul .router-link-active{
    color: red;
  }
</style>
