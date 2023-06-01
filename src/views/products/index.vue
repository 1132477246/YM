<template>
  <div class="products">
    <div class="products_header">
      <div>产品名称</div>
      <p>这里是产品的简单描述，可展示一行或者两行</p>
    </div>
    <Title :title-arry="['产品简介', 'Product Introduction']" />

  </div>
</template>

<script>
import Title from '@/components/title'

export default {
  components: { Title },
  data() {
    return {
    }
  }
}
</script>

<style lang='scss' scoped>
.products{
    margin-top:100px;
    margin-bottom: 160px;
    .products_header{
        // width: 1919px;
        height: 720px;
        background: #f2f4f7;
        background-image: url(require('@/assets/news/newsBanner.png'));
        margin-bottom: 160px;
        div{
            width: 384px;
            height: 117px;
            font-size: 96px;
            font-family: Montserrat, Montserrat-Regular;
            font-weight: 400;
            text-align: LEFT;
            color: #1d2129;
            line-height: 117px;
        }
        p{
            width: 750px;
            height: 144px;
            font-size: 48px;
            font-family: Montserrat, Montserrat-Regular;
            font-weight: 400;
            text-align: LEFT;
            color: #45484e;
            line-height: 72px;
            letter-spacing: -0.07px;
        }
    }
}
</style>
