<template>
  <div id="all_tools">
    <NavLayOut
        bgc-color="#fff"
    >
      <header>
        <span class="title">管理常用工具</span>
        <div class="num" @click="$router.push({name:'ManageTool'})">
          <div>8</div>
          <i class="cubeic-arrow"></i>
        </div>
      </header>

      <ul class="tools_list">
        <li>
          <div>
            <Icon svg-name="two" class-name="svg"></Icon>
            <span>帮助中心</span>
          </div>
          <span class="commonly tag" v-if="commonly">
                <Icon svg-name="add" height="14" width="14" class-name="add"></Icon>
                添加常用
              </span>
          <span class="is-commonly tag" v-else>已添加常用</span>
        </li>
        <li>
          <div>
            <Icon svg-name="one" class-name="svg"></Icon>
            <span>文化建设</span>
          </div>
          <span class="commonly tag" v-if="commonly">
                <Icon svg-name="add" height="14" width="14" class-name="add"></Icon>
                添加常用
              </span> <span class="is-commonly tag" v-else>已添加常用</span>
        </li>
        <li>
          <div>
            <Icon svg-name="E-commerce" class-name="svg"></Icon>
            <span>电商采购</span>
          </div>
          <span class="commonly tag" v-if="commonly">
                <Icon svg-name="add" height="14" width="14" class-name="add"></Icon>
                添加常用
              </span> <span class="is-commonly tag" v-else>已添加常用</span>
        </li>
        <li>
          <div>
            <Icon svg-name="five" class-name="svg"></Icon>
            <span>访客预约</span>
          </div>
          <span class="commonly tag" v-if="commonly">
                <Icon svg-name="add" height="14" width="14" class-name="add"></Icon>
                添加常用
              </span> <span class="is-commonly tag" v-else>已添加常用</span>
        </li>
        <li>
          <div>
            <Icon svg-name="seven" class-name="svg"></Icon>
            <span>通讯录</span>
          </div>
          <span class="commonly tag" v-if="commonly">
                <Icon svg-name="add" height="14" width="14" class-name="add"></Icon>
                添加常用
              </span> <span class="is-commonly tag" v-else>已添加常用</span>
        </li>
        <li>
          <div>
            <Icon svg-name="three" class-name="svg"></Icon>
            <span>文化建设</span>
          </div>
          <span class="commonly tag" v-if="commonly">
                <Icon svg-name="add" height="14" width="14" class-name="add"></Icon>
                添加常用
              </span> <span class="is-commonly tag" v-else>已添加常用</span>
        </li>
        <li>
          <div>
            <Icon svg-name="QR" class-name="svg"></Icon>
            <span>员工信息报备</span>
          </div>
          <span class="commonly tag" v-if="commonly">
                <Icon svg-name="add" height="14" width="14" class-name="add"></Icon>
                添加常用
              </span> <span class="is-commonly tag" v-else>已添加常用</span>
        </li>
        <li>
          <div>
            <Icon svg-name="convenienceStore" class-name="svg"></Icon>
            <span>便利店</span>
          </div>
          <span class="commonly tag" v-if="commonly">
                <Icon svg-name="add" height="14" width="14" class-name="add"></Icon>
                添加常用
              </span> <span class="is-commonly tag" v-else>已添加常用</span>
        </li>
        <li>
          <div>
            <Icon svg-name="property" class-name="svg"></Icon>
            <span>物业</span>
          </div>
          <span class="commonly tag" v-if="commonly">
                <Icon svg-name="add" height="14" width="14" class-name="add"></Icon>
                添加常用
              </span> <span class="is-commonly tag" v-else>已添加常用</span>
        </li>
        <li>
          <div>
            <Icon svg-name="parking" class-name="svg"></Icon>
            <span>停车场</span>
          </div>
          <span class="commonly tag" v-if="commonly">
                <Icon svg-name="add" height="14" width="14" class-name="add"></Icon>
                添加常用
              </span> <span class="is-commonly tag" v-else>已添加常用</span>
        </li>
      </ul>

    </NavLayOut>

  </div>
</template>

<script>
export default {
  name: "AllTools",
  data() {
    return {
      commonly: true
    }
  }
}
</script>

<style scoped lang="stylus">
.svg
  height 44px
  width 44px
  margin-right 12px

.scroll-list-wrap
  height calc(100% - 52px)
  border-radius: 5px
  transform: rotate(0deg) // fix 子元素超出边框圆角部分不隐藏的问题
  overflow: hidden

#all_tools
  background-color $my-bgc-color

  header
    display flex
    justify-content: space-between;
    align-items center
    padding 5px 20px
    background-color: #fff;
    margin-bottom 20px

    span
      height 30px
      line-height: 30px;
      font-size 16px
      font-weight 600

    .title
      font-size 14px

    .num
      display flex
      align-items center

      div
        flex 0
        min-width 16px
        height 16px
        border-radius 50%
        line-height 16px
        font-size 12px
        background-color #0099FF
        color #fff

      i
        color $custom-gray

  .tools_list
    background-color: #fff;

    li
      padding 10px 20px
      border-bottom 1px solid rgba($custom-border-color, .4)
      display flex
      justify-content: space-between;
      align-items center

      div
        display flex
        align-items center
        font-size 14px

        span
          font-size 14px

      .tag
        font-size 12px
        color #fff
        display flex
        align-items center
        height 28px
        border-radius 28px
        padding 0 12px

        &.commonly
          //background-color $custom-active-color
          color #0099FF
          border 1px solid #0099FF

          padding
          .add
            margin-right 7px

        &.is-commonly
          color #CCCCCC
          color $custom-gray
</style>