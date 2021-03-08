<template>
  <div id="floor_select" :style="'background-color'+bgColor">
    <NavLayOut
        bgc-color="#fff"
    >
      <LayOut style="padding-bottom: 60px" class="bgcolor">
        <slot>

        </slot>
        <LayOut class="item" style="margin-top: 12px;padding: 12px 20px">
          <div v-if="!showAdd" class="cover"></div>
          <div class="title">楼层权限</div>
          <div class="item" v-for="(model,index) in $store.state.EmployeeCard.groupModel.floorModel">
            <cube-form :model="$store.state.EmployeeCard.groupModel.floorModel[index]"
                       @validate="validateHandler"
                       :schema="$store.state.EmployeeCard.groupSchema.floorSchema[index]"
                       :options="{layout:'classic'}"
                       class="form-control floor-root"
            >

            </cube-form>
            <Icon v-show="showClose" svg-name="employee-close" class-name="close" @iconToggle="close(index)"></Icon>
          </div>
        </LayOut>
        <div v-show="showAdd" class="add" @click="add">
          <i class="cubeic-close add_svg"></i>
          <span>添加</span>
        </div>
      </LayOut>
    </NavLayOut>

    <div class="footer" v-if="$route.meta.name==='员工卡申请'">
      <cube-button type="submit">预览确认</cube-button>
    </div>
    <div class="footer two" v-else>
      <cube-button type="submit" class="cancel" @click="$router.back()">上一步</cube-button>
      <cube-button type="submit" class="confirm" @click="confirm">预览确认</cube-button>
    </div>

  </div>
</template>

<script>
import Preview from "@/components/EmployeeCard/Preview";

export default {
  name: "FloorSelect",
  props: {
    bgColor: {
      type: String,
      default: ''
    },
    showAdd: {
      type: Boolean,
      default: false
    },
    showClose: {
      type: Boolean,
      default: false
    },

  },

  components: {
    Preview
  },
  data() {
    return {
      preview: false,
      result: null
    }
  },
  methods: {
    validateHandler(result) {
      this.result = result

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
    confirm() {
      if (!this.result.valid) {
        this.$createToast({
          type: 'error',
          txt: '请填写完整表单',
          time: 1000
        }).show()
        return
      }
      this.$emit('confirm',)
    },
    add() {
      let schemaTemplate = {
        fields: [
          {
            type: 'select',
            modelKey: 'which',
            label: '楼栋',
            props: {
              options: ['楼栋1', '楼栋2', '楼栋3', '楼栋4', '楼栋5', '楼栋6']
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
              options: ['楼层1', '楼层2', '楼层3', '楼层4', '楼层5']
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
              options: ['楼门1', '楼门2', '楼门3', '楼门4', '楼门5']
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
      this.$store.commit('EmployeeCard/addFormItem', {
        modelTemplate, schemaTemplate
      })

    },
    close(index) {
      this.$store.state.EmployeeCard.groupModel.floorModel.splice(index, 1)
      this.$store.state.EmployeeCard.groupSchema.floorSchema.splice(index, 1)
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
  background-image url("../../../assets/icons/employee-select.webp")
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

>>> .cube-select
  background-color transparent
</style>


<style scoped lang="stylus">
#floor_select
  position relative
  height 100vh

  .bgcolor
    background-color: #F5F6FA

    .add
      width: 117px;
      height: 30px;
      border-radius: 20px;
      border: 1px solid #000000;
      margin 20px auto 0
      display flex
      align-items center
      justify-content: center;

      .add_svg
        transform rotate(45deg)
        height 14px
        width 14px

.title
  font-size: 18px;
  font-weight: 600;
  color: #0099FF;
  line-height: 25px;
  text-align left

.item
  position: relative;

  .cover
    position: absolute
    background-color transparent;
    z-index: 99
    height 100%
    width 100%
    top 0
    left 0

  .floor-root
    border-radius 6px
    background-color rgba(#0099FF, .05)
    position relative
    padding 5px 10px
    margin 10px 0

  .close
    height 14px
    width 14px
    position absolute
    right -7px
    top -7px

.two
  display flex
  justify-content: center;

  .cube-btn
    width 40%

.footer
  background-color #fff
  box-shadow: 0px -4px 10px 0px rgba(0, 0, 0, 0.04);
  position fixed
  bottom 0
  width 100%
  z-index 11

  .cancel
    background #F5F6FA !important
    color #000

  .cube-btn
    height: 40px;
    background: linear-gradient(90deg, #19E8FF 0%, #0F97FB 100%);
    border-radius: 20px;
    margin 12px auto


</style>