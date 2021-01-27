<template>
  <div id="GuestDetail">
    <div class="container">
      <cube-scroll
          ref="scroll"
      >
        <DetailBox></DetailBox>
        <LayOut class="flow">
          <div class="title">审批流程</div>
          <ul>
            <li>
              <div>
                <img
                    src="https://axure-file.lanhuapp.com/1bd99c9f-823c-4505-a248-0fe8d210da20__15b1c74062335e999ca5b36fd025fed4.svg"
                    alt="">
                <span>张明</span>
              </div>
              <span>已同意.12/21  16:00</span>
            </li>
            <li>
              <div>
                <img
                    src="https://axure-file.lanhuapp.com/1bd99c9f-823c-4505-a248-0fe8d210da20__15b1c74062335e999ca5b36fd025fed4.svg"
                    alt="">
                <span>张明</span>
              </div>
              <span>审批中</span>
            </li>
          </ul>

        </LayOut>
      </cube-scroll>
    </div>

    <footer>
      <cube-button>撤回</cube-button>
    </footer>
  </div>
</template>

<script>
import LayOut from "@/components/LayOut";
import DetailBox from "@/components/Guest/DetailBox";
export default {
  name: "GuestDetail",
  components: {
    LayOut,DetailBox
  },

}
</script>

<style scoped lang="stylus">
#GuestDetail
  background-color: $my-bgc-color
  height $viewpoint-height
  border 1px solid transparent

  .container
    height calc(100% - 50px)

.flow
  padding 15px

  .title
    text-align left

  ul
    margin 20px 10px

    li
      display flex
      align-items center
      justify-content: space-between;
      margin 15px 0
      font-size 14px

      img
        margin-right 10px

      div
        display flex
        align-items center
</style>