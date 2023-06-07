<template>
  <div class="about">
    <div class="about_header">
      <div class="header_img">
        <img src="@/assets/about/about-us.png">
      </div>
      <div class="header_title">
        <p>无线电频谱智能检测领域的技术先行者     核心服务商</p>
      </div>
    </div>
    <div class="mid-container">
      <div class="about_mid">
        <div class="mid_text">
          <Title class="mid_title" :title-arry="['关于扬铭','About us']" :is-row="true" />
          <p>{{ aboutUs.introduce }}</p>
        </div>
        <div class="mid_img">
          <img :src="aboutUs.img" alt="">
        </div>
      </div>
    </div>
    <div class="about_bot-container">
      <div class="about_bot">
        <Title class="bot_title" :title-arry="['企业文化','corporate culture']" :is-row="true" />
        <div class="bot_content">
          <div v-for="item in cultures" :key="item.id" class="bot_grid">
            <div v-show="item.isShow" class="grid_title">
              <div>{{ item.title }}</div>
            </div>
            <img :src="item.img" alt="">
            <div v-show="!item.isShow" class="grid_title">
              <div>{{ item.title }}</div>
            </div>
          <!-- <h2>{{ item.title }}</h2> -->
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import Title from '@/components/title'

export default {
  name: 'About',
  components: { Title },
  data() {
    return {
      aboutUs: {
        img: require('@/assets/about/Rectangle@2x.png'),
        introduce: `北京扬铭科技发展有限责任公司是一家专门从事通信电子战方向的国家高新技术企业，主要开展无线电信号监测、接收、解调、处理等设备研制生产、系统集成及咨询服务。公司成立于2015年2月，位于北京市中关村东升科技园，注册资金1900余万元人民币。公司致力于成为无线电频谱智能监测领域的技术先行者、核心服务商。截止目前，已承担多项国防装备系统配套设备研制生产,，多项技术成果在民用市场有广泛的应用前景2020年12月完成A轮融资;2021年5月分别在上海、无锡、成都等地成立分子公司;2022年3月完成B轮融资。`
      },
      cultures: [
        { id: '1', title: '信誉', img: require('@/assets/about/46.png'), isShow: true },
        { id: '2', title: '质量', img: require('@/assets/about/Rectangle_1@2x.png'), isShow: false },
        { id: '3', title: '创新', img: require('@/assets/about/Rectangle_2@2x.png'), isShow: true },
        { id: '4', title: '共赢', img: require('@/assets/about/24.png'), isShow: false }
      ]
    }
  }
}
</script>
