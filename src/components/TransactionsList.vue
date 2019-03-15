<template>
  <div>
    <div v-if="processedTransactions">
      <transactions-filter @set="setFilter"></transactions-filter>
      <md-table
        v-if="processedTransactions.length > 0"
        v-model="processedTransactions"
        md-card>
        <md-table-row>
          <md-table-head center md-numeric>ID</md-table-head>
          <md-table-head>Description</md-table-head>
          <md-table-head md-numeric>Value</md-table-head>
          <md-table-head>Type</md-table-head>
          <md-table-head>Date</md-table-head>
        </md-table-row>

        <md-table-row slot="md-table-row" slot-scope="{ item }">
          <md-table-cell md-label="ID" md-numeric>{{ item.id }}</md-table-cell>
          <md-table-cell md-label="Descrition" md-sort-by="description">{{ item.description }}</md-table-cell>
          <md-table-cell md-label="Value" md-sort-by="value">{{ item.value | currency }}</md-table-cell>
          <md-table-cell md-label="Type" md-sort-by="type">{{ item.type }}</md-table-cell>
          <md-table-cell md-label="Date" md-sort-by="date">{{ item.date }}</md-table-cell>
        </md-table-row>
      </md-table>
      <div v-if="processedTransactions.length === 0">No transaction found</div>
    </div>
    <loading v-if="!processedTransactions"/>
  </div>
</template>

<script>
import Loading from './Loading'
import TransactionsFilter from './TransactionsFilter'

export default {
  components: {
    Loading,
    TransactionsFilter
  },
  data () {
    return {
      filter: null
    }
  },
  props: {
    transactions: {
      required: true
    }
  },
  computed: {
    processedTransactions: {
      set (value) {
        return value
      },
      /**
      * Filters the transactions according to type if filter is set
      */
      get () {
        const transactions = this.filter ? this.transactions.filter(transaction => transaction.type === this.filter) : this.transactions
        return transactions
      }
    }
  },
  methods: {
    /**
     * Sets the filter
     */
    setFilter (filter) {
      this.filter = filter
      this.$emit('filterChanged', filter)
    }
  }
}
</script>

<style lang="scss">
  .md-table-head-container, .md-table-cell-container {
    text-align: left;
  }
</style>
