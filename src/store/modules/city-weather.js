export default {
    state: {
        isPressed: {
            London: false,
            Paris: false,
            Tokyo: false,
            'New York': false,
            Moscow: false,
            Berlin: false,
            
        },
        weather: [],
    },
    mutations: {
        updateWeather(state, weather) {
            state.weather.push(weather);
            state.isPressed[weather.name] = true;
        },

        filterWeather(state, weather) {
            state.weather = state.weather.filter(function (item) {
                return item.name !== this.name;
            }, weather);
        },

        activeButton(state, weather) {
            state.isPressed[weather.name] = false;
        },
    },
    actions: {
        async fetchWeather({commit}, city) {
            const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=bb24b217e3821a98155650eece47b915`)
                .then((response) => response.json());
            commit('updateWeather', response);
        },

        deleteCity({commit}, weather) {
            commit('filterWeather', weather);
            commit('activeButton', weather);
        },
    },
    getters: {
        allWeather(state) {
            return state.weather;
        },

        getPressedCities(state) {
            return state.isPressed;
        }
    },
}