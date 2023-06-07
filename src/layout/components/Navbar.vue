<template>
  <div class="navMain">
    <div class="nav container" :class="isMobile && 'mobile_container'">
      <div class="navlog">
        <div>
          <img class="navLogoImg" src="@/assets/img/logo.png" alt="">
        </div>
        <div><img src="@/assets/img/logoName.png" alt=""></div>
      </div>
      <div v-if="!isMobile" class="navlist">
        <ul>

          <li v-for="item in navlist" :key="item.id" class="navlistLi active">
            <!-- :class="item.path===routePath?'active':'a'" -->
            <a href="" @click.prevent="handleOpen(item)">
              {{ item.title }}
              <img v-show="item.children" class="downIcon" src="@/assets/img/nav_down.png" alt="">

              <ul v-if="item.children&&childrenActive===''" id="navlistChildren" class="navlistChildren">
                <li v-for="items in item.children " :key="items.id"><a href="" @click.prevent.stop="handleOpen(items,'children')">{{ items.title }}</a></li>
              </ul>
            </a>
          </li>
          <!-- <li><a href="">解决方案</a></li>
          <li><a href="">产品介绍</a></li>
          <li><a href="">新闻资讯</a></li>
          <li><a href="">关于我们</a></li> -->
        </ul>
      </div>
      <div v-if="isMobile" class="mobile_nav">
        <el-dropdown @command="menuItemClick" @visible-change="dropDownVisibleChange">
          <span class="el-dropdown-link">
            {{ menuTitle }}
            <i class="el-icon-arrow-down el-icon--right" :class="dropDownVisiable ? 'dropDown-open' : 'dropDown-close'" />
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item v-for="item in navlist" :key="item.id" :command="item" @click="() => menuItemClick(item)">{{ item.title }}</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      navlist: [
        { id: '0', title: '首页', path: '/' },
        { id: '1', title: '解决方案', children: [
          { id: '1-1', title: '信号分析解决方案', path: '/solution/index' },
          { id: '1-2', title: '训练系统解决方案', path: '/solution/index' },
          { id: '1-3', title: '人工智能解决方案', path: '/solution/index' }
        ] },
        { id: '2', title: '产品介绍', children: [
          { id: '2-1', title: '卫星信号分析', path: '/products/index' },
          { id: '3-2', title: '通信信号分析', path: '/products/index' },
          { id: '2-3', title: '训练系统', path: '/products/index' },
          { id: '2-4', title: 'AI平台开发', path: '/products/index' }
        ] },
        { id: '3', title: '新闻资讯', path: '/news/index' },
        { id: '4', title: '关于我们', children: [
          { id: '1-1', title: '公司介绍', path: '/about/index' },
          { id: '1-2', title: '联系我们', path: '/contact/index' },
          { id: '1-3', title: '合作伙伴', path: '/partners/index' }
        ] }
      ],
      isMobile: false,
      menuTitle: '首页',
      dropDownVisiable: false,
      childrenActive: ''
    }
  },
  computed: {
    routePath: function() {
      return this.$route.path
    }
  },
  created() {
    console.warn(this.$route.path)
  },
  mounted() {
    this.calcClientWidth()
    window.addEventListener('resize', this.calcClientWidth)
  },
  methods: {
    handleOpen(item, name) {
      console.warn(name)
      this.childrenActive = ''
      if (name === 'children') {
        this.childrenActive = 'active'
        setTimeout(() => {
          this.$nextTick(() => {
            this.childrenActive = ''
          })
        })
        this.$router.push({ path: item.path, query: { id: item.id }})
        // this.$nextTick(() => {
        //   this.childrenActive = ''
        // })

        // document.getElementById('#navlistChildren').style.background = 'red'
        // document.querySelectorAll('#navlistChildren').className = 'bgYellow'
        // const navlistChildren = document.querySelectorAll('#navlistChildren')
        // navlistChildren.forEach((item) => { item.style.display = 'none' })
      } else this.$router.push(item.path)
      // if (item.path) {

      // }
    },
    calcClientWidth() {
      this.isMobile = window.document.body.clientWidth <= 700
    },
    menuItemClick(item) {
      this.menuTitle = item.title
      this.$router.push(item.path)
    },
    dropDownVisibleChange(visiable) {
      this.dropDownVisiable = visiable
    }
  }
}
</script>

