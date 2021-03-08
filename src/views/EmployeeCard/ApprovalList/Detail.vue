<template>
  <div id="floor_select" :style="'background-color'+bgColor">
    <NavLayOut
        bgc-color="#fff"
    >
      <LayOut  class="bgcolor">
        <LayOut style="margin-top: 12px;padding: 12px 20px">
          <div class="title">选择新员工</div>
          <!--        @submit="submitHandler"-->
          <!--        @validate="validateHandler"-->
          <cube-form :model="groupModel.firstModel"
                     :schema="groupSchema.fristSchema"
                     :options="{layout:'classic'}"
                     class="form-control new-employee"
          >
          </cube-form>
        </LayOut>
        <LayOut class="item" style="margin-top: 12px;padding: 12px 20px">
          <div class="title">楼层权限</div>
          <div class="item" v-for="(model,index) in groupModel.floorModel">
            <cube-form :model="groupModel.floorModel[index]"
                       :schema="groupSchema.floorSchema[index]"
                       :options="{layout:'classic'}"
                       class="form-control floor-root"
            >

            </cube-form>
            <Icon svg-name="employee-close" class-name="close" @iconToggle="close(index)"></Icon>
          </div>

        </LayOut>
      </LayOut>
      <LayOut  class="flow" style="margin:12px;padding-bottom: 60px">
        <div class="title">审批流程</div>
        <ul class="approve_ul">
          <li>
            <Icon class-name="status_svg" svg-name="guest-appro" height="14px" width="14px"></Icon>
            <img
                src="https://axure-file.lanhuapp.com/1bd99c9f-823c-4505-a248-0fe8d210da20__15b1c74062335e999ca5b36fd025fed4.svg"
                alt="">
            <div class="approve">
              <div style="display: flex;flex-direction: column;align-items: flex-start">
                <span class="name">张明</span>
                <span class="status appro">审批中</span>
              </div>
              <div class="time">
                <span>12/21  16:00 </span>
              </div>
            </div>
          </li>
          <li>
            <Icon class-name="status_svg" svg-name="guest-agree" height="14px" width="14px"></Icon>
            <img
                src="https://axure-file.lanhuapp.com/1bd99c9f-823c-4505-a248-0fe8d210da20__15b1c74062335e999ca5b36fd025fed4.svg"
                alt="">

            <div class="approve">
              <div style="display: flex;flex-direction: column;align-items: flex-start">
                <span class="name">张明</span>
                <span class="status " style="color: #999">审批人：易烊千玺</span>
              </div>
              <div class="time">
                <span class="agree">同意</span>
              </div>
            </div>
          </li>
          <li style="margin-bottom:-10px">
            <Icon class-name="status_svg" svg-name="guest-reject-min" height="14px" width="14px"></Icon>
            <img
                src="https://axure-file.lanhuapp.com/1bd99c9f-823c-4505-a248-0fe8d210da20__15b1c74062335e999ca5b36fd025fed4.svg"
                alt="">
            <div class="approve">
              <div style="display: flex;flex-direction: column;align-items: flex-start">
                <span class="name">张明</span>
                <span class="status " style="color: #999">审批人：易烊千玺</span>
              </div>
              <div class="time">
                <span class="reject">已拒绝</span>
              </div>
            </div>

          </li>
          <li class="avatar" style="margin-left: 18px">
            <div style="padding: 10px 14px;background-color: #F5F6FA;border-radius: 8px">
              这是拒绝理由哦这是拒绝理由哦这是拒绝理由哦这是拒绝理由哦这是拒绝理由哦这是拒绝理由哦
            </div>
          </li>
          <li class="send" style="margin-top: -10px">
            <Icon class-name="status_svg" svg-name="guest-reject-min" height="14px" width="14px"></Icon>
            <img
                src="https://axure-file.lanhuapp.com/1bd99c9f-823c-4505-a248-0fe8d210da20__15b1c74062335e999ca5b36fd025fed4.svg"
                alt="">
            <div class="approve">
              <span>抄送</span>
            </div>
          </li>
        </ul>
      </LayOut>
    </NavLayOut>
    <div class="footer two" v-show="isAdmin" >
      <cube-button type="submit" class="cancel" @click="cancel">拒绝</cube-button>
      <cube-button type="submit" class="confirm" @click="confirm">通过</cube-button>
    </div>
  </div>
</template>

<script>
import Preview from "@/components/EmployeeCard/Preview";

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
  name: "FloorSelect",
  props: [
    'Detail'
  ],
  components: {
    Preview
  },
  created() {
    this.groupModel.firstModel = {
      companyName: 2016,
      position: 2016,
      name: 2016,
      cardType: 2016
    }
    this.groupModel.floorModel = [
      {
        which: 2016,
        floor: 2016,
        num: 2016,
      }
    ]
  },
  data() {
    return {
      schema: {
        groups: [
          {
            legend: '选择新员工',
            fields: [
              {
                type: 'select',
                modelKey: 'companyName',
                label: '所属公司',
                props: {
                  options: [2015, 2016, 2017, 2018, 2019, 2020],
                },
                rules: {
                  required: true
                }
              },
              {
                type: 'select',
                modelKey: 'position',
                label: '所属部门',
                props: {
                  options: [2015, 2016, 2017, 2018, 2019, 2020]
                },
                rules: {
                  required: true
                }
              },
              {
                type: 'select',
                modelKey: 'name',
                label: '员工姓名',
                props: {
                  options: [2015, 2016, 2017, 2018, 2019, 2020]
                },
                rules: {
                  required: true
                }
              },
              {
                type: 'select',
                modelKey: 'cardType',
                label: '卡片类型',
                props: {
                  options: [2015, 2016, 2017, 2018, 2019, 2020]
                },
                rules: {
                  required: true
                }
              },
            ]
          },

        ]
      },
      preview: false,
      groupModel: {
        firstModel: {
          companyName: '',
          position: "",
          name: "",
          cardType: ""
        },
        floorModel: [
          {
            which: "",
            floor: "",
            num: ""
          }
        ]
      },
      groupSchema: {
        fristSchema: {
          groups: [
            {
              legend: '选择新员工',
              fields: [
                {
                  type: 'select',
                  modelKey: 'companyName',
                  label: '所属公司',
                  props: {
                    options: [2015, 2016, 2017, 2018, 2019, 2020]
                  },
                  rules: {
                    required: true
                  }
                },
                {
                  type: 'select',
                  modelKey: 'position',
                  label: '所属部门',
                  props: {
                    options: [2015, 2016, 2017, 2018, 2019, 2020]
                  },
                  rules: {
                    required: true
                  }
                },
                {
                  type: 'select',
                  modelKey: 'name',
                  label: '员工姓名',
                  props: {
                    options: [2015, 2016, 2017, 2018, 2019, 2020]
                  },
                  rules: {
                    required: true
                  }
                },
                {
                  type: 'select',
                  modelKey: 'cardType',
                  label: '卡片类型',
                  props: {
                    options: [2015, 2016, 2017, 2018, 2019, 2020]
                  },
                  rules: {
                    required: true
                  }
                },
              ]
            },

          ]
        },
        floorSchema: [
          {
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
        ]
      },

    }
  },
  methods: {
    cancel() {
      this.$createDialog({
        type: 'confirm',
        title: '确定注销该员工卡吗？',
        maskClosable: true,
        onConfirm: (e) => {
          this.$router.push({name:'RejectConfirm',params:{id:1}})

        }
      }).show()
    },
    confirm() {
      this.$router.push({name: 'Preview', params: {id: 1}})
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



>>>.cube-scroll-wrapper
  height  calc(100vh - 180px)
</style>


<style scoped lang="stylus">
.flow
  padding 15px
  border-radius 10px
  .title
    text-align left
    font-size: 16px;
    font-weight: 500;
    color: #000000;
    line-height: 22px;

  .approve_ul
    .send
    li
      display flex
      align-items center
      justify-content: space-between;
      margin 15px 0
      font-size 14px
      position relative

      .status_svg
        position absolute
        top 36px
        left 36px
        margin-top -10px
        margin-left -10px
        z-index 10

      .approve
        width 100%
        display flex
        justify-content: space-between;

        .name
          font-size: 14px;
          color: #000000;
          line-height: 20px;

        .status
          font-size: 12px;
          font-weight: 500;
          line-height: 17px;

        .agree
          color: #1FC210;

        .reject
          color: #F20404

        .appro
          color: #FFC000

      .time
        font-size: 12px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #999999;
        line-height: 17px;

      img
        margin-right 10px
        min-height 36px
        min-width 36px
        border-radius 50%

      div
        display flex
        align-items center

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