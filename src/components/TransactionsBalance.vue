<template>
  <div class="md-layout" :class="$style.container">
    <md-card :class="$style.item">
      <md-card-content :class="$style.debit" v-show="filterDebit">
        Total debit: <b>{{ totals.totalDebit | currency }}</b>
      </md-card-content>
    </md-card>
    <md-card :class="$style.item" v-show="filterCredit">
      <md-card-content :class="$style.credit">
      Total credit: <b>{{ totals.totalCredit | currency }}</b>
      </md-card-content>
    </md-card>
    <md-card :class="$style.item" v-show="!filter">
      <md-card-content :class="[$style.balance, totals.totalBalance > 0 && $style.credit, totals.totalBalance < 0 && $style.credit]">
      Total balance: <b>{{ totals.totalBalance | currency }}</b>
      </md-card-content>
    </md-card>
  </div>
</template>

<script>
export default {
  props: {
    transactions: {
      required: true
    },
    filter: {
      type: String
    }
  },
  computed: {
    /**
     * Shows/hides debit totals
     */
    filterDebit () {
      return !this.filter || this.filter === 'Debit'
    },
    /**
     * Shows/hides credit totals
     */
    filterCredit () {
      return !this.filter || this.filter === 'Credit'
    },
    /**
     * Calculates debits, credits and balance
     */
    totals () {
      const transactions = this.transactions || []

      let totalDebit = 0
      let totalCredit = 0

      transactions.forEach(transaction => {
        if (transaction.type === 'Debit') {
          totalDebit -= transaction.value
        }

        if (transaction.type === 'Credit') {
          totalCredit += transaction.value
        }
      })

      const totalBalance = totalCredit + totalDebit

      return {
        totalDebit,
        totalCredit,
        totalBalance
      }
    }
  }
}
</script>

<style lang="scss" module>
  .container {
    display: flex;
    flex-direction: column;
    float: right;
    margin-top: 20px;
    width: 15vw;

    .item {
      text-align: right;
    }
  }

  .debit {
    color: red;
  }

  .credit {
    color: green
  }

  .balance {
    font-size: 18px;
  }
</style>
