<template>
  <md-snackbar :md-active.sync="show" md-persistent>
    <span>{{ message }}</span>
    <md-button class="md-primary" @click="show = false">OK</md-button>
  </md-snackbar>
</template>

<script>
import { EventBus } from '../EventBus'

export default {
  data () {
    return {
      show: false,
      message: ''
    }
  },
  mounted () {
    EventBus.$on('toastr', (data) => {
      this.show = data.show
      this.message = data.message
    })
  }
}
</script>

<style lang="scss" module>

</style>
