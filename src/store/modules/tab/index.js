/**
 * @desc:   demo模块的store
 * @author: liaowanquan<10720>
 * @create: 2021-07-22 16:52:49
 */

export default {
  namespaced: true, // 避免模块冲突

  state: {
    tabList: ['选项一', '选项二', '选项三', '选项四'],
    activeIndex: 0
  },
  mutations: {
    setContent (state, index) {
      state.activeIndex = index
    }
  },
  getters: {
    getMoreContent (state) {
      return `这是${state.tabList[state.activeIndex]}`
    }
  },
  actions: {
    resetContent (context) {
      return new Promise(resolve => { // 我们模拟一个异步操作，3秒后修改active为0
        setTimeout(() => {
          context.commit('setContent', 0)
          resolve()
        }, 3000)
      })
    }
  }
}
