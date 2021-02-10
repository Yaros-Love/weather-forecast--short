<template>
  <main id="app">
     <section class="glass">
     
      <menu-weather/>
      <cardsBoard/> 

     </section>
     <div class="circle1"></div>
   <div class="circle2"></div>
   <div class="circle3"></div>
   </main>
   
</template>

<script>

import menuWeather from './components/Menu.vue';
import cardsBoard from './components/Board.vue';

export default {
  name: 'App',
  components: {
    menuWeather, 
    cardsBoard
  },
}
</script>

<style>
* {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Poppins';
      color:   rgb(61, 61, 61)
    }

    main {
      min-height: 100vh;
      background: linear-gradient(45deg, #65dfc9, #6cdbeb);
      display: flex;    
      align-items: center;
      justify-content: center;
    }

    .glass {
      background: white;
      min-height: 97vh;
      width: 90%;
      background: linear-gradient(135deg, 
        rgba(255, 255, 255, 0.7), 
        rgba(255, 255, 255, 0));
      border-radius: 2rem;
      z-index: 10;
      backdrop-filter: blur(2rem);

      display: flex;
    }

    .circle1, .circle2, .circle3 {
      background: white;
      background: linear-gradient(135deg, 
        rgba(255, 255, 255, 0.8), 
        rgba(255, 255, 255, 0.3) );
      height: 15rem;
      width: 15rem;
      position: absolute;
      border-radius: 50%;
    }

    .circle1 {
      top: 0%;
      right: 0%;

      height: 30rem;
      width: 30rem;
    }

    .circle2 {
      bottom: 5%;
      left: 2%;
    }

    .circle3 {
      bottom: 5%;
      right: 1%;;
    }

    @keyframes brr {
      from {transform: rotate(1deg)}
      10% {transform: rotate(-1deg)}
      20% {transform: rotate(1deg)}
      30% {transform: rotate(-1deg)}
      40% {transform: rotate(1deg)}
      50% {transform: rotate(-1deg)}
      60% {transform: rotate(1deg)}
      70% {transform: rotate(-1deg)}
      80% {transform: rotate(1deg)}
      90% {transform: rotate(-1deg)}
      to {transform: rotate(1deg)}
    }

  .shake {
      animation: brr 0.5s ease-in-out;
      -webkit-animation: brr 0.5s ease-in-out;
      -moz-animation: brr 0.5s ease-in-out;
      -o-animation: brr 0.5s ease-in-out;
  }

  @media screen and (max-width: 800px) {
    .glass {
      flex-direction: column;
      width: 97%;
    }
  }
</style>
