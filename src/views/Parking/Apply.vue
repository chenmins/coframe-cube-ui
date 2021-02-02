<template>
  <div id="Apply">
    <SlideNav
        :selected-label="selectedLabel"
        :tabs="tabs"
        :show-slider="true"
    >
      <LayOut class="item">
        <div class="left">
          <p>车位编号：A0192</p>
          <p>日期：2020-12-20 至 2020-12-30</p>
        </div>
        <div class="func_btn">
          <span v-if="!isUsed">申请</span>
          <span v-else>释放</span>
        </div>
      </LayOut>
      <LayOut class="item">
        <div class="left">
          <p>车位编号：A0192</p>
          <p>日期：2020-12-20 至 2020-12-30</p>
        </div>
        <div class="func_btn">
          申请
        </div>
      </LayOut>
      <LayOut class="item">
        <div class="left">
          <p>车位编号：A0192</p>
          <p>日期：2020-12-20 至 2020-12-30</p>
        </div>
        <div class="func_btn">
          申请
        </div>
      </LayOut>
      <LayOut class="item">
        <div class="left">
          <p>车位编号：A0192</p>
          <p>日期：2020-12-20 至 2020-12-30</p>
        </div>
        <div class="func_btn">
          申请
        </div>
      </LayOut>
      <LayOut class="item">
        <div class="left">
          <p>车位编号：A0192</p>
          <p>日期：2020-12-20 至 2020-12-30</p>
        </div>
        <div class="func_btn">
          申请
        </div>
      </LayOut>
      <LayOut class="item">
        <div class="left">
          <p>车位编号：A0192</p>
          <p>日期：2020-12-20 至 2020-12-30</p>
        </div>
        <div class="func_btn">
          申请
        </div>
      </LayOut>
      <LayOut class="item">
        <div class="left">
          <p>车位编号：A0192</p>
          <p>日期：2020-12-20 至 2020-12-30</p>
        </div>
        <div class="func_btn">
          <span v-if="!isUsed">申请</span>
          <span v-else>释放</span>
        </div>
      </LayOut>
      <LayOut class="item">
        <div class="left">
          <p>车位编号：A0192</p>
          <p>日期：2020-12-20 至 2020-12-30</p>
        </div>
        <div class="func_btn">
          申请
        </div>
      </LayOut>
      <LayOut class="item">
        <div class="left">
          <p>车位编号：A0192</p>
          <p>日期：2020-12-20 至 2020-12-30</p>
        </div>
        <div class="func_btn">
          申请
        </div>
      </LayOut>
      <LayOut class="item">
        <div class="left">
          <p>车位编号：A0192</p>
          <p>日期：2020-12-20 至 2020-12-30</p>
        </div>
        <div class="func_btn">
          申请
        </div>
      </LayOut>
      <LayOut class="item">
        <div class="left">
          <p>车位编号：A0192</p>
          <p>日期：2020-12-20 至 2020-12-30</p>
        </div>
        <div class="func_btn">
          申请
        </div>
      </LayOut>
      <LayOut class="item">
        <div class="left">
          <p>车位编号：A0192</p>
          <p>日期：2020-12-20 至 2020-12-30</p>
        </div>
        <div class="func_btn">
          申请
        </div>
      </LayOut>
      <LayOut class="item">
        <div class="left">
          <p>车位编号：A0192</p>
          <p>日期：2020-12-20 至 2020-12-30</p>
        </div>
        <div class="func_btn">
          <span v-if="!isUsed">申请</span>
          <span v-else>释放</span>
        </div>
      </LayOut>
      <LayOut class="item">
        <div class="left">
          <p>车位编号：A0192</p>
          <p>日期：2020-12-20 至 2020-12-30</p>
        </div>
        <div class="func_btn">
          申请
        </div>
      </LayOut>
      <LayOut class="item">
        <div class="left">
          <p>车位编号：A0192</p>
          <p>日期：2020-12-20 至 2020-12-30</p>
        </div>
        <div class="func_btn">
          申请
        </div>
      </LayOut>
      <LayOut class="item">
        <div class="left">
          <p>车位编号：A0192</p>
          <p>日期：2020-12-20 至 2020-12-30</p>
        </div>
        <div class="func_btn">
          申请
        </div>
      </LayOut>
      <LayOut class="item">
        <div class="left">
          <p>车位编号：A0192</p>
          <p>日期：2020-12-20 至 2020-12-30</p>
        </div>
        <div class="func_btn">
          申请
        </div>
      </LayOut>
      <LayOut class="item">
        <div class="left">
          <p>车位编号：A0192</p>
          <p>日期：2020-12-20 至 2020-12-30</p>
        </div>
        <div class="func_btn">
          申请
        </div>
      </LayOut>
    </SlideNav>


  </div>
</template>

<script>
import SlideNav from "@/components/Cultural/SlideNav";
export default {
  name: "Apply",
  components:{
    SlideNav
  },
  data(){
    return {
      selectedLabel:'B2层',
      tabs:[
        {
          label:'B2层'
        },{
          label: 'B3层'
        },{
          label:'B4层'
        }
      ],
      isUsed:true,

    }
  }
}
</script>

<style scoped lang="stylus">
#Apply
  $custom-bgc-height
.item
  display flex
  justify-content: space-between;
  font-size 14px
  text-align left
  margin-bottom 20px
  p
    margin 20px
  .func_btn
    background-color $custom-active-color
    color #fff
    height 100%
    padding 3px 10px
    font-size 10px
    border-radius 10px
    margin 20px

</style>