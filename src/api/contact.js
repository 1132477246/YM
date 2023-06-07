import request from '@/utils/request'

// 意见反馈
export function addFeedBack(data) {
  return request({
    url: '/open/addFeedBack',
    method: 'post',
    headers: { 'content-type': 'application/json' },
    data
  })
}

