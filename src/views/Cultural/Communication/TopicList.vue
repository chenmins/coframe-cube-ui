<template>
    <div id="TopicList">
        <div class="search">
            <input type="text" class="search_input" placeholder="# 话题、电影、书、歌曲、地点、股票">
            <span @click="$router.back()">取消</span>
        </div>
        <div class="left-panel">
            <cube-scroll>
            <cube-tab-bar  style="display:block" v-model="selectedLabel" :data="tabs" @change="changeHandler"></cube-tab-bar>
            </cube-scroll>
        </div>
        <div class="right-panel">
          <cube-scroll ref="scroll">
            <ul>
              <li v-for="(hero, index) in scrollData">
                <img :src="hero.avatar" alt="">
                <div class="topic_item">
                  <div class="topic_name">#{{hero.name}}#</div>
                  <div class="topic_num"><span>讨论：</span>12321</div>
                </div>
              </li>
            </ul>
          </cube-scroll>
        </div>
    </div>
</template>


<script>
import * as DATAS from '@/assets/data'
import axios from 'axios'

 const DATA_MAP = {
    '全部': DATAS.ALL_HEROES,
    '法师': DATAS.MAGE_HEROES,
    '战士': DATAS.FIGHTER_HEROES,
    '坦克': DATAS.TANK_HEROES,
    '刺客': DATAS.ASSASSIN_HEROES,
    '辅助': DATAS.SUPPORT_HEROES,
    '射手': DATAS.MARKSMAN_HEROES
  }

export default {
    data () {
      return {
        selectedLabel: '全部',
        scrollData: [],
				tabs: [],
				DATA_MAP:[]
      }
    },
    created () {
			// axios.get('http://localhost:8081/test/cityInfo').then(res=>{
			// 	this.DATA_MAP = res.data.slideNav
			// 	this.tabs = res.data.slideNav.map(i=>({
			// 		label:i.name
			// 	}))
			// 	this.selectedLabel = this.tabs[0].label
			// 	this.scrollData = res.data.slideNav.find(i=>{
			// 		return i.name === this.selectedLabel
			// 	}).num
			// })
    },
    methods: {
      changeHandler (label) {
				this.scrollData = this.DATA_MAP.find(i=>{
					return i.name === this.selectedLabel
				}).num
        this.$nextTick(() => {
          // reset better-scroll'postion
          this.$refs.scroll.scrollTo(0, 0)
          // you need to caculate scroll-content height when your dom has changed in nextTick
          this.$refs.scroll.refresh()
        })
      }
    },  
    watch: {
      selectedLabel (newV) {
        console.log(newV)
      }
    }
}
</script>

<style scoped>
>>>.cube-tab_active {
    background-color: #fff;
    color: #000;
    padding:15px 0;
    position: relative;
}
>>>.cube-tab_active:after {
    content:'';
    position: absolute;
    height: 30px;
    width: 4px;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    z-index: 20;
    background: rgb(244,128,0);
}
</style>

<style lang="stylus" scoped>


.scroll-tab-view
  .cube-tab-bar
    .cube-tab
      width: 100%
      flex-basis: unset
      height: 40px
      line-height: 40px
      font-size: 14px
      color: #db8931
      transition: all .3s ease-in
		&.cube-tab_active
			color: #fff
			font-size: 16px
			background-color: #a74b00
	.left-panel
		position: absolute
		top: 44px
		left: 0
		bottom: 0
		width: 80px
		background-color rgba($custom-border-color,.2)
	.right-panel
      position: absolute
      top: 44px
      left: 80px
      right: 0
      bottom: 0
      background-color: #fff
      margin-left 10px
      li
          height 61px
          display: flex
          align-items: center
          background-color: #fff
          border-bottom 1px solid rgba($custom-border-color ,.2)

      img
          width: 40px
          margin: 0 10px
          //border: 1px solid #ff9f38
          border-radius: 3px
        span
          //color: #db8931


.search
    display flex
    padding 5px 20px
    font-size 14px
    border-bottom 1px solid rgba($custom-border-color,.3)
    span
        line-height 30px
.search_input
    height 30px
    flex-grow 1
    margin-right 10px
    outline none
    border none
    background-color rgba($custom-border-color,.2)
    padding 0 10px

    &::-webkit-input-placeholder
        font-size 10px


.tabbar
	colo red

.topic_item
  display flex
  flex-direction column
  text-align left
  .topic_name
    font-size 14px
    margin-bottom 6px
  .topic_num
    font-size 10px
    color $custom-border-color

</style>