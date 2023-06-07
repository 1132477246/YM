<template>
  <div class="newsInfo">
    <div class="news_header">
      <img src="@/assets/news/newsBanner.png" alt="">
    </div>

    <div class="news_content">
      <div v-for="item in newsList" :key="item.id" class="news_list">
        <div class="news_list_left">
          <img src="@/assets/news/time_5@2x.png">
          <span class="news_time">{{ item.createtime?item.createtime.substr(0,10):'' }}</span>
        </div>
        <div class="news_list_mid">
          <div class="news_title">{{ item.newstitle }}</div>
          <p class="news_des moreHidden moreHidden_3">{{ item.shortnewscontent }}</p>
          <div class="news_btn">
            <div class="btn" @click="showDetails(item.id)">查看详情</div>
            <img src="@/assets/news/small_right_blue_5@2x.png">
          </div>
        </div>
        <div class="news_list_right">
          <img :src="item.newsimgurl?ip+item.newsimgurl:baseurl" alt="">
        </div>
      </div>
    </div>

    <el-pagination
      class="white-list-tool"
      background
      layout="prev, pager, next"
      :total="total"
      :current-page.sync="listQuery.pagenum"
      :page-size="listQuery.pagesize"
      @size-change="pagination"
      @current-change="pagination"
    />
  </div>
</template>

<script>
import { newsList } from '@/api/news'

export default {
  name: 'NewsIndex',
  data() {
    return {
      total: 100,
      newsList: [],
      listQuery: {
        pagenum: 1,
        pagesize: 10
      },
      baseurl: require('@/assets/about/24.png')

    }
  },
  computed: {
    ip() {
      const len = process.env.VUE_APP_BASE_SERVICE.length
      return process.env.VUE_APP_BASE_SERVICE.substring(0, len - 5)
    }
  },
  created() {
    this.getnewsList()
  },
  methods: {
    showDetails(id) {
      this.$router.push({ path: '/news/details', query: { id: id }})
    },
    getnewsList() {
      newsList(this.listQuery).then(res => {
        if (res.code === 200) {
          this.newsList = res.data.object
          this.total = res.data.total
        }
      })
    },
    pagination() {
      this.getnewsList()
    }
  }
}
</script>

