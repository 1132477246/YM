<template>
  <div :class="className">
    <img :src="img">
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    img: {
      type: String,
      default: ''
    },
    className: {
      type: String,
      default: 'details_img'
    }
  }
}
</script>
