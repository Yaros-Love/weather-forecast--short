<template>
  <div class="dashboard">
    <div class="user">
      <button class="avatar">
        <picture>
          <img src="https://cdn.iconscout.com/icon/free/png-256/weather-296-1100758.png" alt="picture of sun and cloud" />
        </picture>
      </button>
     
    </div>
    <div class="cities">
      <ul>
        <li
        v-for="city in citiesNames"
        :key="city"
        v-on:click="getWeather(city)"
        class="city"
        :class="getPressedCities[city] ? 'disabledLi' : 'activeLi'">
          <h3>{{city}}</h3>
          <button :name=city
          
          :class="getPressedCities[city] ? 'disabledButton' : 'activeButton'"
          :disabled="getPressedCities[city]"
          >see details</button>
        </li>
      </ul>
    </div>

    <button class="more-cities"
    v-on:click="MakeShakeJoin"
    >Load more cities</button>

    <div class="pro">
      <h2>Join pro to load more citeis</h2>
    </div>
  </div>
</template>

<script>

import {mapActions, mapGetters} from 'vuex';

export default {
  data() {
    return {
      citiesNames: ['London', 'Paris', 'Tokyo', 'New York', 'Moscow', 'Berlin'],
    }
  },

  name: "v-menu-weather",

  methods: {
   ...mapActions(['fetchWeather']),

   getWeather(city) {
     if (!this.getPressedCities[city]) {
       this.fetchWeather(city);
     };
   },
   
    MakeShakeJoin() {
      const joinBttn = document.querySelector('.pro');
      joinBttn.classList.add('shake');
      setTimeout(()=>{
          joinBttn.classList.remove('shake');
      }, 500)
    },
  },

  computed: {
    ...mapGetters(['getPressedCities']),
  }
};
</script>

<style scoped>
.dashboard {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  text-align: center;
  padding: 1rem 1rem;

  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.8),
    rgba(255, 255, 255, 0.3)
  );
  border-radius: 2rem;
}

.avatar {
  border: none;
  background: transparent;
}

.avatar > picture > img {
  width: 200px;
}

.user-name {
  width: 80%;
  border-radius: 2rem;
  border: none;
  background: white;
  padding: 1rem;
  text-align: center;
  font-weight: bold;
  font-size: 1.5rem;
}

.pro {
  background: linear-gradient(45deg, #65dfc9, #6cdbeb);
  padding: 1rem;
  border-radius: 2rem;
}

.cities {
  width: 80%;
}

.cities > ul {
  list-style: none;
  display: flex;
  flex-direction: column;
}

.city {
  margin: 1rem 0rem;
  border-radius: 2rem;
  font-size: 1.5rem;

  display: flex;
  align-items: baseline;
  justify-content: space-between;
}

.city > h3 {
  padding-left: 1rem;
}

.city > button {
  border-radius: 2rem;
  border: none;
  
  padding: 0rem 1rem;
  align-self: stretch;
}

.city:hover {
  background: linear-gradient(45deg, #65dfc9, #6cdbeb);
}

select {
  width: 100%;
}

.more-cities {
  border-radius: 2rem;
  border: none;
  background: linear-gradient(45deg, #e3ebe9, #bfd9db);
  padding: 0.5rem 1rem;
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.activeButton {
   background: linear-gradient(45deg, #65dfc9, #6cdbeb);
}

.disabledButton {
  background: linear-gradient(45deg, #e3ebe9, #bfd9db)
}

.activeLi {
   background: linear-gradient(
    135deg,
    rgba(176, 245, 239, 0.7),
    rgba(255, 255, 255, 0.3)
  );
}

.disabledLi {
  background: linear-gradient(45deg, #e3ebe9, #ffffff)
}

@media screen and (max-width: 1100px) {
  .city > button {
    display: none;
  }

  .city > h3 {
    margin: auto;
    padding: 0rem 1rem;
  }
}

@media screen and (max-width: 800px) {
  .cities > ul {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
}

</style>