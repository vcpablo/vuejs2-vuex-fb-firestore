<template>
<div>
  <router-link to="create-transaction">
    <md-button
      class="md-raised md-primary">
    Create Transaction
    </md-button>
  </router-link>
  <transactions-list
    class="content"
    :class="$style.list"
    :transactions="transactions"
    @filterChanged="handleFilterChange"></transactions-list>
  <transactions-balance
    :transactions="transactions"
    :filter="filter"></transactions-balance>
</div>
</template>
<script>

import TransactionsList from '../components/TransactionsList'
import TransactionsBalance from '../components/TransactionsBalance'
import { transactionsComputed, transactionsMethods } from '../state/helpers'

export default {
  name: 'Home',
  components: {
    TransactionsList,
    TransactionsBalance
  },
  data () {
    return {
      filter: null
    }
  },
  mounted () {
    this.fetchTransactions()
  },
  computed: {
    ...transactionsComputed
  },
  methods: {
    ...transactionsMethods,
    handleFilterChange (filter) {
      this.filter = filter
    }
  }
}
</script>

<style lang="scss" module>
  .list {
    margin-top: 20px;
  }
</style>
