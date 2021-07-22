<template>
  <div class="page">
    {{ content }}
  </div>
</template>
<script>

export default {
  name: 'Page',
  computed: {
    content () {
      return this.$store.state.tab.content
    }
  }
}
</script>

<style lang="less" scoped>
  .page{
    display: inline-block;
    text-align: center;
    line-height: 500px;
    width: 497px;
    height: 500px;
    border: 1px solid #000;
    border-top: 0;
    margin-left: 740px;
    font-size: 30px;
  }
</style>
