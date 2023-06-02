<template>
  <div class="contact">
    <div class="contact_header">
      <img src="@/assets/contact/banner.png" alt="">
    </div>

    <Title :title-arry="['联系我们','Contact Us']" />

    <div class="contact_mid">
      <div class="mid_list">
        <div class="mid_left">
          <h2>北京扬铭科技发展有限责任公司</h2>
          <div class="left_text">
            <p><img src="@/assets/contact/call@2x.png"><span>010-88888888</span></p>
            <p><img src="@/assets/contact/email_2@2x.png"><span>15936299999@163.com</span></p>
            <p><img src="@/assets/contact/address@2x.png"><span>北京市海淀区安宁庄东路2号楼710</span></p>
          </div>
        </div>
        <div id="container" class="mid_right" />
      </div>
      <div class="mid_list grid">
        <div class="mid_left">
          <h2>北京扬铭科技发展有限责任公司无锡分公司</h2>
          <div class="left_text">
            <p><img src="@/assets/contact/call@2x.png"><span>010-88888888</span></p>
            <p><img src="@/assets/contact/email_2@2x.png"><span>15936299999@163.com</span></p>
            <p><img src="@/assets/contact/address@2x.png"><span>无锡市滨湖区绣溪路58-9号二层202</span></p>
          </div>
        </div>
        <div class="mid_right" />
      </div>

    </div>

    <Title :title-arry="['在线留言','Online Message']" />

  </div>
</template>

<script>
import Title from '@/components/title'

export default {
  components: { Title },
  data() {
    return {}
  },
  mounted() {
  },
  methods: {
    initMap() {
    //   const map = new BMapGL.Map('container')
    }
  }
}
</script>

<style lang="scss" scoped>
.contact{
    margin-top:100px;
    margin-bottom: 160px;
    .contact_header{
        width: 100%;
        height: 720px;
        margin-bottom: 160px;
        img{
            width: 100%;
            height: 100%;
            object-fit: fill;
        }
    }
    .contact_mid{
        margin:80px 178px 0px;
        .grid{
            margin-top: 32px;
        }
        .mid_list{
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            width: 1565px;
            height: 450px;
            background: #ffffff;
            border: 1px solid #d8dfe9;
            .mid_left{
                padding: 80px 80px 0 80px;
                h2{
                    // width: 490px;
                    // height: 48px;
                    font-size: 32px;
                    font-family: Poppins, Poppins-Bold;
                    font-weight: 700;
                    text-align: LEFT;
                    color: #1d2129;
                    line-height: 48px;
                    letter-spacing: 0.32px;
                }
                .left_text{
                    margin-top: 80px;
                    p{
                        display: flex;
                        align-items: center;
                        img{
                            width: 32px;
                            height: 32px;
                        }
                        span{
                            // width: 226px;
                            // height: 60px;
                            // background: #4e5969;
                            margin-left: 16px;
                            padding:14px 0;
                            font-size: 26px;
                            font-family: Montserrat, Montserrat-SemiBold;
                            font-weight: normal;
                            text-align: LEFT;
                            color: #4e5969;
                            // line-height: 60px;
                            letter-spacing: 0.31px;
                        }
                    }
                }
            }
            .mid_right{
                width: 915px;
                height: 450px;
            }
        }

    }
}
</style>
