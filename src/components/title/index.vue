<template>
  <div class="titleBox ">
    <div class="titleFrist">{{ titleArry[0] }}</div>
    <div class="titleTow" :class="isRow?'classPadding':''">{{ titleArry[1] }}</div>
  </div>

</template>

<script>
export default {
  name: 'Title',
  props: {
    titleArry: {
      type: Array,
      default: () => {
        return []
      }
    },
    isRow: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {

    }
  }
}
</script>
