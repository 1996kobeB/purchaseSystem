/**
 * @desc:   demo模块的store
 * @author: liaowanquan<10720>
 * @create: 2021-07-22 16:52:49
 */

export default {
  namespaced: true, // 避免模块冲突

  state: {
    content: '选项一'
  },
  mutations: {
    setContent (state, content) {
      state.content = content
    }
  }

}
