<template>
  <div >
    <Calendar
        class="event-calendar"
        v-model="calendar.value"
        :disabled-days-of-week="calendar.disabled"
        :format="calendar.format"
        :clear-button="calendar.clear"
        :placeholder="calendar.placeholder"
        :pane="1"
        :has-input="false"
        :on-day-click="onDayClick4"
        :change-pane="changePane2"
    >
<!--      显示农历-->
<!--      <div-->
<!--          class="event"-->
<!--          v-for="(evt, index) in lurevents"-->
<!--          :key="index"-->
<!--          :slot="evt.date"-->
<!--      >-->
<!--        <div style="font-size: 12px" v-html="evt.content">{{evt}}</div>-->
<!--      </div>-->
    </Calendar>
  </div>
</template>

<script>
import lunar from "@/utils/lunar";

export default {
  name: "myCalendar",
  props:[
      'format',
      'placeholder',
      'date'
  ],
  data(){
    return {
      date4: "",
      lurevents: [],
      calendar:{
        value: this.stringify(new Date()),
        disabled: [],
        clear: true,
        format:'yyyy-MM-dd',
        placeholder:'placeholder'
      }
    }
  },
  created() {
    this.date4 = this.stringify(new Date())
  },
  mounted() {
    this.$nextTick(()=>{
      let dir = document.getElementsByClassName('day-cell')
      dir.forEach(i=>{
        console.log(i.dataset.date)
        if(i.dataset.date === '2021-02-16'){
          i.classList.add('hasTodo')
        }
      })

    })
  },
  methods:{
    toArr(cArr) {
      return [].slice.call(cArr);
    },
    foramtDay(el) {
      /* eslint-disable */
      var S = "",
          J,
          I;
      if (el.lDay == 1) {
        S =
            "<b>" +
            (el.isLeap ? "\u95f0" : "") +
            el.lMonth +
            "\u6708" +
            (lunar.monthDays(el.lYear, el.lMonth) == 29 ? "\u5c0f" : "\u5927") +
            "</b>";
      } else {
        S = lunar.cDay(el.lDay);
      }
      I = el.lunarFestival;
      if (el.lMonth == "4" && I.indexOf("\u7aef\u5348\u8282") != -1) {
        I = "";
        el.lunarFestival = "";
      }
      if (I.length > 0) {
        if (I.length > 7) {
          // I = I.substr(0, 5) + "\u2026"
          I = I.split(" ")[0];
        }
        I = I.fontcolor("#909090");
      } else {
        // I = el.solarFestival;
        // if (I.length > 0) {
        //     J = (I.charCodeAt(0) > 0 && I.charCodeAt(0) < 128) ? 9 : 5;
        //     if (I.length > J + 1) {
        //         I = I.substr(0, J - 1) + "\u2026"
        //     }
        //     I = I.fontcolor("#909090");
        // } else {
        //     I = el.solarTerms;
        //     if (I.length > 0) {
        //         I = I.fontcolor("#ff7200") // 节日
        //     }
        // }
      }
      if (I.length > 0) {
        S = I;
      }
      return S;
    },
    filled(v) {
      return String(v).replace(/^(\d)$/, "0$1");
    },
    isDate(v) {
      if (v instanceof Date) {
        return true;
      }
      return false;
    },
    stringify(v) {
      if (!this.isDate(v)) return null;
      return (
          v.getFullYear() +
          "-" +
          this.filled(v.getMonth() * 1 + 1) +
          "-" +
          this.filled(v.getDate())
      );
    },
    onDayClick4(date, str) {
      this.date4 = str;
    },
    changePane2(year, month, pane) {
      var Today = new Date();
      var ty = parseInt(Today.getFullYear());
      var tm = parseInt(Today.getMonth());
      var td = parseInt(Today.getDate());
      var days = [];
      for (var i = 0; i < pane; i++) {
        var date = new Date(year, month + i);
        var r = new lunar.Calendar(
            date.getFullYear(),
            date.getMonth(),
            ty,
            tm,
            td
        );
        days = days.concat([].slice.call(r, 0));
      }
      for (var j = 0; j < days.length; j++) {
        days[j].date = this.stringify(
            new Date(days[j].sYear, days[j].sMonth - 1, days[j].sDay)
        );
        days[j].content = this.foramtDay(days[j]);
      }
      this.lurevents = days;
    },
  },
  watch:{
    date4:{
      immediate:true,
      handler(newV,oldV){
        this.$emit('getDate',newV)
      }
    }
  }
}
</script>

<style scoped lang="stylus">
>>>.hasTodo
  color #fff!important
  background-color #0F97FB
  box-shadow: 0px 2px 4px 0px rgba(#0F97FB, 0.34);

.lorem {
  visibility: hidden;
}

.event-calendar
  width 100%

  >>> .datepicker-inner
    width 100%

  >>> .datepicker-body
    span
      margin 10px
      width calc((100% - 140px) / 7)
      height calc((100vw - 44px - 140px) / 7)
      vertical-align: top;
      border-radius 50%
      display flex
      flex-direction column
      align-items center
    .event
      color: #e56700;


    .low
      color: red;
      font-weight: bold;


    .datepicker-monthRange
      span
        width: 100px;
        height: 100px;
        vertical-align: middle;
        line-height: 100px;
        // font-weight: 600;

>>>.datepicker-dateRange
  span
    transition all .3s ease-in-out
  span:hover
    background-color rgba(#3276b1,.8)
    box-shadow 1px 2px 6px rgba(#3276b1,.6)
    border-radius 8px
    color #fff

>>> .datepicker-wrapper
  width 100% !important

>>> .datepicker-popup
  width 100% !important

>>> .datepicker-weekRange
  height 30px
  display: flex !important
  justify-content: space-evenly !important
>>>.day-cell,.datepicker-dateRange-item-active
  position relative!important

>>>.datepicker-dateRange-item-active
  border-radius 8px
  box-shadow: 0px 2px 4px 0px rgba(255, 50, 133, 0.34);

  &:after
    content ''
    height 3px
    width 3px
    background-color #fff
    display inline-block

.datepicker-body,.event
    width 100%
    transform scale(.7)
    position: absolute;
    text-align center
    bottom 0
    line-height: 14px;
>>> .datepicker-dateRange
  width 100%
  display: flex;
  flex-wrap: wrap;

</style>