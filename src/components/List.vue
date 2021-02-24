<template>
  <div class="product_list">
    <div v-if="showTitle" class="product_list_title">{{ title }}</div>
    <Card class="list_item" style="margin:0;border-radius:0;padding:15px" v-for="item in data" :key="item.id"
          :data-id="item.id"
          @clicked="go(item)"
    >
      <slot :scoped="item"></slot>
    </Card>
    <img v-if="data.length===0" src="../assets/AdministrativeService/noData.png" alt="">
  </div>
</template>

<script>
import Card from '@/components/UI/Card'

export default {
  name: "List",
  components: {
    Card
  },
  props: {
    showTitle: {
      type: Boolean,
      default: true
    },
    title: '',
    data: {
      type: Array,
      default: []
    }
  },
  methods: {
    go(e) {
      this.$emit('goRouter', e)
      // this.$router.push({name:`ProductInc`,params:{id:e.target.dataset.id}})
    }
  }
}
</script>

<style scoped lang="stylus">

.product_list
  background-color: #fff;
  border-radius 5px

.product_list_title
  font-size 18px
  display block
  text-align left
  padding 20px

.icon-arrow
  margin-left 6px
  color #ccc

.list_item
  display flex
  align-items center
  justify-content: space-between;
  padding 8px 16px 8px 12px
  position: relative;

  &:after
    content ''
    border-bottom 1px solid rgba(#ccc, .4)
    position absolute
    bottom 0
    left 64px
    display block
    width 100%
</style>