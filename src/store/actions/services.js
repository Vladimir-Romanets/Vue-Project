import { request } from './request'
const accessToken = '04QkC_eNKQ7PONIOyhXJ77GAHw_zMF_tgKXuCG3W'

export const getPosts = async (page) => {
  const route = Number(page) ? `/v1/posts?page=${page}` : '/v1/posts'
  try {
    const { data: posts, headers } = await request.get(route)
    const pagination = {
      currentPage: headers['x-pagination-current-page'],
      pageCount: headers['x-pagination-page-count'],
      perPage: headers['x-pagination-per-page'],
      totalCount: headers['x-pagination-total-count']
    }
    return { posts, pagination }
  } catch (err) {
    throw Error(err)
  }
}

export const getArticle = async (articleID) => {
  try {
    const { data } = await request.get(`/v1/posts/${articleID}`)
    return data
  } catch (err) {
    throw Error(err)
  }
}

export const authFetch = async () => {
  try {
    const { data } = await request.get('/auth?response_type=token&client_id=client&client_secret=secret&redirect_url=' + encodeURIComponent(location.href))
    return data
  } catch (err) {
    console.log(err)
  }
}

export const deleteArticleFeatch = async (id) => {
  try {
    const data = await request.delete(`/v1/posts/${id}?access_token=${accessToken}`)
    return {
      status: data.status,
      message: 'Article successfully deleted',
      id
    }
  } catch (err) {
    return {
      status: false,
      message: err.message
    }
  }
}
