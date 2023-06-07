<template>
  <div class="newdetails">
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
      details: {
        title: '今日扬铭科技获得一亿元融资获得一亿元融资',
        img: require('@/assets/news/newsInfo.png'),
        content: `5月16日，国家统计局数据显示，前四月商品房销售额同比增长8.8%，其中住宅销售额增长11.8%，整体好于去年。与此同时，房屋竣工面积也持续保持高增长，竣工累计增速较1-3月提升4.1个百分点，前四月增长18.8%。（数据来源：国家统计局）<br/><br/>
不过，市场也存在隐忧。比如4月销售数据却由涨转跌，未能延续2月、3月的复苏态势。开发投资规模和新开工面积稍显疲弱，分别同比下跌6.2%、5.6%。<br/><br/>
“弱复苏、强分化的判断依旧适用。”对于这份成绩单，中金公司判断称，销售边际走弱与积压释放需求渐近尾声有关，同时成交结构正逐步向超高、高能级城市偏移，预计房企未来投资，或将延续强度偏保守和择城整体审慎。<br/><br/>
国信证券的判断与之类似，“尽管是弱复苏，但当前时点，销售复苏已成趋势，优质房企业绩复苏近在咫尺。”<br/><br/>
寻找确定性市场、做确定性业务，成为当下房企的共同选择。这集中体现在各家对于重点城市核心板块土地资源的争夺，以及收缩多元化业务、回归并深耕主业。<br/><br/>
显然，这一背景下，优质房企更具优势。在同策研究院研究总监宋红卫的视角中，2023年来看，Top20房企成员相比于去年已经发生比较大的变化，融资能力强、信用较好及深耕重点区域的房企更具备优势。<br/><br/>
这其中，作为为数不多的优质民营房企，碧桂园融资渠道通畅，财务稳健，并且有着韧性十足的业务策略布局，在面对当下“弱复苏”的市场环境自然会从容很多。`,
        time: '06.01/2023'
      }
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
        console.log(res)
        if (res.code === 200) {
          this.details = res.data.object
        }
      })
    }
  }
}
</script>
