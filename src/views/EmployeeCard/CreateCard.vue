<template>

  <FloorSelect @confirm="confirm" :showAdd="true" :showClose="true" >
    <LayOut style="margin-top: 12px;padding: 12px 20px">
      <div class="title">选择新员工</div>
      <!--      @submit="submitHandler"-->
      <!--        @validate="validateHandler"-->
      <cube-form :model="groupModel.firstModel"
                 :schema="groupSchema.fristSchema"
                 :options="{layout:'classic'}"
                 class="form-control new-employee"
      >
      </cube-form>
    </LayOut>
  </FloorSelect>
</template>

<script>
import Preview from "@/components/EmployeeCard/Preview";
import FloorSelect from "@/views/EmployeeCard/components/FloorSelect";
import EmployeeCard from "@/libs/mixins/EmployeeCard";

const column1 = [
  {text: '行政楼A座-一层-南门', value: '剧毒'},
  {text: '行政楼B座-七层-南门', value: '蚂蚁'},
  {text: '综合楼-七层-东门', value: '幽鬼'}
]
const column2 = [
  {text: '输出', value: '输出'},
  {text: '控制', value: '控制'},
  {text: '核心', value: '核心'},
  {text: '爆发', value: '爆发'}
]
const column3 = [
  {text: '梅肯', value: '梅肯'},
  {text: '秘法鞋', value: '秘法鞋'},
  {text: '假腿', value: '假腿'},
  {text: '飞鞋', value: '飞鞋'}
]

export default {
  name: "CreateCard",
  mixins:[EmployeeCard],
  components: {
    Preview, FloorSelect
  },
  created() {
  },
  data() {
    return {
      preview: false,


    }
  },
  methods: {
    submitHandler(e, e1) {
      console.log(arguments)

    },
    cancel() {
      this.$createDialog({
        type: 'confirm',
        title: '确定注销该员工卡吗？',
        maskClosable: true,
        onConfirm: (e) => {
          this.$createToast({
            type: 'warn',
            time: 1000,
            txt: `点击了确认`
          }).show()
        }
      }).show()
    },
    confirm(e) {
      this.groupModel.floorModel = e
      this.$router.push({name: 'PreviewConfirm',params: {id: this.userInfo.id,data:this.groupModel}})
    },
    add() {
      let schemaTemplate = {
        fields: [
          {
            type: 'select',
            modelKey: 'which',
            label: '楼栋',
            props: {
              options: [2015, 2016, 2017, 2018, 2019, 2020]
            },
            rules: {
              required: true
            }
          },
          {
            type: 'select',
            modelKey: 'floor',
            label: '楼层',
            props: {
              options: [2015, 2016, 2017, 2018, 2019, 2020]
            },
            rules: {
              required: true
            }
          },
          {
            type: 'select',
            modelKey: 'num',
            label: '楼门',
            props: {
              options: [2015, 2016, 2017, 2018, 2019, 2020]
            },
            rules: {
              required: true
            }
          },
        ]
      }
      let modelTemplate = {
        which: "",
        floor: "",
        num: ""
      }
      this.groupModel.floorModel.push(modelTemplate)
      this.groupSchema.floorSchema.push(schemaTemplate)
    },
    close(index) {
      this.groupModel.floorModel.splice(index, 1)
      this.groupSchema.floorSchema.splice(index, 1)
    },
    submit(e, model, model2) {
      console.log(this.model.time)
    },
    showTimePicker() {
      const timePicker = this.$createTimePicker({
        showNow: true,
        minuteStep: 10,
        delay: 15,
        day: {
          len: 30,
          filter: ['今天', '明天', '后天'],
          format: 'M月D日'
        },
        onSelect: (selectedTime, selectedText, formatedTime) => {
          this.model.time = formatedTime
        },
      })
      // timePicker.setTime(time)
      timePicker.show()
    },
    selectItem2() {
      if (!this.picker) {
        this.picker = this.$createPicker({
          title: 'Picker',
          data: [column3],
          onSelect: this.selectHandle,
          onCancel: this.cancelHandle
        })
      }
      this.picker.show()
    },
    selectItem1() {
      if (!this.picker) {
        this.picker = this.$createPicker({
          title: 'Picker',
          data: [column2],
          onSelect: this.selectHandle,
          onCancel: this.cancelHandle
        })
      }
      this.picker.show()
    },
    selectFloor() {
      if (!this.picker) {
        this.picker = this.$createPicker({
          title: 'Picker',
          data: [column1],
          onSelect: this.selectHandle,
          onCancel: this.cancelHandle
        })
      }
      this.picker.show()
    },
    selectHandle(selectedVal, selectedIndex, selectedText) {
      this.$createDialog({
        type: 'warn',
        content: `Selected Item: <br/> - value: ${selectedVal.join(', ')} <br/> - index: ${selectedIndex.join(', ')} <br/> - text: ${selectedText.join(' ')}`,
        icon: 'cubeic-alert'
      }).show()
    },
    cancelHandle() {
      this.$createToast({
        type: 'correct',
        txt: 'Picker canceled',
        time: 1000
      }).show()
    }
  }
}
</script>

<style scoped lang="stylus">
>>>.cube-textarea-wrapper::after
  border none
>>> .cube-form-group-legend, >>> .cube-select::after
  display none

>>> .cube-select
  text-align left

>>> .cube-select-placeholder
  display flex
  align-items center
  justify-content space-between

>>> .cube-select-icon
  display none

>>> .cube-select-placeholder:after
  content ''
  background-image url("../../assets/icons/employee-select.webp")
  background-size 100%
  background-position 0 0
  height 14px
  width 14px
  display inline-block

>>> .cube-form_classic .cube-form-item
  padding 9px 0 0 0

>>> .cube-input-field
  padding 10px
  height 10px
  text-align left

>>> .cube-form-label
  font-size: 14px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #000000;
  line-height: 20px;


>>> .border-bottom-1px
  border-bottom 1px solid rgba($custom-border-color, .1)

.add-group
  border-bottom 1px solid rgba($custom-border-color, .1)
  margin-top 12px
  border-radius 6px
  box-shadow: 0 1px 12px 0 rgba(0, 0, 0, 0.04);

  >>> .cube-form-label
    padding-bottom 10px

  >>> .cube-form-item
    padding 5px 10px

  & >>> .cube-form-group-legend
    text-align left
    padding 20px
    background-color #fff
    font-size: 18px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #000000;
    line-height: 25px;

>>> .cube-radio_selected .cube-radio-ui
  background-color $custom-active-color

>>> .cube-form_classic .cube-form-item .cube-validator-msg
  position: relative;
  text-align left

>>> .cube-btn
  background-color $custom-active-color
  border-radius 10px
  width 80%
  margin 20px auto
  height 40px
  line-height 10px
</style>


<style scoped lang="stylus">

.new-employee
  margin-top 20px

.title
  font-size: 18px;
  font-weight: 600;
  color: #0099FF;
  line-height: 25px;
  text-align left


</style>