import * as types from './mutation-types'

export const mutations = {
  [types.GET_POSTS_SUCCESS] (state, {posts, pagination}) {
    state.posts = posts.length ? posts : false
    state.pagination = { ...pagination }
  },
  [types.GET_ARTICLE_SUCCESS] (state, data) {
    state.article = {
      ...data,
      createdBy: data.createdBy.username
    }
  },
  [types.AUTH_STATUS] (state, data) {
    state.authForm = data
  },
  [types.DELETE_ARTICLE_STATE] (state, {status, message, id: articleID}) {
    if (status === 204) {
      state.posts = state.posts.filter(({id}) => id !== articleID)
    }
    state.popup = {
      message,
      className: status === 204 ? 'succes' : 'error'
    }
  },
  [types.CLOSE_POPUP] (state) {
    state.popup = {message: '', className: ''}
  }
}
