<template>
  <div :class="$style.container">
    <div class="md-layout md-gutter">
      <div class="md-layout-item">
        <md-field>
          <md-select v-model="filter" name="filter" id="filter" placeholder="Filter">
            <md-option value="">All</md-option>
            <md-option value="Credit">Credit</md-option>
            <md-option value="Debit">Debit</md-option>
          </md-select>
        </md-field>
      </div>
      <div class="md-layout-item">
        <md-button class="md-primary md-raised" @click="set">Apply</md-button>
        <md-button class="md-primary md-raised" @click="reset">Reset</md-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      filter: null
    }
  },
  methods: {
    /**
     * Sets the filter
     */
    set () {
      this.$emit('set', this.filter)
    },
    /**
     * Unsets the filter
     */
    reset () {
      this.$emit('set', null)
    }
  }
}
</script>

<style lang="scss" module>
  .container {
    text-align: right;
  }
</style>
