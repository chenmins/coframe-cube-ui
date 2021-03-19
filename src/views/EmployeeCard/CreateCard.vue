<template>
  <FloorSelect @confirm="confirm" :showAdd="true" :showClose="true">
    <LayOut style="margin-top: 12px;padding: 12px 20px">
      <div class="title">选择新员工</div>
      <!--      @submit="submitHandler"-->
      <!--        @validate="validateHandler"-->
      <cube-form :model="$store.state.EmployeeCard.groupModel.firstModel"
                 @validate="validateHandler"
                 :schema="$store.state.EmployeeCard.groupSchema.fristSchema"
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
import {mapMutations} from "vuex";

export default {
  name: "CreateCard",
  components: {
    Preview, FloorSelect
  },
  data() {
    return {
      preview: false,
      result: null
    }
  },
  created() {
      this.$store.commit('EmployeeCard/iniModel')
  },
  mounted() {
    this.$children[0].$children[0].$refs.scroll.$el.style.height = `${this.workspaceRealHeightNum - 130}px`

  },
  methods: {
    validateHandler(result) {
      this.result = result
    },
    confirm(e) {
      if (!this.result.valid && this.$route.fullPath.includes('CreateCard')) {
        this.$createToast({
          type: 'error',
          txt: '请填写完整表单',
          time: 1000
        }).show()
        return
      }
      this.$router.push({
        name: 'PreviewConfirm',
        params: {
          id: this.userInfo.id,
          func: '开卡'
          //   firstModel: this.$store.state.EmployeeCard.groupModel,
          //   floorModel: e.floorModel,
          //   floorSchema: e.floorSchema
        }
      })
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
  }
}
</script>

<style scoped lang="stylus">
>>> .cube-textarea-wrapper::after
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