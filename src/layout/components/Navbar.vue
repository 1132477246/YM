<template>
  <div class="navMain">
    <div class="nav container">
      <div class="navlog">
        <div>
          <img class="navLogoImg" src="@/assets/img/logo.png" alt="">
        </div>
        <div><img src="@/assets/img/logoName.png" alt=""></div>
      </div>
      <div class="navlist">
        <ul>
          <li v-for="item in navlist" :key="item.id"><a href="" @click.prevent="handleOpen(item)">{{ item.title }}</a></li>
          <!-- <li><a href="">解决方案</a></li>
          <li><a href="">产品介绍</a></li>
          <li><a href="">新闻资讯</a></li>
          <li><a href="">关于我们</a></li> -->
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      navlist: [
        { id: '0', title: '首页', path: '/' },
        { id: '1', title: '解决方案', path: '/solution/index' },
        { id: '2', title: '产品介绍', path: '/products/index' },
        { id: '3', title: '新闻资讯', path: '/news/index' },
        { id: '4', title: '关于我们', path: '/about/index' }
      ]
    }
  },
  methods: {
    handleOpen(item) {
      this.$router.push(item.path)
    }
  }
}
</script>

