<template>
  <div id="all_tools">
    <header>
      <span class="title">管理常用工具</span>
      <div class="num" @click="$router.push({name:'ManageTool'})">
        <span>8</span>
        <i class="cubeic-arrow"></i>
      </div>
    </header>
    <div class="scroll-list-wrap" >
      <cube-scroll
          ref="scroll"
      >
        <ul class="tools_list">
          <li>
            <div >
              <img
                  src="https://axure-file.lanhuapp.com/1bd99c9f-823c-4505-a248-0fe8d210da20__6449922a3d74aa93822aa970d17b7a2f.svg"
                  alt="">
              <span>文化建设</span>
            </div>
            <span class="commonly tag" v-if="commonly">+ 添加常用</span>
            <span class="is-commonly tag" v-else>已添加常用</span>
          </li>
          <li>
            <div >
              <img
                  src="https://axure-file.lanhuapp.com/1bd99c9f-823c-4505-a248-0fe8d210da20__6449922a3d74aa93822aa970d17b7a2f.svg"
                  alt="">
              <span>文化建设</span>
            </div>
            <span class="commonly tag" v-if="commonly">+ 添加常用</span>
            <span class="is-commonly tag" v-else>已添加常用</span>
          </li>
          <li>
            <div >
              <img
                  src="https://axure-file.lanhuapp.com/1bd99c9f-823c-4505-a248-0fe8d210da20__6449922a3d74aa93822aa970d17b7a2f.svg"
                  alt="">
              <span>文化建设</span>
            </div>
            <span class="commonly tag" v-if="commonly">+ 添加常用</span>
            <span class="is-commonly tag" v-else>已添加常用</span>
          </li>
          <li>
            <div >
              <img
                  src="https://axure-file.lanhuapp.com/1bd99c9f-823c-4505-a248-0fe8d210da20__6449922a3d74aa93822aa970d17b7a2f.svg"
                  alt="">
              <span>文化建设</span>
            </div>
            <span class="commonly tag" v-if="commonly">+ 添加常用</span>
            <span class="is-commonly tag" v-else>已添加常用</span>
          </li>
          <li>
            <div >
              <img
                  src="https://axure-file.lanhuapp.com/1bd99c9f-823c-4505-a248-0fe8d210da20__6449922a3d74aa93822aa970d17b7a2f.svg"
                  alt="">
              <span>文化建设</span>
            </div>
            <span class="commonly tag" v-if="commonly">+ 添加常用</span>
            <span class="is-commonly tag" v-else>已添加常用</span>
          </li>
          <li>
            <div >
              <img
                  src="https://axure-file.lanhuapp.com/1bd99c9f-823c-4505-a248-0fe8d210da20__6449922a3d74aa93822aa970d17b7a2f.svg"
                  alt="">
              <span>文化建设</span>
            </div>
            <span class="commonly tag" v-if="commonly">+ 添加常用</span>
            <span class="is-commonly tag" v-else>已添加常用</span>
          </li>
          <li>
            <div >
              <img
                  src="https://axure-file.lanhuapp.com/1bd99c9f-823c-4505-a248-0fe8d210da20__6449922a3d74aa93822aa970d17b7a2f.svg"
                  alt="">
              <span>文化建设</span>
            </div>
            <span class="commonly tag" v-if="commonly">+ 添加常用</span>
            <span class="is-commonly tag" v-else>已添加常用</span>
          </li>
          <li>
            <div >
              <img
                  src="https://axure-file.lanhuapp.com/1bd99c9f-823c-4505-a248-0fe8d210da20__6449922a3d74aa93822aa970d17b7a2f.svg"
                  alt="">
              <span>文化建设</span>
            </div>
            <span class="commonly tag" v-if="commonly">+ 添加常用</span>
            <span class="is-commonly tag" v-else>已添加常用</span>
          </li>
          <li>
            <div >
              <img
                  src="https://axure-file.lanhuapp.com/1bd99c9f-823c-4505-a248-0fe8d210da20__6449922a3d74aa93822aa970d17b7a2f.svg"
                  alt="">
              <span>文化建设</span>
            </div>
            <span class="commonly tag" v-if="commonly">+ 添加常用</span>
            <span class="is-commonly tag" v-else>已添加常用</span>
          </li>
          <li>
            <div >
              <img
                  src="https://axure-file.lanhuapp.com/1bd99c9f-823c-4505-a248-0fe8d210da20__6449922a3d74aa93822aa970d17b7a2f.svg"
                  alt="">
              <span>文化建设</span>
            </div>
            <span class="commonly tag" v-if="commonly">+ 添加常用</span>
            <span class="is-commonly tag" v-else>已添加常用</span>
          </li>
          <li>
            <div >
              <img
                  src="https://axure-file.lanhuapp.com/1bd99c9f-823c-4505-a248-0fe8d210da20__6449922a3d74aa93822aa970d17b7a2f.svg"
                  alt="">
              <span>文化建设</span>
            </div>
            <span class="commonly tag" v-if="commonly">+ 添加常用</span>
            <span class="is-commonly tag" v-else>已添加常用</span>
          </li>
          <li>
            <div >
              <img
                  src="https://axure-file.lanhuapp.com/1bd99c9f-823c-4505-a248-0fe8d210da20__6449922a3d74aa93822aa970d17b7a2f.svg"
                  alt="">
              <span>文化建设</span>
            </div>
            <span class="commonly tag" v-if="commonly">+ 添加常用</span>
            <span class="is-commonly tag" v-else>已添加常用</span>
          </li>
          <li>
            <div >
              <img
                  src="https://axure-file.lanhuapp.com/1bd99c9f-823c-4505-a248-0fe8d210da20__6449922a3d74aa93822aa970d17b7a2f.svg"
                  alt="">
              <span>文化建设</span>
            </div>
            <span class="commonly tag" v-if="commonly">+ 添加常用</span>
            <span class="is-commonly tag" v-else>已添加常用</span>
          </li>
          <li>
            <div >
              <img
                  src="https://axure-file.lanhuapp.com/1bd99c9f-823c-4505-a248-0fe8d210da20__6449922a3d74aa93822aa970d17b7a2f.svg"
                  alt="">
              <span>文化建设</span>
            </div>
            <span class="commonly tag" v-if="commonly">+ 添加常用</span>
            <span class="is-commonly tag" v-else>已添加常用</span>
          </li>
          <li>
            <div >
              <img
                  src="https://axure-file.lanhuapp.com/1bd99c9f-823c-4505-a248-0fe8d210da20__6449922a3d74aa93822aa970d17b7a2f.svg"
                  alt="">
              <span>文化建设</span>
            </div>
            <span class="commonly tag" v-if="commonly">+ 添加常用</span>
            <span class="is-commonly tag" v-else>已添加常用</span>
          </li>
          <li>
            <div >
              <img
                  src="https://axure-file.lanhuapp.com/1bd99c9f-823c-4505-a248-0fe8d210da20__6449922a3d74aa93822aa970d17b7a2f.svg"
                  alt="">
              <span>文化建设</span>
            </div>
            <span class="commonly tag" v-if="commonly">+ 添加常用</span>
            <span class="is-commonly tag" v-else>已添加常用</span>
          </li>
        </ul>
      </cube-scroll>
    </div>

  </div>
</template>

<script>
export default {
  name: "AllTools",
  data(){
    return{
      commonly:true
    }
  }
}
</script>

<style scoped lang="stylus">
.scroll-list-wrap
  height calc(100% - 52px)
  border-radius: 5px
  transform: rotate(0deg) // fix 子元素超出边框圆角部分不隐藏的问题
  overflow: hidden
#all_tools
  background-color $my-bgc-color
  height $viewpoint-height
  header
    display flex
    justify-content: space-between;
    align-items center
    padding 5px 20px
    background-color: #fff;
    margin-bottom 20px
    .title
      font-size 14px
    .num
      display flex
      align-items center
      span
        display inline-block
        width 24px
        border-radius 10px
        padding 2px 7px
        background-color $custom-active-color
        color #fff
        font-size 14px
      i
        color $custom-gray
        margin-left 10px
  .tools_list
    background-color: #fff;
    li
      padding 10px 20px
      border-bottom 1px solid rgba($custom-border-color,.4)
      display flex
      justify-content: space-between;
      align-items center
      div
        display flex
        align-items center
        font-size 14px
        img
          margin-right 10px
      .tag
        font-size 12px
        color #fff
        padding 3px 8px
        border-radius 5px
        &.commonly
          background-color $custom-active-color
        &.is-commonly
          padding 3px 8px
          color $custom-gray
</style>