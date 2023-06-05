<template>
  <div class="partners">
    <div class="partners_header">
      <div class="header_img">
        <img src="@/assets/partners/banner.png" alt="">
      </div>
      <div class="header_text">
        <div>
          <h3>合作伙伴</h3>
          <h4>Partners</h4>
        </div>
      </div>
    </div>
    <div class="partners_mid">
      <ul>
        <li v-for="item in imgList" :key="item.id">
          <div :class="item.title?'mid_grid':''">
            <img :src="item.img" alt="">
            <h3 v-if="item.title" :class="item.title?'mid_title':''">{{ item.title }}</h3>
          </div>

        </li>
      </ul>
    </div>
    <div class="partners_bot" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgList: [
        { id: '1', img: require('@/assets/partners/img60.png') },
        { id: '2', img: require('@/assets/partners/img61.png') },
        { id: '3', img: require('@/assets/partners/img2.png') },
        { id: '4', img: require('@/assets/partners/img62.png') },
        { id: '5', img: require('@/assets/partners/img63.png') },
        { id: '6', img: require('@/assets/partners/img64.png'), title: '航天工程大学' },
        { id: '7', img: require('@/assets/partners/img67.png'), title: '陆军航空学院' },
        { id: '8', img: require('@/assets/partners/img66.png'), title: '中国人民火箭军' }
      ]
    }
  }
}
</script>

