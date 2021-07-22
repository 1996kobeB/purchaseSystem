import { app } from '@/plugins/app'
import Vuex from 'vuex'
import tab from './modules/tab'
app.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    tab
  }
})

// import { createStore } from 'vuex'

// export default createStore({
//    modules: {
//     tab
// }
// })
