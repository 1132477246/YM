<template>
  <div class="gridList">
    <div v-for="item in list" :key="item.id" class="listitem">
      <img :src="item.img">
      <div class="list_text">
        <h2>{{ item.title }}</h2>
        <p>{{ item.introduce }}</p>
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

