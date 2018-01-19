import Vue from 'vue'
import Vuex from 'vuex'
import { actions } from './actions/index'
import { mutations } from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: null,
    pagination: {
      currentPage: null,
      pageCount: null,
      perPage: null,
      totalCount: null
    },
    article: {
      text: '',
      title: '',
      createdAt: '',
      author: '',
      updatedAt: ''
    },
    authForm: '',
    popup: {
      message: '',
      className: ''
    }
  },
  actions,
  mutations
})
