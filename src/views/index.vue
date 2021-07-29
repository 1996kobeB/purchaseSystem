<template>
  <div class="index">
    <h1>这是index首页</h1>
    <button @click="jumpToLogin">
      去登录页
    </button>
  </div>
</template>

<script>
export default {
  name: 'Index',
  methods: {
    jumpToLogin () {
      this.$router.push({ name: 'userLogin' })
    }
  }
}
</script>

<style lang="less" scoped>
.index {
    margin: 80px 0 0 750px;
}
</style>
