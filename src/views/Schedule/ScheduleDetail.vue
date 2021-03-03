<template>
  <div id="schedule_detail">
    <NavLayOut bgc-color="#fff" @back="$router.push({name:'日程协同'})">
      <LayOut class="schedule_group_1">
        <Icon svg-name="schedule-name" class-name="schedule-name"></Icon>
        <div>
          <header>
            {{ scheduleData.title }}
          </header>
          <main>
            {{ $dayjs(scheduleData.startTime).format("MM月DD日") + " " }}
            {{ weeks[$dayjs(scheduleData.startTime).isoWeekday()] + " " }}
            {{ $dayjs(scheduleData.startTime).format("HH:mm") + " - " }}
            {{ $dayjs(scheduleData.endTime).format("HH:mm") }}
          </main>
        </div>
      </LayOut>
      <LayOut class="schedule_group_2">
        <cube-form
            class="form"
            :model="model"
            :options="{
              layout: 'classic' // classic fresh
            }">
          <cube-form-item>
            <div class="picker" @click="status.edit && showPicker('organization')">
              <div class="cube-form-label">{{ fields[0].label }}</div>
              <span class="line">{{ model.organization || fields[0].label }}</span>
              <i v-show="status.edit" class="cubeic-arrow" style="float: right;margin-right: 16px"></i>
            </div>
          </cube-form-item>
          <cube-form-item>
            <div class="picker" @click="status.edit && showPicker('meetingRoom')">
              <div class="cube-form-label">{{ fields[1].label }}</div>
              <span class="line">{{ model.meetingRoom || fields[1].label }}</span>
              <i v-show="status.edit" class="cubeic-arrow" style="float: right;margin-right: 16px"></i>
            </div>
          </cube-form-item>
          <cube-form-item>
            <div class="picker" @click="status.edit && showPicker('join')">
              <div class="cube-form-label">{{ fields[2].label }}</div>
              <span v-if="model.join.length===0">{{ fields[2].label }}</span>
              <span v-else class="line" v-for="i in model.join">{{ i.userName }}，</span>
              <i v-show="status.edit" class="cubeic-arrow" style="float: right;margin-right: 16px"></i>
            </div>
          </cube-form-item>
          <cube-form-item v-if="model.notice">
            <div  class="picker" @click="status.edit && showPicker('notice')">
              <div class="cube-form-label">{{ fields[3].label }}</div>
              <span class="line">{{ model.notice  }}</span>
              <i v-show="status.edit" class="cubeic-arrow" style="float: right;margin-right: 16px"></i>
            </div>
          </cube-form-item>
          <cube-form-item v-if="model.repeat">
            <div class="picker" @click="status.edit && showPicker('repeat')">
              <div class="cube-form-label">{{ fields[4].label }}</div>
              <span class="line">{{ model.repeat  }}</span>
              <i v-show=" status.edit" class="cubeic-arrow" style="float: right;margin-right: 16px"></i>
            </div>
          </cube-form-item>

        </cube-form>
      </LayOut>
    </NavLayOut>
    <footer v-if="scheduleData.userId === userInfo.id">
      <div @click="showPicker('share')">
        <Icon svg-name="schedule-footer-1" class-name="schedule-footer schedule-footer-1"></Icon>
      </div>
      <div @click="status.edit=!status.edit">
        <Icon svg-name="schedule-footer-2" class-name="schedule-footer schedule-footer-2"></Icon>
      </div>
      <div @click="remove">
        <Icon svg-name="schedule-footer-3" class-name="schedule-footer schedule-footer-3"></Icon>
      </div>
    </footer>
    <footer v-if="scheduleData.scheduleParticipantsEntities.findIndex(i=>i.userId===userInfo.id) !== -1">
      <div @click="refuse" class="footer-func reject">
        拒绝
      </div>
      <div @click="handle" class="footer-func">
        待处理
      </div>
      <div @click="agree" class="footer-func">
        接受
      </div>
    </footer>
    <!--    普通-->
    <!--接收人-->
  </div>
</template>

<script>
import {Dialog} from 'vant';
import {ScheduleControllerImpl} from '@controller'

export default {
  name: "ScheduleDetail",
  data() {
    return {
      model: {
        organization: '',
        meetingRoom: '',
        join: '',
        where: '',
        notice: '',
        repeat: '',
      },
      status: {
        edit: false,

      },
      fields: [
        {
          type: 'select',
          modelKey: 'organization',
          label: '组织者',
          props: {
            options: [2015, 2016, 2017, 2018, 2019, 2020]
          },
        },
        {
          type: 'select',
          modelKey: 'meetingRoom',
          label: '会议室',
          title: '选择',
          props: {
            options: [2015, 2016, 2017, 2018, 2019, 2020]
          },
        },
        {
          type: 'select',
          modelKey: 'join',
          label: '参与人',
          title: '选择',
          props: {
            options: [2015, 2016, 2017, 2018, 2019, 2020]
          },
        },
        {
          type: 'select',
          modelKey: 'notice',
          label: '提醒',
          title: '选择',
          props: {
            options: [2015, 2016, 2017, 2018, 2019, 2020]
          },
        },
        {
          type: 'select',
          modelKey: 'repeat',
          label: '重复',
          title: '选择',
          props: {
            options: [2015, 2016, 2017, 2018, 2019, 2020]
          },
        },
      ],
      scheduleData: {},
      weeks: [
        '周一',
        '周二',
        '周三',
        '周四',
        '周五',
        '周六',
        '周七',

      ],
      userInfo: JSON.parse(localStorage.getItem('userInfo'))
    }
  },
  created() {
    this.scheduleData = this.$route.params.data
    this.model = {
      organization: this.scheduleData.userName,
      meetingRoom: this.scheduleData.conferenceRoom,
      join: this.scheduleData.scheduleParticipantsEntities,
      notice: this.scheduleData.remind,
      repeat: this.scheduleData.repeat
    }
    console.log(this.model)
  },
  methods: {
    showPicker(type) {

      let typeMap = {
        "organization": [
          {
            text: 'liuwb',
            value: ''
          }
        ],
        "meetingRoom": [
          {
            text: '会议室1',
            value: ''
          }
        ],
        "join": [
          {
            text: '会议室1',
            value: ''
          }
        ],
        "notice": [
          {
            text: '无提醒'
          },
          {
            text: '日程发生时'
          },
          {
            text: '5分钟前'
          },
          {
            text: '15分钟前'
          },
          {
            text: '30分钟前'
          },
          {
            text: '1小时前'
          }
        ],
        "repeat": [
          {
            text: '不重复'
          },
          {
            text: '每天'
          },
          {
            text: '工作日'
          },
          {
            text: '每周'
          },
          {
            text: '每两周'
          },
          {
            text: '每月'
          },
          {
            text: '每年'
          },
          {
            text: '自定义'
          }
        ],
        "share": [
          {
            text: '分享人1',
            value: '分享人1简介'
          }
        ]
      }

      this.picker = this.$createPicker({
        title: 'Picker',
        data: [typeMap[type]],
        onSelect: (v1, v2, v3) => {
          console.log(v1);
          console.log(v2);
          console.log(v3);
          this.model[type] = v3[0]
          if (type === 'share') {
            this.$createDialog({
              type: 'confirm',
              confirmBtn: {
                text: '确定',
                active: true
              },
              cancelBtn: {
                text: '取消',
                active: false,
              },
            }, (createElement) => {
              return [
                createElement('div', {
                  'class': {
                    'my-content': true
                  },
                  slot: 'content'
                }, [
                  createElement('div', {
                    'class': {
                      'schedule-avatar': true
                    },
                  }),
                  createElement('div', [
                    createElement('h1', {
                      'class': {
                        'schedule-h1': true
                      },
                    }, v3[0]),
                    createElement('div', {
                      'class': {
                        'schedule-content': true
                      },
                    }, v1[0]),
                  ])
                ])
              ]
            }).show()
          }
          if (this.model[type] === '自定义') {
            if (!this.formatPicker) {
              this.formatPicker = this.$createDatePicker({
                title: '选择自定义时间',
                min: new Date(),
                max: new Date(2022, 1, 1),
                value: new Date(),
                format: {
                  year: 'YYYY年',
                  month: 'MM月',
                  date: '第 D 日'
                },
                onSelect: (value1, value2, value3) => {
                  this.model[type] = this.$dayjs(value1).format('YYYY-MM-DD')
                }
              })
            }
            this.formatPicker.show()
          }

          console.log(this.model)
          this.updateSchedule()
        },
      })
      this.picker.show()


    },
    async updateSchedule(){
      let resp
      resp = await this.dispatch(ScheduleControllerImpl.updateSchedule,
          {
            id: "2b6bf149-daea-4f80-ac8b-3161aff14c29",
            "userId": "8e3f7d5b-5c82-4aec-bae6-af1fedf67013",
            "userName": "liuwb",
            "initiator": "是",
            "title": "这是我修改后的日程",
            "conferenceRoom": "2016",
            "agree": "同意",
            "scheduleParticipantsEntities": [
              {
                "id": 268,
                "scheduleId": "2b6bf149-daea-4f80-ac8b-3161aff14c29",
                "userId": "cof-user-sysadmin",
                "userName": "sysadmin",
                "agree": "同意"
              },
              {
                "id": 269,
                "scheduleId": "2b6bf149-daea-4f80-ac8b-3161aff14c29",
                "userId": "8e3f7d5b-5c82-4aec-bae6-af1fedf67013",
                "userName": "liuwb",
                "agree": "同意"
              },
              {
                "id": 270,
                "scheduleId": "2b6bf149-daea-4f80-ac8b-3161aff14c29",
                "userId": "3",
                "userName": "people3",
                "agree": "同意"
              }
            ]
          })
      console.log(resp)
    },
    init() {

    },
    getterData() {
      return {
        "id": this.scheduleData.id,
        "agree": this.scheduleData.agree
      }
    },
    refuse() {
      this.edit = false
      this.scheduleData.agree = '不同意'
      this.update()
    },
    agree() {
      this.edit = false
      this.scheduleData.agree = '同意'
      this.update(this.scheduleData)
    },
    async update(e) {
      let resp = await this.dispatch(ScheduleControllerImpl.updateSchedule, {
        "id": this.scheduleData.id,
        "title": this.scheduleData.title,
        "start": this.scheduleData.startTime,
        "end": this.scheduleData.endTime,
        "conferenceRoom": this.scheduleData.conferenceRoom,
        "remind": this.scheduleData.remind,
        "repeat": this.scheduleData.repeat,
        "agree": this.scheduleData.agree,
        "users": [
          {
            "id": "idtwo",
            "name": "678"
          },
          {
            "id": "idhello",
            "name": "687"
          },
          {
            "id": "idworld",
            "name": "876"
          }
        ]
      })
    },
    send() {
      this.$createDialog({
        type: 'confirm',
        confirmBtn: {
          text: '确定',
          active: true
        },
        cancelBtn: {
          text: '取消',
          active: false,
        },
      }, (createElement) => {
        return [
          createElement('div', {
            'class': {
              'my-content': true
            },
            slot: 'content'
          }, [
            createElement('div', {
              'class': {
                'schedule-avatar': true
              },
            }),
            createElement('div', [
              createElement('h1', {
                'class': {
                  'schedule-h1': true
                },
              }, 'dasdas'),
              createElement('div', {
                'class': {
                  'schedule-content': true
                },
              }, 'dsadsada'),
            ])
          ])
        ]
      }).show()
    },
    remove() {
      this.$createDialog({
        type: 'confirm',
        title: '',
        content: '确定要删除当前日程？',
        confirmBtn: {
          text: '确定',
          active: true,
          disabled: false,
          href: 'javascript:;'
        },
        onConfirm: () => {
          this.dispatch(ScheduleControllerImpl.deleteSchedule, {id: this.$route.params.id}).then(res => {
            if (res.data.body === 1) {
              this.$createToast({
                  type: 'normal',
                txt:'删除成功',
                time:500,
                onTimeout:()=>{
                  this.$router.replace({name: '日程协同'})
                }
              }).show()
            }
          })
        }
      }).show()
    }
  }
}
</script>

<style scoped lang="stylus">
.picker
  color #000
  font-weight 500
  margin-bottom 10px
  border-bottom 1px solid #efefef

  .cube-form-label
    font-size 14px

  span
    display inline-block
    padding-bottom 10px
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #000000;
    line-height: 20px;
    letter-spacing: 1px;

>>> .cube-form-item
  padding 0

>>> .cube-form-label
  font-family: PingFangSC-Medium, PingFang SC;
  padding-bottom 0
  font-weight 600
  margin-bottom 7px
  font-size 14px

>>> .cube-input-field
  font-family: PingFangSC-Regular, PingFang SC;
  display inline-block
  padding 0 0 9px 0
  font-size 14px

#schedule_detail
  background-color $my-bgc-color
  position relative


  .schedule_group_1
    text-align left
    padding 20px
    margin-bottom 20px
    display flex
    align-items center
    background: linear-gradient(90deg, #DDFCE7 0%, #FFFFFF 100%);

    .schedule-name
      height 44px
      width 44px
      margin-right 18px

    header
      font-size 18px
      display flex
      align-items center

    main
      margin-top 8px
      font-size: 12px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #999999;

  .schedule_group_2
    text-align left
    padding 10px 22px

    .form
      height 100%
      font-size: 14px;
      font-family: PingFangSC-Medium, PingFang SC;
      color: #000000;
      line-height: 20px;
      margin-bottom 10px

      .header
        font-weight: 500;
        margin-bottom 7px

      .content
        font-weight: 400;
        font-family: PingFangSC-Regular, PingFang SC;
        padding-bottom 9px
        display inline-block

  footer
    z-index 20
    display flex
    align-items center
    justify-content space-around
    position absolute
    bottom 0
    width 100%
    height: 60px;
    background: #FFFFFF;
    box-shadow: 0px -4px 10px 0px rgba(0, 0, 0, 0.04);

  .footer-func
    font-size 14px
    font-family: PingFangSC-Regular, PingFang SC;
    color #0099FF
    border 1px solid #0099FF
    border-radius 20px
    padding 10px 30px

  .reject
    color #ED2C54
    border 1px solid #ED2C54

  .button_group
    display flex
    justify-content space-evenly

    span
      height 22px
      line-height 22px
      flex-grow 1

.receive
  display flex
  justify-content: space-around;
  background-color: #fff;
  height 40px
  line-height 40px

  div:nth-child(2)
    min-width: 100px;
</style>