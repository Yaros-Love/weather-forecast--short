import Vue from 'vue'
import Vuex from 'vuex'
import cityWeather from './modules/city-weather'

Vue.use(Vuex)

export default new Vuex.Store({
  
  modules: {
    cityWeather,
  }
})
