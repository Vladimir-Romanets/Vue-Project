/* eslint import/no-webpack-loader-syntax: off */

import Vue from 'vue'
import Vuex from 'vuex'
import router from '@/router'
import Article from '@/components/Article'
import * as types from '@/store/mutation-types'
const actionsInjector = require('inject-loader!@/store/actions')

Vue.use(Vuex)

describe('Article.vue', () => {
  it('Should render correct Article content with mock data', (done) => {
    const { actions } = actionsInjector({
      './services': {
        getArticle () {
          return new Promise((resolve, reject) => {
            const article = {
              createdBy: {
                username: 'author',
                email: 'test3@example.com'
              },
              created_at: 351112343,
              id: 7,
              text: 'text',
              title: 'title',
              updatedBy: {
                username: 'updateTest',
                email: 'test@example.com'
              },
              updated_at: 210632088
            }
            resolve(article)
          })
        }
      }
    })

    const state = {
      pagination: {
        currentPage: 1
      },
      article: {
        text: '',
        title: '',
        createdBy: '',
        created_at: '',
        updated_at: ''
      }
    }

    const mutations = {
      [types.GET_ARTICLE_SUCCESS] (state, data) {
        state.article = {
          ...data,
          createdBy: data.createdBy.username
        }
      }
    }

    const options = {
      router,
      state,
      mutations,
      actions
    }

    const store = new Vuex.Store(options)

    const Constructor = Vue.extend(Article)
    const comp = new Constructor({ router, store }).$mount()

    Vue.nextTick()
      .then(() => {
        expect(comp.$el.querySelector('h1').innerText).to.equal('title')
        done()
      })
      .catch(done)
  })
})
