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
          v-model:value="formState.username"
          placeholder="admin"
        >
          <template #prefix>
            <UserOutlined style="color: rgba(0, 0, 0, 0.25)" />
          </template>
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-input
          v-model:value="formState.password"
          type="password"
          placeholder="123456"
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
          @click="handleSubmit"
        >
          Log in
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue'

import { login } from '@/api'
import { message } from 'ant-design-vue'

export default {
  name: 'Login',

  components: {
    UserOutlined,
    LockOutlined
  },
  data () {
    return {
      formState: {
        username: '',
        password: '',
        grant_type: 'password'
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

    async handleSubmit () {
      const { data } = await login(this.formState
      )

      if (+data.code !== 200) {
        message.error(data.message || '请求失败')
        return false
      }
      message.success('登录成功').then(this.$router.push({ name: 'demo' }))
    }
  }
}
</script>

<style lang="less" scoped>
  .login{
    margin : 80px 0 0 700px
  }
</style>
