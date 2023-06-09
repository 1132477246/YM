<template>
  <div class="solution">
    <div class="solution_banner">
      <el-carousel>
        <el-carousel-item v-for="item in bannerArray" :key="item.id">
          <img src="@/assets/solution/banner-back.png" alt="">
          <div class="banner-right-container">
            <div class="banner_text">
              <h4>{{ bannerTemp.title }}</h4>
              <p class="moreHidden">{{ bannerTemp.introduce }}</p>
              <div class="banner_btn">
                <span>立即试用</span>
                <img :src="bannerTemp.icon" alt="">
              </div>
            </div>
            <img class="banner-rightImg" :src="item.img">
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>

    <Title :title-arry="['业务背景','Business background']" />

    <TableList :list="business" />

    <Title :title-arry="['解决方案','Solution']" />

    <TableList :list="solution" :is-show="true" />

    <Title :title-arry="['方案价值','Program Value']" />

    <GirdList :list="programs" />

  </div>
</template>

<script>
import Title from '@/components/title'
import TableList from '@/components/list/TableList'
import GirdList from '@/components/list/GirdList'

export default {
  name: 'Solution',
  components: { Title, TableList, GirdList },
  data() {
    return {
      bannerTemp: {
        title: '信号分析解决方案',
        introduce: '这里是解决方案的简单描述，可展示一行或者两行这里是解决方案的简单描述，可展示一行或者两行这里是解决方案的简单描述，可展示一行或者两行这里是解决方案的简单描述，可展示一行或者两行这里是解决方案的简单描述，可展示一行或者两行这里是解决方案的简单描述，可展示一行或者两行',
        icon: require('@/assets/solution/right@2x.png')
      },
      bannerObj: [
        {
          id: '1-1',
          img: require('@/assets/solution/banner1.png')
        },
        {
          id: '1-2',
          img: require('@/assets/solution/banner2.png')
        },
        {
          id: '1-3',
          img: require('@/assets/solution/banner3.png')
        }
      ],
      business: [
        {
          id: 1,
          content: '业务背景描述业务背景描述业务背景描述业务业务背景描述业务背景描述业务背景描述业务背景业务背景描述业务背景描述'
        }
      ],
      solution: [
        {
          id: 1,
          content: '解决方案解决方案解决方案解决方案解决方案解决方案解决方案解决方案解决方案解决方案解决方案解决方案解决方案解决方案'
        }
      ],
      programs: [
        { id: '1', title: '价值一', introduce: '这里是简单的文字介绍，最多不超过3行，超出用...表示。鼠标悬停在该卡片区域时展示全部内容' },
        { id: '2', title: '价值二', introduce: '这里是简单的文字介绍，最多不超过3行，超出用...表示。鼠标悬停在该卡片区域时展示全部内容' },
        { id: '3', title: '价值三', introduce: '这里是简单的文字介绍，最多不超过3行，超出用...表示。鼠标悬停在该卡片区域时展示全部内容' }
      ]
    }
  },
  computed: {
    bannerArray() {
      const id = this.$route.query.id
      let tmp
      this.bannerObj.forEach(e => {
        if (e.id === id) {
          tmp = e
        }
      })
      return [tmp]
    }
  },
  mounted() {

  }
}
</script>

