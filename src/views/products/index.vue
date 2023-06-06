<template>
  <div class="products">
    <div class="products_header">
      <div class="header_img">
        <img src="@/assets/about/banners1.png">
      </div>
      <div class="header_title">
        <h2>{{ title }}</h2>
        <p class="moreHidden">{{ introduce }}</p>
      </div>
    </div>
    <Title :title-arry="['产品简介', 'Product Introduction']" />

    <TableList :list="products" />

    <Title :title-arry="['产品特点', 'Product Features']" />

    <GirdList :list="gridlist" class="products_mid" />

  </div>
</template>

<script>
import Title from '@/components/title'
import TableList from '@/components/list/TableList'
import GirdList from '@/components/list/GirdList'

export default {
  name: 'Products',
  components: { Title, TableList, GirdList },
  data() {
    return {
      title: '产品名称',
      introduce: '这里是产品的简单描述，可展示一行或者两行',
      products: [
        {
          id: 1,
          content: '这里是产品介绍这里是产品介绍这里是产品介绍这里是产品介绍这里是产品介绍这里是产品介绍这里是产品介绍...'
        }
      ],
      gridlist: [
        { id: '1', title: '特点一', introduce: '这里是简单的文字介绍，最多不超过3行，超出用...表示。鼠标悬停在该卡片区域时展示全部内容' },
        { id: '2', title: '特点二', introduce: '这里是简单的文字介绍，最多不超过3行，超出用...表示。鼠标悬停在该卡片区域时展示全部内容' },
        { id: '3', title: '特点三', introduce: '这里是简单的文字介绍，最多不超过3行，超出用...表示。鼠标悬停在该卡片区域时展示全部内容' },
        { id: '4', title: '特点四', introduce: '这里是简单的文字介绍，最多不超过3行，超出用...表示。鼠标悬停在该卡片区域时展示全部内容' },
        { id: '5', title: '特点五', introduce: '这里是简单的文字介绍，最多不超过3行，超出用...表示。鼠标悬停在该卡片区域时展示全部内容' },
        { id: '6', title: '特点六', introduce: '这里是简单的文字介绍，最多不超过3行，超出用...表示。鼠标悬停在该卡片区域时展示全部内容' }
      ]
    }
  }
}
</script>

