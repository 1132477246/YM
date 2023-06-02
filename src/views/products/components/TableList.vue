<template>
  <div class="tablelist">
    <div v-for="item in list" :key="item.id" class="listitem">
      <img :src="item.img">
      <!-- <div> -->
      <p>{{ item.content }}</p>
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
    }
  },
  data() {
    return {}
  }
}
</script>

