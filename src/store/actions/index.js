import {
  getPosts,
  getArticle,
  authFetch,
  deleteArticleFeatch
} from './services'
import * as types from '../mutation-types'

export const actions = {
  async getPostsFetch ({ commit }, {page}) {
    commit(types.GET_POSTS_SUCCESS, await getPosts(page))
  },
  async getArticleFetch ({commit}, {articleID}) {
    commit(types.GET_ARTICLE_SUCCESS, await getArticle(articleID))
  },
  async auth ({commit}) {
    commit(types.AUTH_STATUS, await authFetch())
  },
  async deleteArticle ({commit}, {id}) {
    commit(types.DELETE_ARTICLE_STATE, await deleteArticleFeatch(id))
  },
  async closePopup ({commit}) {
    setTimeout(() => commit(types.CLOSE_POPUP), 3000)
  }
}
