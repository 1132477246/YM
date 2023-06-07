import request from '@/utils/request'

// 首页
export function GetRotationChartList(query) {
  return request({
    url: '/open/getRotationChartList',
    method: 'get',
    params: query
  })
}

