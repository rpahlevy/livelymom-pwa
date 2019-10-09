import Vue from 'vue'
import Api from '../services/wpapi'

Vue.prototype.$api = new Api('https://livelymom.com/wp-json/wp/v2')
