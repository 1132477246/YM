<template>
  <div class="homeContent">

    <div class="banner">
      <!-- <img src="@/assets/img/banner.png" alt=""> -->
      <el-carousel height="720px" @change="bannerChange">
        <el-carousel-item v-for="item in bannerObj" :key="item.id">
          <img :src="item.img" alt="">
        </el-carousel-item>
      </el-carousel>
    </div>

    <div class="solutionBox">
      <div class="titleBox container">
        <div class="titleFrist">解决方案</div>
        <div class="titleTow">solution</div>
      </div>

      <div class="solutionContentBox container">

        <!-- <el-row :gutter="20">
      <el-col  :sm="24" :md="8"  :xl="8" v-for="item in solutionBoxList" :key="item.id"> -->
        <div v-for="item in solutionBoxList" :key="item.id" class="solutionBoxList">
          <div class="img">
            <img :src="item.img" alt="">
          </div>
          <div class="contentBox">
            <div class="title">{{ item.title }}</div>
            <div class="content">
              {{ item.content }}
            </div>
          </div>
          <div class="deails">
            <div class="deailsContent">
              <div class="title">查看详情</div>
              <div>></div>
            </div>
          </div>
        </div>
        <!-- </el-col>

    </el-row> -->

      </div>
    </div>

    <div class="productBox">
      <div class="titleBox container">
        <div class="titleFrist">产品介绍</div>
        <div class="titleTow">Product Introduction</div>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: 'HomeIndex',
  data() {
    return {
      solutionBoxList: [{
        id: '1',
        title: '信号分析解决方案',
        content: '这里是简单的文字介绍，最多不超过3行，超出用...表示。鼠标悬停在该卡片区域时,展示全部内容',
        img: require('@/assets/img/solutionone.png')
      }, {
        id: '2',
        title: '信号分析解决方案',
        content: '这里是简单的文字介绍，最多不超过3行，超出用...表示。鼠标悬停在该卡片区域时,展示全部内容',
        img: require('@/assets/img/solutionone.png')
      }, {
        id: '3',
        title: '信号分析解决方案',
        content: '这里是简单的文字介绍，最多不超过3行，超出用...表示。鼠标悬停在该卡片区域时,展示全部内容',
        img: require('@/assets/img/solutionone.png')
      }],
      bannerObj: [
        {
          id: '1',
          img: require('@/assets/img/banner.png')
        }, {
          id: '2',
          img: require('@/assets/img/banner.png')
        }, {
          id: '3',
          img: require('@/assets/img/banner.png')
        }
      ]
    }
  },
  methods: {
    bannerChange(val) {
      console.warn(val)
    }
  }
}
</script>

<style>
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>

