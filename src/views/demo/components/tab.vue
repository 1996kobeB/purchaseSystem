<template>
  <ul class="tab-content">
    <li
      v-for="(item, index) in tabList"
      @click="changeTab(index, item)"
      :class="['tab-list', activeIndex === index && 'active']"
      :key="index">
      {{ item }}
    </li>
  </ul>
</template>
<script>
export default {
  name: 'Tab',
  data () {
    return {
      tabList: ['选项一', '选项二', '选项三', '选项四'],
      activeIndex: 0
    }
  },
  methods: {
    changeTab (index, item) {
      this.activeIndex = index
      this.$store.commit('tab/setContent', item)
    }
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
