<template>
  <div class="titleBox ">
    <div class="titleFrist">{{ titleArry[0] }}</div>
    <div class="titleTow">{{ titleArry[1] }}</div>
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
    }
  },
  data() {
    return {

    }
  }
}
</script>
