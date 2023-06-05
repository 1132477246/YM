<template>
  <div class="homeContent">
    <div class="banner">
      <!-- <img src="@/assets/img/banner.png" alt=""> -->
      <el-carousel>
        <el-carousel-item v-for="item in bannerObj" :key="item.id">
          <img :src="item.img" alt="">
        </el-carousel-item>
      </el-carousel>
    </div>

    <div class="solutionBox container">

      <Title :title-arry="['解决方案', 'solution']" />

      <div class="solutionContentBox">
        <!-- <el-row :gutter="20">
      <el-col  :sm="24" :md="8"  :xl="8" v-for="item in solutionBoxList" :key="item.id"> -->
        <div
          v-for="item in solutionBoxList"
          :key="item.id"
          class="solutionBoxList"
        >
          <div class="img">
            <img :src="item.img" alt="">
          </div>
          <div class="contentBox">
            <div class="title oneHidden">{{ item.title }}</div>
            <div class="content moreHidden moreHidden_3">
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
      <div class="container">
        <Title :title-arry="['产品介绍', 'Product Introduction']" />
        <div class="productBoxLi">
          <ul>
            <li v-for="item in productObj" :key="item.id" :class="Number(bannerId)===Number(item.id)?'active':'2'">
              <img :src="item.img" alt="">
              <div class="listTitle">{{ item.title }}</div>
              <div class="listUnderline" />
            </li>
          </ul>
        </div>
      </div>

      <div class="productBoxContent">

        <div class="productImgBox">
          <el-carousel indicator-position="none" :interval="1000" :autoplay="false" @change="bannerChange">
            <el-carousel-item
              v-for="item in productImgBannerObj"
              :key="item.id"
            >
              <div class="textBox">
                <div class="title">{{ productContent.title }}</div>
                <div class="content moreHidden moreHidden_4">
                  {{ productContent.content }}
                </div>
                <div class="characteristic">
                  <div class="characteristic_title_box">
                    <div class="characteristic_title_box_title">产品特点</div>
                    <div class="br" />
                  </div>
                  <div class="characteristic_label">
                    <ul class="characteristic_label_ul">
                      <li v-for="items in productContent.label " :key="items.id">{{ items }}</li>
                    </ul>
                  </div>
                </div>
                <div class="productBoxContent_details">查看详情 ></div>
              </div>
              <img :src="item.img" alt="" class="productImgBox_img">
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
    </div>

    <div class="newBox container">
      <Title :title-arry="['新闻咨询', 'News']" />
      <div>
        <ul class="newBox_ul">
          <li v-for="item in newBoxOne " :key="item.index" class="newBox_ul_li">
            <div class="newBox_img">
              <img :src="item.img" alt="">
            </div>
            <div class="newBox_text_box">
              <div class="newBox_title oneHidden">{{ item.title }}</div>
              <div class="newBox_mainText moreHidden moreHidden_4">{{ item.text }}</div>
              <div class="newBox_time_box">
                <img src="@/assets/img/time.png" alt="">
                <div class="newBox_time"> {{ item.time }}</div>
              </div>
            </div>
          </li>
        </ul>

        <ul class="newBox_ul_tow">
          <li v-for="item in newBoxTow " :key="item.index" class="newBox_ul_li_tow">
            <div class="newBox_icon" />
            <div class="newBox_text_box_tow">
              <div class="newBox_title_tow oneHidden">{{ item.title }}</div>

              <div class="newBox_time_box_tow">
                <img src="@/assets/img/time.png" alt="">
                <div class="newBox_time"> {{ item.time }}</div>
              </div>
            </div>
          </li>
        </ul>

        <!-- <div class="getAll">
          查看全部
          <img src="@/assets/img/right.png">
        </div> -->
        <el-button class="getAll" type="primary">查看全部  <img src="@/assets/img/right.png"></el-button>

      </div>
    </div>

  </div>
</template>

<script>
import Title from '@/components/title'
export default {
  name: 'HomeIndex',
  components: { Title },
  data() {
    return {
      solutionBoxList: [
        {
          id: '1',
          title: '信号分析解决方案',
          content:
            '这里是简单的文字介绍，最多不超过3行，超出用...表示。鼠标悬停在该卡片区域时,展示全部内容',
          img: require('@/assets/img/solutionone.png')
        },
        {
          id: '2',
          title: '信号分析解决方案',
          content:
            '这里是简单的文字介绍，最多不超过3行，超出用...表示。鼠标悬停在该卡片区域时,展示全部内容',
          img: require('@/assets/img/solutionone.png')
        },
        {
          id: '3',
          title: '信号分析解决方案',
          content:
            '这里是简单的文字介绍，最多不超过3行，超出用...表示。鼠标悬停在该卡片区域时,展示全部内容',
          img: require('@/assets/img/solutionone.png')
        }
      ],
      bannerObj: [
        {
          id: '1',
          img: require('@/assets/img/banner.png')
        },
        {
          id: '2',
          img: require('@/assets/img/banner.png')
        },
        {
          id: '3',
          img: require('@/assets/img/banner.png')
        }
      ],
      productImgBannerObj: [
        {
          id: '1',
          img: require('@/assets/img/product_banner_wx.png')
        },
        {
          id: '2',
          img: require('@/assets/img/product_banner_tx.png')
        },
        {
          id: '3',
          img: require('@/assets/img/product_banner_xl.png')
        }, {
          id: '4',
          img: require('@/assets/img/product_banner_ai.png')
        }
      ],
      productObj: [
        {
          id: '1',
          title: '卫星信号分析',
          img: require('@/assets/img/product_wx.png')
        },
        {
          id: '2',
          title: '通信信号分析  ',
          img: require('@/assets/img/product_tx.png')
        },
        {
          id: '3',
          title: '训练系统',
          img: require('@/assets/img/product_xl.png')
        },
        {
          id: '4',
          title: 'AI开发平台',
          img: require('@/assets/img/product_ai.png')
        }
      ],
      productObjContent: [
        {
          id: '1',
          title: '卫星信号分析',
          content: '1通过分析多路径效应可知，BDS-3卫星各个信号中不存在与高度角有关的系统偏差。BDS-3最简系统卫星观测数据质量与GPSL1/L5和GalileoE1/E5a相当，能够满足北斗卫',
          label: ['精确几乎无失误', '产品特点最多十个字', '边框宽距文字24px']

        }, {
          id: '2',
          title: '通信信号分析',
          content: '2通过分析多路径效应可知，BDS-3卫星各个信号中不存在与高度角有关的系统偏差。BDS-3最简系统卫星观测数据质量与GPSL1/L5和GalileoE1/E5a相当，能够满足北斗卫',
          label: ['精确几乎无失误', '产品特点最多十个字', '边框宽距文字24px']

        }, {
          id: '3',
          title: '训练系统',
          content: '3通过分析多路径效应可知，BDS-3卫星各个信号中不存在与高度角有关的系统偏差。BDS-3最简系统卫星观测数据质量与GPSL1/L5和GalileoE1/E5a相当，能够满足北斗卫',
          label: ['精确几乎无失误', '产品特点最多十个字', '边框宽距文字24px']

        }, {
          id: '4',
          title: 'Al开发平台',
          content: '4通过分析多路径效应可知，BDS-3卫星各个信号中不存在与高度角有关的系统偏差。BDS-3最简系统卫星观测数据质量与GPSL1/L5和GalileoE1/E5a相当，能够满足北斗卫',
          label: ['精确几乎无失误', '产品特点最多十个字', '边框宽距文字24px']

        }

      ],
      productContent: '',
      newBox: [
        {
          img: require('@/assets/img/new1.png'),
          title: '今日扬铭科技获得一亿元融资',
          text: '扬铭科技是一家计算机软硬件销售商。业务涵盖技术开发、技术咨询、技术转让、技术服务;销售通讯设备、计算机、软件及辅助设备、电子产品、五金交电、工艺品;生产通讯设备、机械设',
          time: '06.01/2023'
        }, {
          img: require('@/assets/img/new2.png'),
          title: '今日扬铭科技获得一亿元融资',
          text: '扬铭科技是一家计算机软硬件销售商。业务涵盖技术开发、技术咨询、技术转让、技术服务;销售通讯设备、计算机、软件及辅助设备、电子产品、五金交电、工艺品;生产通讯设备、机械设',
          time: '06.01/2023'
        }, {
          img: require('@/assets/img/solutionThree.png'),
          title: '今日扬铭科技获得一亿元融资',
          text: '扬铭科技是一家计算机软硬件销售商。业务涵盖技术开发、技术咨询、技术转让、技术服务;销售通讯设备、计算机、软件及辅助设备、电子产品、五金交电、工艺品;生产通讯设备、机械设',
          time: '06.01/2023'
        }, {
          img: require('@/assets/img/solutionThree.png'),
          title: '今日扬铭科技获得一亿元融资',
          text: '扬铭科技是一家计算机软硬件销售商。业务涵盖技术开发、技术咨询、技术转让、技术服务;销售通讯设备、计算机、软件及辅助设备、电子产品、五金交电、工艺品;生产通讯设备、机械设',
          time: '06.01/2023'
        }, {
          img: require('@/assets/img/solutionThree.png'),
          title: '今日扬铭科技获得一亿元融资',
          text: '扬铭科技是一家计算机软硬件销售商。业务涵盖技术开发、技术咨询、技术转让、技术服务;销售通讯设备、计算机、软件及辅助设备、电子产品、五金交电、工艺品;生产通讯设备、机械设',
          time: '06.01/2023'
        }, {
          img: require('@/assets/img/solutionThree.png'),
          title: '今日扬铭科技获得一亿元融资',
          text: '扬铭科技是一家计算机软硬件销售商。业务涵盖技术开发、技术咨询、技术转让、技术服务;销售通讯设备、计算机、软件及辅助设备、电子产品、五金交电、工艺品;生产通讯设备、机械设',
          time: '06.01/2023'
        }
      ],
      newBoxOne: [],
      newBoxTow: [],
      bannerId: ''

    }
  },
  created() {
    this.bannerChange(0)
    this.newBoxOne = this.newBox.slice(0, 2)
    this.newBoxTow = this.newBox.slice(2)
  },
  methods: {
    bannerChange(val) {
      console.warn(val)
      this.bannerId = val + 1
      this.productContent = this.productObjContent[val]
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

