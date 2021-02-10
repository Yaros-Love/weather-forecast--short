<template>
    <div class="card shake">
         <button @click="deleteCity(cityWeather)" class="close-card"><i class="fa fa-times" aria-hidden="true"></i></button>
         <h3>{{cityWeather.name}}, {{cityWeather.sys.country}}</h3>
         <p class="degrice">{{getCelsius}} °C</p>
         <p class="weather-desc">{{generateDescription}}</p>
         <table>
           <tbody>
             <tr>
               <td><span class="description-card">The wind: </span>{{cityWeather.wind.speed}} m/s</td>
               <td><span class="description-card">Wind direction: </span>{{getWindDirection}}</td>
             </tr>
             <tr>
               <td><span class="description-card">Humindity: </span> {{cityWeather.main.humidity}}%</td>
               <td><span class="description-card">Pressure: </span>{{cityWeather.main.pressure}} hPa</td>
             </tr>
             <tr>
               <td><span class="description-card">Visibility: </span>{{getVisability}}km</td>
              </tr>
           </tbody>
         </table>
       </div>
</template>

<script>

import {mapActions} from 'vuex';

export default {
  props: ['cityWeather'],

  computed: {

    getCelsius() {
      const celsius = (this.cityWeather.main.temp - 273.15).toFixed(0);
      return celsius;
    },

    getVisability() {
      const visibility = (this.cityWeather.visibility/1000).toFixed(1);
      return visibility;
    },

    getWindDirection() { 
      let direction = '';
       switch (true) {
        case (this.cityWeather.wind.deg >= 337 && this.cityWeather.wind.deg <= 360 || this.cityWeather.wind.deg >= 0 && this.cityWeather.wind.deg <= 23): direction = 'N';
        break;
        case (this.cityWeather.wind.deg >= 24 && this.cityWeather.wind.deg <= 68):  direction = 'NE';
        break
        case (this.cityWeather.wind.deg >= 69 && this.cityWeather.wind.deg <= 113):  direction = 'E';
        break;
        case (this.cityWeather.wind.deg >= 114 && this.cityWeather.wind.deg <= 158): direction = 'SE';
        break;
        case (this.cityWeather.wind.deg >= 159 && this.cityWeather.wind.deg <= 203): direction = 'S';
        break;
        case (this.cityWeather.wind.deg >= 204 && this.cityWeather.wind.deg <= 248): direction = 'SW';
        break;     
        case (this.cityWeather.wind.deg >= 249 && this.cityWeather.wind.deg <= 293): direction = 'W';
        break;
        case (this.cityWeather.wind.deg >= 294 && this.cityWeather.wind.deg <= 336): direction = 'NW';
        break;
        default: direction = '';
      }
      return direction;
    },

    generateDescription() {
      let description = `Today is ${this.cityWeather.weather[0].description}. Feels like ${(this.cityWeather.main.feels_like - 273.15).toFixed(0)} °C`;
      return description;
    },
  },

  methods: {
      ...mapActions(['deleteCity']),
  },
}
</script>

<style scoped>

.card {
  position: relative;

  height: fit-content;
  margin: 1rem;
  padding: 1rem;
  background: white;
  border-radius: 2rem;
}

.card:hover {
  box-shadow: 0 5px 15px rgba(0,0,0,0.5);
}

.close-card {
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;

  background: linear-gradient(45deg, #ffffff, #6cdbeb);

  position: absolute;
  top: 5%;
  right: 7%;
}

.degrice {
  font-size: 4rem;
}

.weather-desc {
  margin-bottom: 1rem;
}

table {
  margin-left: -0.5rem;
}

td {
  padding: 0rem 0.5rem;
}

.description-card {
  font-weight: bold;
}

.fa-times {
  color: #ffffff;
}


</style>