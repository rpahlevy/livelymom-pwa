import Vue from 'vue'
import axios from 'axios'

Vue.prototype.$axios = axios.create({
  baseURL: 'https://livelymom.com/wp-json/wp/v2'
})
