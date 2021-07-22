<template>
  <tab />
  <page />
</template>
<script>
import Tab from './components/tab.vue'
import Page from './components/page.vue'

export default {
  name: 'Demo',
  components: {
    Tab,
    Page
  }
}
</script>
