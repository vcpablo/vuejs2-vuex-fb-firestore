import Vue from 'vue'
import Vuex from 'vuex'
import { config } from '../config'
import modules from './modules'
import firebase from 'firebase/app'
import 'firebase/firestore'

firebase.initializeApp(config.FIREBASE)

Vue.use(Vuex)

const state = {
  db: firebase.firestore()
}

Vue.use(Vuex)

const store = new Vuex.Store({
  state,
  modules
})

export default store
