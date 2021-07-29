<template>
  <div class="login">
    <a-form
      layout="inline"
      :model="formState"
      @finish="handleFinish"
      @finishFailed="handleFinishFailed"
    >
      <a-form-item>
        <a-input
          v-model="formState.user"
          placeholder="Username"
        >
          <template #prefix>
            <UserOutlined style="color: rgba(0, 0, 0, 0.25)" />
          </template>
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-input
          v-model="formState.password"
          type="password"
          placeholder="Password"
        >
          <template #prefix>
            <LockOutlined style="color: rgba(0, 0, 0, 0.25)" />
          </template>
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-button
          type="primary"
          html-type="submit"
          :disabled="formState.user === '' || formState.password === ''"
          @click="jumpToDemo"
        >
          Log in
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue'

export default {
  name: 'Login',
  components: {
    UserOutlined,
    LockOutlined
  },
  data () {
    return {
      formState: {
        user: '',
        password: ''
      }
    }
  },
  methods: {
    handleFinish (values) {
      console.log(values, this.formState)
    },
    handleFinishFailed (errors) {
      console.log(errors)
    },
    jumpToDemo () {
      this.$router.push({ name: 'demo' })
    }
  }
}
</script>

<style lang="less" scoped>
  .login{
    margin : 80px 0 0 700px
  }
</style>
