<template>
<div class="cards-board">
    <card-weather 
    v-for="cityWeather of allWeather"
    v-bind:key="cityWeather.id"
    v-bind:cityWeather="cityWeather"
    ></card-weather>
   
</div> 
</template>

<script>
import  cardWeather from './Card';
import {mapGetters} from 'vuex';

export default {
    computed: {
      ...mapGetters(['allWeather']),
    },
    components: {
    cardWeather
  },

}
</script>

<style scoped>

.cards-board {
  display: flex;
  flex: 2;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

</style>