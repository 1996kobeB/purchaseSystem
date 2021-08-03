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
          placeholder="Username"
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
          @click="handkeSubmit"
        >
          Log in
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue'
import useAxios from '@/hooks/axios'
import { user } from '@/api'

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
      },
      commonPageReq: {
        pageNo: 0,
        pageSize: 1
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
    handkeSubmit () {
      useAxios.post(user.userAuth, this.formState).then(res => {
        console.log(res)
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .login{
    margin : 80px 0 0 700px
  }
</style>
