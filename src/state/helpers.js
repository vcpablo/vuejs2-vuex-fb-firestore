import { mapState, mapGetters, mapActions } from 'vuex'

export const transactionsComputed = {
  ...mapState('transaction', {
    transactions: state => state.items
  }),
  ...mapGetters('transaction', ['isLoading'])
}

export const transactionsMethods = mapActions('transaction', [
  'fetchTransactions',
  'createTransaction'
])
