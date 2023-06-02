<template>
  <div class="tablelist">
    <div v-for="item in list" :key="item.id" class="listitem">
      <p v-show="isShow">{{ item.content }}</p>

      <img :src="item.img">
      <!-- <div> -->
      <p v-show="!isShow">{{ item.content }}</p>
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'TableList',
  props: {
    list: {
      type: Array,
      default: () => {
        return []
      }
    },
    isShow: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss">
  .tablelist{
    margin:0 178px;
    margin-bottom: 153px;
    .listitem{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        width: 1564px;
        height: 440px;
        background: #f2f4f7;
        img{
            width: 750px;
            height: 440px;
            background: #e5e5e5;
        }
        p{
            max-width: 654px;
            // height: 144px;
            margin: auto;
            font-size: 32px;
            font-family: Montserrat, Montserrat-Regular;
            font-weight: 400;
            text-align: left;
            color: #4e5969;
            // line-height: 48px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: normal !important;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            display: -webkit-box;
        }
    }
}
</style>
