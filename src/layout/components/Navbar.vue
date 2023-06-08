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

            <el-dropdown v-if="item.children" class="navlistLi_dropdown" trigger="hover">
              <span class="el-dropdown-link dropDownHover">
                {{ item.title }} <img class="downIcon" src="@/assets/img/nav_down.png" alt="">
              </span>
              <el-dropdown-menu slot="dropdown" class="navelDropdownMenu">
                <el-dropdown-item v-for="items in item.children " :key="items.id" class="dropdownChildren">
                  <div @click.prevent="handleOpen(items,'children')">
                    {{ items.title }}
                  </div>

                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <div v-else>
              <a href="" @click.prevent="handleOpen(item)">
                {{ item.title }}
              </a>
            </div>
            <!-- <img v-show="item.children" class="downIcon" src="@/assets/img/nav_down.png" alt="">

              <ul v-if="item.children&&childrenActive===''" id="navlistChildren" class="navlistChildren">
                <li v-for="items in item.children " :key="items.id"><a href="" @click.prevent.stop="handleOpen(items,'children')">{{ items.title }}</a></li>
              </ul> -->

          </li>

        </ul>
      </div>
      <div v-if="isMobile" class="mobile_nav">
        <el-dropdown ref="dropdown" trigger="click" :hide-on-click="false" @command="menuItemClick" @visible-change="dropDownVisibleChange">
          <span class="el-dropdown-link">
            {{ menuTitle }}
            <i class="el-icon-arrow-down el-icon--right" :class="dropDownVisiable ? 'dropDown-open' : 'dropDown-close'" />
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item v-for="item in navlist" :key="item.id" class="navigation" :command="item" @click="() => menuItemClick(item)">

                <el-collapse v-if="item.children&&item.children.length>0" v-model="activeName" accordion>
                  <el-collapse-item :title=" item.title " :name="item.id" class="dropdownBoxCollapse">
                    <ul>
                      <li v-for="items in item.children" :key="items.id" class="dropdownBox" @click.prevent.stop="menuItemClick(items)"><a href="">{{ items.title }}</a></li>
                    </ul>
                  </el-collapse-item>
                </el-collapse>

                <div v-else class="dropdownBox">{{ item.title }}</div>
              </el-dropdown-item>
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
      hideClickState: true,
      activeName: '',
      navlist: [
        { id: '0', title: '首页', path: '/' },
        { id: '1', title: '解决方案', children: [
          { id: '1-1', title: '信号分析解决方案', path: '/solution/index' },
          { id: '1-2', title: '训练系统解决方案', path: '/solution/index' },
          { id: '1-3', title: '人工智能解决方案', path: '/solution/index' }
        ] },
        { id: '2', title: '产品介绍', children: [
          { id: '2-1', title: '卫星信号分析', path: '/products/index' },
          { id: '2-2', title: '通信信号分析', path: '/products/index' },
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
      dropDownVisiable: false
      // childrenActive: ''
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
      if (item.path) {
        this.$router.push({ path: item.path, query: { id: item.id }})
      }
    },
    calcClientWidth() {
      this.isMobile = window.document.body.clientWidth <= 700
    },
    menuItemClick(item) {
      console.warn(item.path)
      // console.warn(item, 'hideClickState')
      if (item.children && item.children.length > 0) {
        this.$refs.dropdown.show()
      } else {
        this.$refs.dropdown.hide()
      }
      this.menuTitle = item.title
      if (item.path) {
        this.$router.push(item.path)
      }
    },
    dropDownVisibleChange(visiable) {
      this.dropDownVisiable = visiable
    }
  }
}
</script>

