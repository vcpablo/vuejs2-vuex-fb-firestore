<template>
  <section>
    <router-link to="/">
      <md-button class="md-raised md-primary">
        View All Transactions
      </md-button>
    </router-link>
    <transaction-form class="content"></transaction-form>
  </section>
</template>

<script>

import TransactionForm from '../components/TransactionForm'

export default {
  components: {
    TransactionForm
  }
}
</script>
