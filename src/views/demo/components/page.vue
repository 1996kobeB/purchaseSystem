<template>
  <div class="page">
    {{ getMoreContent }}
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Page',
  computed: {
    ...mapGetters('TabModule', ['getMoreContent'])
  },
  methods: {
    ...mapActions('TabModule', ['resetContent'])
    // this.$store.
  },
  mounted () {
    this.resetContent()
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
    margin-left: 540px;
    font-size: 30px;
  }
</style>
