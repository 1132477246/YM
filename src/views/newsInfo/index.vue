<template>
  <div class="newsInfo">
    <!-- <div class="news_header"> -->
    <img src="@/assets/news/newsBanner.png" alt="">
    <!-- </div> -->

    <div class="news_content">
      <div v-for="item in newsList" :key="item.id" class="news_list">
        <div class="news_list_left">
          <img :src="item.icon">
          <span class="news_time">{{ item.time }}</span>
        </div>
        <div class="news_list_mid">
          <div class="news_title">{{ item.title }}</div>
          <p class="news_des moreHidden moreHidden_3">{{ item.describtion }}</p>
          <div class="news_btn">
            <div class="btn" @click="showDetails">查看详情</div>
            <img src="@/assets/news/small_right_blue_5@2x.png">
          </div>
        </div>
        <div class="news_list_right">
          <img :src="item.img" alt="">
        </div>
      </div>
    </div>

    <el-pagination
      class="white-list-tool"
      background
      layout="prev, pager, next"
      :total="total"
    />
  </div>
</template>

<script>
export default {
  name: 'NewsIndex',
  data() {
    return {
      total: 100,
      newsList: [
        { id: 0,
          title: '今日扬铭科技获得一亿元融资',
          describtion: '扬铭科技是一家计算机软硬件销售商。业务涵盖技术开发、技术咨询、技术转让、技术服务；销售通讯设备、计算机、软件及辅助设备、电子产品、五金交电、工艺品；生产通讯设备、机械设备业务涵盖技术开发、技术咨询、技术转让、技术服务；销售通讯设备、销售通讯设备...',
          img: require('@/assets/about/24.png'),
          time: '06.01/2023',
          icon: require('@/assets/news/time_5@2x.png')
        },
        { id: 1,
          title: '今日扬铭科技获得一亿元融资',
          describtion: '扬铭科技是一家计算机软硬件销售商。业务涵盖技术开发、技术咨询、技术转让、技术服务；销售通讯设备、计算机、软件及辅助设备、电子产品、五金交电、工艺品；生产通讯设备、机械设备业务涵盖技术开发、技术咨询、技术转让、技术服务；销售通讯设备、销售通讯设备...',
          img: require('@/assets/about/24.png'),
          time: '06.01/2023',
          icon: require('@/assets/news/time_5@2x.png')
        },
        { id: 2,
          title: '今日扬铭科技获得一亿元融资',
          describtion: '扬铭科技是一家计算机软硬件销售商。业务涵盖技术开发、技术咨询、技术转让、技术服务；销售通讯设备、计算机、软件及辅助设备、电子产品、五金交电、工艺品；生产通讯设备、机械设备业务涵盖技术开发、技术咨询、技术转让、技术服务；销售通讯设备、销售通讯设备...',
          img: require('@/assets/about/24.png'),
          time: '06.01/2023',
          icon: require('@/assets/news/time_5@2x.png')
        },
        { id: 3,
          title: '今日扬铭科技获得一亿元融资',
          describtion: '扬铭科技是一家计算机软硬件销售商。业务涵盖技术开发、技术咨询、技术转让、技术服务；销售通讯设备、计算机、软件及辅助设备、电子产品、五金交电、工艺品；生产通讯设备、机械设备业务涵盖技术开发、技术咨询、技术转让、技术服务；销售通讯设备、销售通讯设备...',
          img: require('@/assets/about/24.png'),
          time: '06.01/2023',
          icon: require('@/assets/news/time_5@2x.png')
        },
        { id: 4,
          title: '今日扬铭科技获得一亿元融资',
          describtion: '扬铭科技是一家计算机软硬件销售商。业务涵盖技术开发、技术咨询、技术转让、技术服务；销售通讯设备、计算机、软件及辅助设备、电子产品、五金交电、工艺品；生产通讯设备、机械设备业务涵盖技术开发、技术咨询、技术转让、技术服务；销售通讯设备、销售通讯设备...',
          img: require('@/assets/about/24.png'),
          time: '06.01/2023',
          icon: require('@/assets/news/time_5@2x.png')
        }
      ]
    }
  },
  methods: {
    showDetails() {
      this.$router.push('/news/details')
    }
  }
}
</script>

