<template>
  <div class="app-wrapper">
    <Navbar />
    <app-main />
  </div>
</template>

<script>

import { Navbar, AppMain } from './components'
export default {
  name: 'HelloWorld',
  components: {
    Navbar,
    AppMain
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
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
