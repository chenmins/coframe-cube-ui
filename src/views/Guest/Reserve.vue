<template>
  <div id="Reserve" style="margin-bottom: 80px">
    <Search placeholder="搜索访客姓名" :value="value"></Search>

    <LayOut class="func">
      <span>审批状态</span>
      <span @click="showPicker">到访日期</span>
    </LayOut>

    <!--    @CardDetail-->

    <MenuCard v-for="reserve in reserves" @CardDetail="ThisReserve" class="card" name="我的申请" :noAll="true" style="padding: 15px">
      <div class="content">
        <p>到访时间：<span v-for="i in reserve.name">{{i}}，</span></p>
        <p>到访部门：<span v-for="i in reserve.where">{{i}}，</span></p>
        <p>来访姓名：{{reserve.time}}</p>
      </div>
      <Tag color="#fff" class="tag" :background-color="reserve.approved?'#42b983':'#000'">{{ !reserve.approved?'待审批':'已完成' }}</Tag>
    </MenuCard>

  </div>
</template>

<script>
import Search from "@/components/Search";
import MenuCard from "@/components/MainMenu/MenuCard";

export default {
  name: "Reserve",
  components: {
    Search,
    MenuCard
  },
  data() {
    return {
      value: '',
      pickerData: '',
      reserves:[]
    }
  },
  created() {
    this.reserves = this.$store.state.Guest.reserves
    this.pickerData = [
      {text: '近30天', value: '近30天'},
      {text: '近7天', value: '近7天'},
      {text: '全部', value: '全部'},
    ]
  },
  methods: {
    ThisReserve() {
      this.$router.push({name: 'GuestDetail', params: {id: 1}})
    },
    showPicker() {
      if (!this.picker) {
        this.picker = this.$createPicker({
          title: 'Picker',
          data: [this.pickerData],
          onSelect: this.selectHandle,
          onCancel: this.cancelHandle
        })
      }
      this.picker.show()
    },
    selectHandle(selectedVal, selectedIndex, selectedText) {

    }
  }
}
</script>

<style scoped lang="stylus">
#Reserve
  background-color $my-bgc-color
  .func
    height 40px
    line-height: 40px;
    display flex

    span
      flex-grow 1
      border 1px solid rgba($custom-border-color, .1)

.content
  margin 10px
  font-size 12px
  line-height 14px
  text-align left
  color $custom-gray
  position relative

  p
    margin-top 6px

.card
  position relative

  .tag
    position absolute
    right 20px
    top 10px
</style>