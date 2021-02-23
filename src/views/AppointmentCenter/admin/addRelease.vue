<template>
  <div id="page">
    <NavLayOut bgc-color="#fff">
      <cube-form :model="model"
                 :options="{layout:'classic'}"
                 class="form-control"
                 @submit="submitHandler"
      >
        <!--        @submit="submitHandler"-->
        <!--        @validate="validateHandler"-->
        <cube-form-item :field="schema.groups.fields[0]">
          <!--            @click="showTimePicker"-->
          <div class="time-show" @click="selectTime">{{ model.time || '请选择' }}
            <i class="cubeic-arrow" style="float: right;margin-right: 16px"></i>
          </div>
        </cube-form-item>
        <cube-form-item :field="schema.groups.fields[1]">
          <!--            @click="showTimePicker"-->
          <div class="time-show" @click="selectType">{{ model.clothesType || '请选择' }}
            <i class="cubeic-arrow" style="float: right;margin-right: 16px"></i>
          </div>
        </cube-form-item>
        <cube-form-item :field="schema.groups.fields[2]">
          <!--            @click="showTimePicker"-->
          <div class="time-show" @click="selectType">{{ model.clothesType || '请选择' }}
            <i class="cubeic-arrow" style="float: right;margin-right: 16px"></i>
          </div>
        </cube-form-item>
        <cube-form-item :field="schema.groups.fields[3]">
          <!--            @click="showTimePicker"-->
          <div class="time-show" @click="selectType">{{ model.clothesType || '请选择' }}
            <i class="cubeic-arrow" style="float: right;margin-right: 16px"></i>
          </div>
        </cube-form-item>
        <cube-form-item :field="schema.groups.fields[4]">
          <!--            @click="showTimePicker"-->
<!--          <div class="time-show" @click="selectType">{{ model.clothesType || '请选择' }}-->
<!--&lt;!&ndash;            <i class="cubeic-arrow" style="float: right;margin-right: 16px"></i>&ndash;&gt;-->
<!--          </div>-->
        </cube-form-item>
        <cube-form-item>
          <cube-button type="submit"  class="inquire">提交</cube-button>
        </cube-form-item>
      </cube-form>
    </NavLayOut>
  </div>
</template>

<script>
const time = new Date().valueOf() + 1 * 60 * 60 * 1000
const week = [
  '周日',
  '周一',
  '周二',
  '周三',
  '周四',
  '周五',
  '周六',
]


export default {
  name: "addRelease",

  data() {
    return {
      timeFrom: [],
      closeTypeArr:[],
      date: this.$dayjs().format('MM月DD日'),
      model: {
        type: '',
        startTime: '',
        endTime:'',
        timeD:'',
        num:''
      },
      schema: {
        groups: {
          legend: `访客1信息`,
          fields: [
            {
              type: 'select',
              modelKey: 'type',
              label: '类型',
              props: {},
              rules: {
                required: true
              }
            },
            {
              type: 'select',
              modelKey: 'startTime',
              label: '开始日期',
              props: {},
              rules: {
                required: true
              }
            },
            {
              type: 'select',
              modelKey: 'endTime',
              label: '结束日期',
              props: {},
              rules: {
                required: true
              }
            },
            {
              type: 'select',
              modelKey: 'timeD',
              label: '时间段',
              props: {},
              rules: {
                required: true
              }
            },
            {
              type: 'input',
              modelKey: 'num',
              label: '人数',
              props: {
                placeholder:'请输入'
              },
              rules: {
                required: true
              }
            },
          ]
        }
      }
    }
  },
  created() {
    this.closeTypeArr = this.$route.meta.dataType[this.$route.params.value]
    this.timeFrom = [
      {
        text: '今天' + ' ' + this.$dayjs().format('MM月DD日'),
        value: this.$dayjs().format('MM月DD日')
      },
      {
        text: week[this.$dayjs().add(1, 'day').day()] + ' ' + this.$dayjs().add(1, 'day').format('MM月DD日'),
        value: this.$dayjs().format('MM月DD日')
      },
      {
        text: week[this.$dayjs().add(2, 'day').day()] + ' ' + this.$dayjs().add(2, 'day').format('MM月DD日'),
        value: this.$dayjs().format('MM月DD日')
      },
    ]
  },
  methods: {
    submitHandler(e,val){
      e.preventDefault()
      console.log(val,this.$route.meta)
      this.$router.push({name:'ReservePage',params:{id:val.clothesType}})
    },
    selectType() {
      if (!this.TypePicker) {
        this.TypePicker = this.$createPicker({
          title: '',
          data: [this.closeTypeArr],
          onSelect: (selectedVal, selectedIndex, selectedText) => {
            this.model.clothesType = selectedVal[0]
          }
        })
      }
      this.TypePicker.show()
    },
    selectTime() {
      if (!this.TimePicker) {
        this.TimePicker = this.$createPicker({
          title: '',
          data: [this.timeFrom],
          onSelect: (selectedVal, selectedIndex, selectedText) => {
            this.model.time = selectedVal[0]
          }
        })
      }
      this.TimePicker.show()
    },
    showType() {
      let nameMap = {
        '医务室预约': 'hospital',
        '理发室预约': 'barbershop',
        '零点餐厅预约': 'restaurant',
      }
      let routerName = this.$route.meta.name
      this.$createActionSheet({
        title: '',
        data: this.$route.meta.dataType[nameMap[routerName]],
        onSelect: (item, index) => {
          this.$createToast({
            txt: `Clicked ${item.content}`,
            time: 1000
          }).show()
        }
      }).show()
    },
    showDefault() {
      this.$createActionSheet({
        title: '',
        data: [
          {
            content: this.$dayjs().format(' MM月DD日'),
          },
          {
            content: this.$dayjs().add(1, 'day').format(' MM月DD日')
          },
          {
            content: this.$dayjs().add(2, 'day').format(' MM月DD日'),
          }
        ],
        onSelect: (item, index) => {
          this.$createToast({
            txt: `Clicked ${item.content}`,
            time: 1000
          }).show()
        }
      }).show()
    }
  }
}
</script>

<style scoped lang="stylus">

>>> .cube-validator-content
  text-align left
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #CCCCCC;
  line-height: 20px;
  letter-spacing: 1px;

>>> .cube-form-label
  font-size: 14px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #000000;
  line-height: 20px;

#page
  height $viewpoint-height
  background-color $my-bgc-color
  border 1px solid transparent

  .inquire
    background: linear-gradient(90deg, #19E8FF 0%, #0F97FB 100%);
    border-radius 25px

  button
    margin-top 50px
    border-radius 10px
    background-color $custom-active-color

  .container
    margin 20px
    padding 10px
    border-radius 10px

  .selected
    display flex
    justify-content space-between
    padding 20px

    div
      display flex
      align-items center

    span
      font-size 12px
</style>