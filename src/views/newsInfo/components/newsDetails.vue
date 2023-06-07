<template>
  <div class="newdetails">
    <div class="details_header-container">
      <div class="details_header">
        <div class="details_top">
          <!-- <div class=""> -->
          <img src="@/assets/news/icon_left-small@2x.png" alt="" @click="goback">
          <span class="details_back">{{ title }}</span>
          <!-- </div> -->
          <div class="details_title">{{ details.newstitle }}</div>
        </div>
        <div class="details_img">
          <img :src="ip+details.newsimgurl">
        </div>
      </div>
    </div>

    <div class="details_mid">
      <div class="mid_top">
        <img src="@/assets/news/time_5@2x.png">
        <span>{{ details.createtime?details.createtime.substr(0,10):'' }}</span>
      </div>
      <div class="mid_content" v-html="details.newscontent" />
    </div>

  </div>
</template>

<script>
import { newsDetails } from '@/api/news'

export default {
  name: 'NewsDetails',
  data() {
    return {
      title: '全部新闻',
      details: { }
    }
  },
  computed: {
    ip() {
      const len = process.env.VUE_APP_BASE_SERVICE.length
      return process.env.VUE_APP_BASE_SERVICE.substring(0, len - 5)
    }
  },
  created() {
    if (this.$route.query.id) {
      this.getnewsDetails()
    }
  },
  methods: {
    goback() {
      this.$router.go(-1)
    },
    getnewsDetails() {
      const id = this.$route.query.id
      newsDetails({ id: id }).then(res => {
        if (res.code === 200) {
          this.details = res.data.object
        }
      })
    }
  }
}
</script>
