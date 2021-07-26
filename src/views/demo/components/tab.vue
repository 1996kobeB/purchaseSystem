<template>
  <ul class="tab-content">
    <li
      v-for="(item, index) in tabList"
      @click="changeTab(index)"
      :class="['tab-list', activeIndex === index && 'active']"
      :key="index">
      {{ item }}
    </li>
  </ul>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'Tab',
  computed: {
    ...mapState('tab', {
      activeIndex: state => state.activeIndex,
      tabList: state => state.tabList
    })
  },
  methods: {
    ...mapMutations({
      changeTab: 'tab/setContent'
    })
  }
}
</script>
<style lang="less" scoped>
  .tab-content{
    display: flex;
    margin: 80px 0 0 700px;
    .tab-list{
      width: 125px;
      height: 50px;
      line-height: 50px;
      list-style: none;
      border: solid 1px black;
      margin-right: -1px;
      cursor: pointer;
      text-align: center;
      &.active {
        background-color: black;
        color: white;
    }
    }
  }
</style>
