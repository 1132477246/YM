<template>
  <div class="partners">
    <div class="partners_header">
      <div class="header_img">
        <img src="@/assets/partners/banner.png" alt="">
      </div>
      <div class="header_text">
        <div>
          <h3>合作伙伴</h3>
          <h4>Partners</h4>
        </div>
      </div>
    </div>
    <div class="partners_mid">
      <ul>
        <li v-for="item in imgList" :key="item.id">
          <div :class="item.title?'mid_grid':''">
            <img :src="item.img" alt="">
            <h3 v-if="item.title" :class="item.title?'mid_title':''">{{ item.title }}</h3>
          </div>

        </li>
      </ul>
    </div>
    <div class="partners_bot" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgList: [
        { id: '1', img: require('@/assets/partners/img60.png') },
        { id: '2', img: require('@/assets/partners/img61.png') },
        { id: '3', img: require('@/assets/partners/img2.png') },
        { id: '4', img: require('@/assets/partners/img62.png') },
        { id: '5', img: require('@/assets/partners/img63.png') },
        { id: '6', img: require('@/assets/partners/img64.png'), title: '航天工程大学' },
        { id: '7', img: require('@/assets/partners/img67.png'), title: '陆军航空学院' },
        { id: '8', img: require('@/assets/partners/img66.png'), title: '中国人民火箭军' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.partners{
    margin-top:100px;
    margin-bottom: 160px;
    .partners_header{
        position: relative;
        .header_img{
            width: 100%;
            height: 720px;
            img{
                width: 100%;
                height: 100%;
                object-fit: fill;
            }
        }
        .header_text{
            width: 336px;
            height: 190px;
            background: rgba(255,255,255,0.20);
            backdrop-filter: blur(20px);
            position: absolute;
            top:190px;
            left: 50%;
            transform: translateX(-50%);
            div{
                padding: 40px 80px;
                h3{
                    font-size: 44px;
                    font-family: Poppins, Poppins-Bold;
                    font-weight: 700;
                    text-align: center;
                    color: #1d2129;
                    text-shadow: 0px 4px rgba(255,255,255,0.25);
                }
                h4{
                    font-size: 44px;
                    font-family: Poppins, Poppins-Bold;
                    font-weight: 700;
                    text-align: center;
                    color: #ffffff;
                    text-shadow: 0px 4px rgba(255,255,255,0.25);
                }
            }

        }
    }
    .partners_mid{
        width: 1564px;
        height: 628px;
        margin: auto;
        background: #ffffff;
        box-shadow: 0px 0px 60px 0px rgba(25,90,148,0.15);
        position: absolute;
        top: 620px;
        left: 50%;
        transform: translateX(-50%);
        padding: 90px;
        ul{
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
        }
        .mid_grid{
            position: absolute;
            width: 310px;
            height: 200px;
            margin: auto;
        }
        li{
            width: 310px;
            height: 200px;
            margin: auto;
            background: #ffffff;
            box-shadow: 0px 0px 60px 0px rgba(25,90,148,0.15);
            // margin-right: 48px;
            margin-bottom: 48px;
        }
        img{
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
        h3{
          // width: 144px;
          // height: 36px;
          font-size: 24px;
          font-family: Poppins, Poppins-Bold;
          font-weight: 700;
          text-align: center;
          color: #1d2129;
          line-height: 36px;
        }
        .mid_title{
          position: relative;
          top: -60px;
          left: 0;
        }
    }
    .partners_bot{
        width: 100%;
        height: 568px;
        background: #ffffff;
    }

}
</style>
b
