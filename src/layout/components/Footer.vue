<template>

  <div class="footerBox">
    <img class="footerBox_bgImg" src="@/assets/img/footer.png" alt="">
    <div class="container footerContentBox">
      <div class="footerFlex">
        <div class="footerUlBox">
          <ul>
            <li v-for=" item in footerObj.solution" :key="item.index">{{ item.name }}</li>

          </ul>
        </div>
        <div class="footerUlBox">
          <ul class="textCenter">
            <li v-for=" item in footerObj.product" :key="item.index">{{ item.name }}</li>

          </ul>
        </div>
        <div class="footerUlBox">
          <ul class="textCenter">
            <li v-for=" item in footerObj.new" :key="item.index" @click="toPage">{{ item.name }}</li>
          </ul>
        </div>

      </div>
      <div class="contact">
        <div class="wx">
          <div>
            <img class="icon" src="" alt="">
            关注官方微信
          </div>
          <div>
            <img class="wxImg" src="" alt="">
          </div>
        </div>

        <div class="ContactInformation">
          <ul class="ContactInformation_ul">
            <li v-for=" item in footerObj.contact" :key="item.index">
              <img v-if="item.img" :src="item.img" alt="">
              {{ item.name }}
            </li>

          </ul>
        </div>
      </div>

    </div>

  </div>

</template>
<script >

export default {
  name: 'Footer',

  data() {
    return {
      footerObj: {
        solution: [
          {
            path: '',
            name: '解决方案'
          },
          {
            path: '',
            name: '信号分析解决方案'
          }, {
            path: '',
            name: '训练系统解决方案'
          }, {
            path: '',
            name: '人工智能解决方案'
          }
        ],
        product: [
          {
            path: '',
            name: '产品介绍'
          },
          {
            path: '',
            name: '卫星信号分析'
          }, {
            path: '',
            name: '通信信号分析'
          }, {
            path: '',
            name: '训练系统'
          }, {
            path: '',
            name: 'AI平台开发'
          }
        ],
        new: [
          {
            path: '',
            name: '关于我们'
          },
          {
            path: '',
            name: '公司介绍'
          }, {
            path: '',
            name: '联系我们'
          }, {
            path: '',
            name: '合作伙伴'
          }
        ],
        contact: [
          {

            name: '联系我们'
          }, {
            img: require('@/assets/img/call.png'),
            name: '010-88888888'
          }, {
            img: require('@/assets/img/email.png'),
            name: '15936299999@163.com	'
          }, {
            img: require('@/assets/img/address.png'),
            name: '北京市海淀区安宁庄东路2号楼710'
          }
        ]
      }

    }
  },
  methods: {
    toPage() {
      console.log(1)
    }
  }
}
</script>

<style>

</style>
