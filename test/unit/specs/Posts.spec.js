/* eslint import/no-webpack-loader-syntax: off */

import Vue from 'vue'
import Vuex from 'vuex'
import router from '@/router'
import Posts from '@/components/Posts'
import * as types from '@/store/mutation-types'
const actionsInjector = require('inject-loader!@/store/actions')

Vue.use(Vuex)

describe('Posts.vue', () => {
  it('Should render correct Posts content with mock data', (done) => {
    const { actions } = actionsInjector({
      './services': {
        getPosts () {
          return new Promise((resolve, reject) => {
            const posts = [
              {
                id: 1,
                title: 'title',
                text: 'text',
                created_at: 156578465
              }, {
                id: 2,
                title: 'title',
                text: 'text',
                created_at: 156578465
              }
            ]
            const pagination = {
              currentPage: 1,
              pageCount: 5,
              perPage: 20,
              totalCount: 100
            }
            resolve({posts, pagination})
          })
        }
      }
    })

    const state = {
      posts: null,
      pagination: {
        currentPage: null,
        pageCount: null,
        perPage: null,
        totalCount: null
      }
    }

    const mutations = {
      [types.GET_POSTS_SUCCESS] (state, { posts = [], pagination }) {
        state.posts = posts.length ? posts : false
        state.pagination = { ...pagination }
      }
    }

    const options = {
      router,
      state,
      mutations,
      actions
    }

    const store = new Vuex.Store(options)

    const Constructor = Vue.extend(Posts)
    const comp = new Constructor({ router, store }).$mount()

    Vue.nextTick()
      .then(() => {
        expect(comp.$el.querySelectorAll('.post').length).to.equal(2)
        done()
      })
      .catch(done)
  })
})
