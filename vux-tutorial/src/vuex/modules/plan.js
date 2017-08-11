import * as types from '../types'

const state = {
  totalTime: 0, // 总时间
  list: []  // 计划列表
}

const actions = {
  addTotalTime ({commit}, time) {
    commit(types.ADD_TOTAL_TIME, time)
  },
  decTotalTime ({commit}, time) {
    commit(types.DEC_TOTAL_TIME, time)
  },
  savePlan ({commit}, plan) {
    commit(types.SAVE_PLAN, plan)
  },
  deletePlan ({commit}, plan) {
    commit(types.DELETE_PLAN, plan)
  }
}

const getters = {
  getTotalTime: totalTime => state.totalTime,
  loginStatus: list => state.list
}

const mutations = {
  // 增加总时间
  [types.ADD_TOTAL_TIME] (state, time) {
    state.totalTime = parseInt(state.totalTime) + parseInt(time)
  },
  // 减少总时间
  [types.DEC_TOTAL_TIME] (state, time) {
    state.totalTime = parseInt(state.totalTime) - parseInt(time)
  },
  // 新增计划
  [types.SAVE_PLAN] (state, plan) {
    // 设置默认值，未来我们可以做登入直接读取昵称和头像
    const avatar = 'https://sfault-avatar.b0.upaiyun.com/147/223/147223148-573297d0913c5_huge256'

    state.list.push(
      Object.assign({name: '二哲', avatar: avatar}, plan)
    )
  },
  // 删除某计划
  [types.DELETE_PLAN] (state, idx) {
    state.list.splice(idx, 1)
  }
}

export default {
  state,
  actions,
  getters,
  mutations
}
