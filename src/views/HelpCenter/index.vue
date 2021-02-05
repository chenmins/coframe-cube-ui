<template>
  <div id="help_center">
    <NavLayOut bgc-color="#fff" color="#333"
    >
      <div class="replay" slot="right" v-show="$route.meta.name==='回复'">发表</div>
      <div class="container">
        <cube-scroll
            ref="scroll"
            :key="$route.meta.name"
        >
          <transition name="slide-fade">
            <router-view/>
          </transition>
        </cube-scroll>
      </div>
    </NavLayOut>
    <div class="replay_bot" v-show="$route.meta.name==='ReplayDetail'">
      <cube-textarea
          class="replay_textarea"
          v-model="value"
          :placeholder="placeholder"
          :maxlength="maxlength"
      ></cube-textarea>
      <Icon svg-name="helpcenter-emoji" style="margin-right: 10px" height="26px" width="26px"></Icon>
    </div>
    <Tabbar c :tabs="tabs"></Tabbar>

  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      value: '',
      placeholder: '回复需求',
      maxlength: 200,
      tabs: [
        {
          label: '常见问题',
          value:'question',
          icon: 'helpcenter-question',

        }, {
          label: '产品介绍',
          value: 'productInc',
          icon: 'helpcenter-inc'

        },{
          label: '需求反馈',
          value: 'feedback',
          icon: 'helpcenter-edit'

        }]
    }
  },
}
</script>

<style scoped lang="stylus">

.replay_bot
  box-shadow: 0px -2px 7px 0px rgba(0, 0, 0, 0.15);
  position fixed
  bottom 0
  width 100%
  display flex
  align-items center
  height 52px
  background-color #fff
  z-index 11

  .replay_textarea
    display inline-block
    height 36px
    bottom 0
    flex 1
    padding 0 10px

  >>> .cube-textarea
    background-color #F5F6FA
    border-radius 18px

  >>> .cube-textarea-wrapper::after
    border none

#help_center
  height $custom-bgc-height
  position: relative;

  .container
    height 100%

  .replay
    margin 15px
    width 50px
    height: 30px;
    background: #0099FF;
    border-radius: 15px;
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #FFFFFF;
    line-height: 30px;
</style>