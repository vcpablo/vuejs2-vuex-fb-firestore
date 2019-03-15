import { filter } from 'ramda'
import { CREATE_TRANSACTION, SET_TRANSACTIONS } from '../types/transaction'
import * as moment from 'moment'

export const state = {
  items: undefined
}

export const getters = {
  debitTransactions (state) {
    return filter(transaction => transaction.type === 'debit', state.items)
  },
  creditTransactions (state) {
    return filter(transaction => transaction.type === 'credit', state.items)
  },
  isLoading (state) {
    return !state.items
  }
}

export const mutations = {
  [CREATE_TRANSACTION] (state, transaction) {
    state.items = [...(state.items || []), transaction]
  },
  [SET_TRANSACTIONS] (state, transactions) {
    state.items = transactions
  }
}

export const actions = {
  async fetchTransactions ({ commit, rootState }) {
    let transactionsCollection = rootState.db.collection('transactions').orderBy('date', 'desc')
    const docs = await transactionsCollection.get()

    let transactions = []

    docs.forEach(doc => {
      const transaction = Object.assign(doc.data(), {
        id: doc.id,
        date: moment(doc.get('date')).format('MM/DD/YYYY')
      })
      transactions.push(transaction)
    })
    commit(SET_TRANSACTIONS, transactions)
  },

  createTransaction ({ rootState }, transaction) {
    transaction.date = moment().format('YYYY-MM-DD')
    transaction.value = parseFloat(transaction.value)
    let transactionsCollection = rootState.db.collection('transactions')

    return transactionsCollection.add(transaction)
  }
}
