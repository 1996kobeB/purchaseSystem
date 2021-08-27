/**
 * @desc:
 * @author: liaowanquan
 * @create: 2021-07-15 16:52:23
 */

import { app } from '@/plugins/app'
import {
  Button,
  Input,
  Form,
  Alert,
  message,
  Table,
  Tag,
  Layout
} from 'ant-design-vue'

import '@/assets/styles/antd.less'

app.use(Button)
  .use(Input)
  .use(Form)
  .use(Alert)
  .use(message)
  .use(Table)
  .use(Tag)
  .use(Layout)
