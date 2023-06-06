import request from '@/utils/request'

// 新闻列表
export function newsList(query) {
  return request({
    url: '/open/getNewsList',
    method: 'get',
    params: query
  })
}

// 新闻详情
export function newsDetails(query) {
  return request({
    url: '/open/getNewsDetail',
    method: 'get',
    params: query
  })
}

