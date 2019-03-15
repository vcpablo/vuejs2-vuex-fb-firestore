<template>
  <div :class="$style.container">
    <md-progress-spinner
      :md-diameter="size"
      :md-stroke="stroke"
      md-mode="indeterminate"></md-progress-spinner>
  </div>
</template>

<script>
export default {
  props: {
    size: {
      type: Number,
      default: 50
    },
    stroke: {
      type: Number,
      default: 5
    }
  }
}
</script>

<style lang="scss" module>
  .container {
    text-align: center;
  }
</style>
