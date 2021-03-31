<template>
  <div id="Guest">
    <TitleNav color="#fff" >
      <main slot="fixed">
        <cube-scroll
            ref="scroll"
        >
          <!--   :field="fields[1]" -->
          <cube-form :model="model"
                     :schema="schema"
                     :options="{layout:'classic'}"
                     @submit="submitGuestForm"
                     class="form-control"
          >
            <cube-form-group>
              <cube-form-item :field="form[0]">
                <div class="time-show" @click="showTimePicker">{{ model.time || form[0].props.placeholder }}
                  <i class="cubeic-arrow" style="float: right;margin-right: 16px"></i>
                </div>
              </cube-form-item>
              <cube-form-item :field="form[1]">
                <div @click="showPicker('来访人数',maxPeople)">{{ model.peopleNum || form[1].props.placeholder }}
                  <span style="float:right;margin-right: 16px">人</span>
                </div>
              </cube-form-item>
            </cube-form-group>

            <cube-form-group class="add-group" v-for="(i,index) in schema.groups" :legend="i.legend"
                             :fields="i.fields">
            </cube-form-group>

            <cube-form-group>
              <cube-form-item :field="form[2]">
              </cube-form-item>
              <cube-form-item :field="form[3]">
                <div @click="showPicker('来访区域',column1)">{{ model.to || form[3].label }}
                  <i class="cubeic-arrow" style="float: right;margin-right: 16px"></i>

                </div>
              </cube-form-item>
              <cube-form-item :field="form[4]">
              </cube-form-item>
            </cube-form-group>

            <cube-form-group>
              <cube-button type="submit">提交</cube-button>
            </cube-form-group>
          </cube-form>
          <ul class="notice">
            <li>请配合职场做好防控工作，保障职场安全；</li>
            <li>预约成功后会自动发送短信，请与访客确认查收；</li>
            <li>访客需凭短信到园区门卫、前台处核验通行；</li>
            <li>请勿将预约码发送给送餐、推销等与业务无关人员。</li>
          </ul>
        </cube-scroll>
      </main>
    </TitleNav>
  </div>
</template>

<script>
import Button from "@/components/UI/Button";

export default {
  name: "index",
  components: {
    Button
  },
  data() {
    return {
      validity: {},
      valid: undefined,
      column1: [],
      maxPeople: [],
      model: {
        time: '',
        peopleNum: '1',
        reason: '',
        receive: '',
        to: '',
        guests: []
      },
      form: [
        {
          modelKey: 'time',
          label: '来访时间',
          props: {
            placeholder: '请选择',
          },
          rules: {
            required: true
          }
        },
        {
          type: 'input',
          modelKey: 'peopleNum',
          label: '来访人数',
          props: {
            placeholder: '请选择来访人数'

          },
          rules: {
            required: true
          }
        },
        {
          type: 'textarea',
          modelKey: 'reason',
          label: '来访事由',
          props: {
            placeholder: '请输入',
            maxlength: 150,
          },
          rules: {
            required: true
          }
        },
        {
          modelKey: 'to',
          label: '到访区域',
          rules: {
            required: true
          }
        },
        {
          type: 'input',
          modelKey: 'receive',
          label: '接待人',
          props: {
            placeholder: '请输入'
          },
          rules: {
            required: true
          }
        },
      ],
      schema: {
        groups: [
          {
            legend: `访客1信息`,
            fields: [
              {
                type: 'input',
                modelKey: `people1.name`,
                label: '来访姓名',
                rules: {
                  required: true
                }
              },
              {
                type: 'input',
                modelKey: `people1.tel`,
                label: '来访电话',
                rules: {
                  required: true
                }
              },
              {
                type: 'input',
                modelKey: `people1.position`,
                label: '来访单位',
                rules: {
                  required: true
                }
              },
              {
                type: 'radio-group',
                modelKey: `people1.situation`,
                label: '健康情况',
                props: {
                  options: ['优秀', '良好', '一般'],
                  horizontal: true
                },
                rules: {
                  required: true
                }
              },
              {
                type: 'radio-group',
                modelKey: `people1.from`,
                label: '是否来自高风险地区',
                props: {
                  options: ['是', '否'],
                  horizontal: true
                },
                rules: {
                  required: true
                }
              },
              // ...
            ]
          }
        ]
      },

    }
  },
  created() {
    this.column1 = [
      {text: '前台', value: '前台'},
      {text: '工位', value: '工位'},
      {text: '前台', value: '前台'}]
    this.init()
  },
  methods: {
    init(max = 10) {
      let newArr = []
      for (let i = 1; i < max + 1; i++) {
        newArr.push({text: i, value: i})
      }
      this.maxPeople = newArr
    },
    submitGuestForm(e, model, model2) {
      let length = this.model.peopleNum
      let newObj = {}
      e.preventDefault()
      //将数据重组，放进model.guests数组中
      for (let j = 0; j < length; j++) {
        for (let i in model2) {
          newObj[i.replace(`people${j}.`, '')] = model2[i]
          if (i.includes(`people${j}`)) { //将重新分类的数据删除
            delete this.model[i]
          }
        }
        this.model.guests.push(newObj)
      }
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
      timePicker.setTime(time)
      timePicker.show()
    },
    showPicker(title, data) {
      if (!this.picker) {
        this.picker = this.$createPicker({
          title: '选择',
          data: [data],
          onSelect: this.selectHandle,
        })
      }
      this.picker.setData([data])
      this.picker.show()
    },
    selectHandle(selectedVal, selectedIndex, selectedText) {
      if (!+selectedVal[0]) {
        this.model.to = selectedVal[0]
      } else {
        this.model.peopleNum = selectedVal[0]
      }

    },
    syncSchemaGroup(index) {
      return {
        legend: `访客${index + 1}信息`,
        fields: [
          {
            type: 'input',
            modelKey: `people${index}.name`,
            label: '来访姓名',
            rules: {
              required: true
            }
          },
          {
            type: 'input',
            modelKey: `people${index}.tel`,
            label: '来访电话',
            rules: {
              required: true
            }
          },
          {
            type: 'input',
            modelKey: `people${index}.position`,
            label: '来访单位',
            rules: {
              required: true
            }
          },
          {
            type: 'radio-group',
            modelKey: `people${index}.situation`,
            label: '健康情况',
            props: {
              options: ['优秀', '良好', '一般'],
              horizontal: true
            },
            rules: {
              required: true
            }
          },
          {
            type: 'radio-group',
            modelKey: `people${index}.from`,
            label: '是否来自高风险地区',
            props: {
              options: ['是', '否'],
              horizontal: true
            },
            rules: {
              required: true
            }
          },
          // ...
        ]
      }
    },
  },
  watch: {
    'model.peopleNum': {
      immediate: true,
      handler(newV, oldV) {
        if (newV < oldV) {
          this.schema.groups.reverse()
          this.schema.groups.splice(newV - 1, oldV - newV)
        } else if (newV > oldV) {
          for (let i = 1; i < newV - oldV + 1; i++) {
            this.schema.groups.push(this.syncSchemaGroup(i))
          }
        }

      }
    }
  }
}
</script>

<style scoped lang="stylus">
>>>.cube-scroll-list-wrapper
  padding-bottom 50px
#Guest
  height: 154px;
  background: linear-gradient(119deg, #19D8FF 0%, #0F97FB 100%);
  position: relative;

  main
    margin 20px 13px 0
    overflow: hidden;
    height calc(100vh - 60px)

    .notice
      line-height 20px
      text-align left
      margin 20px
      padding-bottom 40px
      font-size 14px

      li
        list-style decimal
        margin-left 20px

>>> .cube-textarea-wrapper::after
  border none

>>> .cube-radio //单选框宽度
  max-width: 50px

>>> .cube-radio-ui i::before
  display none

>>> .cube-radio_selected .cube-radio-ui  //单选框图片
  background-color transparent
  background-image url("../../assets/icons/selected.png")
  background-size 100%

>>> .cube-validator-content
  text-align left
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #CCCCCC;
  line-height: 20px;
  letter-spacing: 1px;

>>> .cube-input::after, >>> .cube-radio-group[data-horz="true"]::after, .cube-radio-group[data-col="true"]::after, >>> .border-right-1px::after
  border none

.form-control
  background-color $my-bgc-color

>>> .cube-form_classic .cube-form-item
  background-color #fff
  padding 10px

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

>>> input
  text-align center

>>> .cube-btn
  background-color $custom-active-color
  border-radius 10px
  width 80%
  margin 20px auto
  height 40px
  line-height 10px
</style>









