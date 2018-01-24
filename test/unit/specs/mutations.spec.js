import { mutations } from '@/store/mutations'

const {
  GET_POSTS_SUCCESS: getPostSuccess,
  GET_ARTICLE_SUCCESS: getArticleSuccess
} = mutations

describe('mutations', () => {
  it('Is set correct list of posts', () => {
    const state = { posts: null }
    const posts = [{ id: 0 }, { id: 1 }]

    getPostSuccess(state, {posts})
    expect(state.posts).to.have.length(2)

    getPostSuccess(state, { posts: [] })
    expect(state.posts).to.equal(false)
  })

  it('Is set correct list of paginations', () => {
    const state = {
      pagination: {
        currentPage: null,
        pageCount: null,
        perPage: null,
        totalCount: null
      }
    }
    const pagination = {
      currentPage: 1,
      pageCount: 5,
      perPage: 20,
      totalCount: 100
    }

    getPostSuccess(state, { pagination })
    expect(state.pagination).to.deep.equal(pagination)
  })

  it('Is set correct data of article', () => {
    const state = {
      article: {
        text: '',
        title: '',
        createdBy: '',
        created_at: '',
        updated_at: ''
      }
    }

    const article = {
      text: 'Some text',
      title: 'Some title',
      createdBy: {
        username: 'testuser'
      },
      created_at: 123,
      updated_at: 123
    }

    getArticleSuccess(state, article)
    expect(state.article).to.include({
      text: 'Some text',
      title: 'Some title',
      createdBy: 'testuser',
      created_at: 123,
      updated_at: 123
    })
  })
})
