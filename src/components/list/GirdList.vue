<template>
  <div class="gridList">
    <div v-for="item in list" :key="item.id" class="listitem">
      <img :src="item.img">
      <div class="list_text">
        <h2>{{ item.title }}</h2>
        <p class="moreHidden moreHidden_3">{{ item.introduce }}</p>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'GirdList',
  props: {
    list: {
      type: Array,
      default: () => {
        return []
      }
    }
  }

}
</script>

<style lang="scss">
@media (max-width: 400px) {
    .banner_btn {
        min-width: 80px !important;
        padding: 10px 0px;
    }
}

.gridList{
    margin:79px 176px 160px 180px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    .listitem{
      display: flex;
      flex-direction: column;
      align-items: center;
      // justify-content: space-around;
      margin-bottom: 33px;
      width: 500px;

      img{
        width: 500px;
        height: 334px;
        background: #e5e5e5;
      }
      .list_text{
        padding-bottom: 56px;
        // width: 500px;
        // height: 283px;
        background: #ffffff;
        border: 1px solid #d8dfe9;
        h2{
          // width: 313px;
          margin:56px auto 0;
          // height: 48px;
          font-size: 32px;
          font-family: Poppins, Poppins-Bold;
          font-weight: 700;
          text-align: CENTER;
          color: #1d2129;
          // line-height: 48px;
        }
        p{
          margin:24px auto 0;
          padding: 0 46px;
          opacity: 0.5;
          font-size: 22px;
          font-family: Poppins, Poppins-Medium;
          font-weight: 500;
          text-align: CENTER;
          color: #45484e;
        }
      }

    }
    .listitem:hover{
      // transform: translateY(-10px);
      // transition:  0.1s;
      // transition-timing-function: ease-in-out;
      cursor: pointer;
      box-shadow: 0px 0px 60px 0px rgba(25,90,148,0.15);
    }
  }

</style>

