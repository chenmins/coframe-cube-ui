<template>
  <div id="page">
    <TitleNav bgc-color="#fff">
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
            <i class="cubeic-arrow" style="float: right;"></i>
          </div>
        </cube-form-item>
        <cube-form-item :field="schema.groups.fields[1]">
          <!--            @click="showTimePicker"-->
          <div class="time-show" @click="selectType">{{ model.type || '请选择' }}
            <i class="cubeic-arrow" style="float: right;"></i>
          </div>
        </cube-form-item>
        <cube-form-item>
          <cube-button type="submit" class="inquire">查询</cube-button>
        </cube-form-item>
      </cube-form>
    </TitleNav>
  </div>
</template>

<script>
import {mapActions, mapMutations} from "vuex";

const time = new Date().valueOf() + 60 * 60 * 1000
const WEEK_MAP = [
  '周日',
  '周一',
  '周二',
  '周三',
  '周四',
  '周五',
  '周六',
]


export default {
  name: "BusinessPage",
  beforeRouteEnter(to, from, next) {
    to.meta.name = to.params.id
    //设置可选类型
    to.meta.dataType.lifashi = [
      {
        text: '理发',
        value: '理发'
      },
      {
        text: '护理',
        value: '护理'
      },
      {
        text: '洗发',
        value: '洗发'
      }
    ],
        next()
  },
  data() {
    return {
      timeFrom: [],
      closeTypeArr: [],
      date: this.$dayjs().format('MM月DD日'),
      model: {
        time: '',
        type: '',

      },
      schema: {
        groups: {
          legend: `访客1信息`,
          fields: [
            {
              type: 'select',
              modelKey: 'time',
              label: '选择时间',
              props: {},
              rules: {
                required: true
              }
            },
            {
              type: 'select',
              modelKey: 'type',
              label: '护理类型',
              props: {},
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
        text: WEEK_MAP[this.$dayjs().day()] + ' ' + this.$dayjs().format('MM月DD日'),
        value: this.$dayjs().format('MM月DD日')
      },
      {
        text: WEEK_MAP[this.$dayjs().add(1, 'day').day()] + ' ' + this.$dayjs().add(1, 'day').format('MM月DD日'),
        value: this.$dayjs().add(1, 'day').format('MM月DD日')
      },
      {
        text: WEEK_MAP[this.$dayjs().add(2, 'day').day()] + ' ' + this.$dayjs().add(2, 'day').format('MM月DD日'),
        value: this.$dayjs().add(2, 'day').format('MM月DD日')
      },
    ]
  },
  methods: {
    ...mapActions('barber', ['queryByTypeAndDateForBarber']),
    ...mapActions('Infirmary',['queryByTypeAndDateForClinic']),
    async submitHandler(e, val) {
      e.preventDefault()
      let type =  this.$route.params.value
      if ( type === 'lifashi') {
        await this.queryByTypeAndDateForBarber({
          type: val.type,
          date: this.$dayjs().format('YYYY-') + this.model.time
        })
      }else if( type === 'yiwushi'){
        await this.queryByTypeAndDateForClinic({
          type: val.type,
          date: this.$dayjs().format('YYYY-') + this.model.time
        })
      }
      await this.$router.push({name: 'ReservePage', params: {item: this.$route.params.id,type:type}})
    },
    selectType() {
      if (!this.TypePicker) {
        this.TypePicker = this.$createPicker({
          title: '',
          data: [this.closeTypeArr],
          onSelect: (selectedVal, selectedIndex, selectedText) => {
            console.log(selectedVal, selectedIndex, selectedText)
            this.model.type = selectedVal[0]
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
            this.model.time = selectedVal[0].substr(0, 2) + '-' + selectedVal[0].substr(3, 2)
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
  background-color $my-bgc-color
  border 1px solid transparent

  >>> #nav_layout
    height auto

  >>> .nav_height
    height auto

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