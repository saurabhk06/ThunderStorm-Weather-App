<template>
  <div class="container">
    <div class="left">
      <!-- dropdown to select the city -->
      <select class="dropdown" @change="changeCity">
        <option value="">Select city to see the forecast</option>
        <option :value="city.id" :key="city.id" v-for="city in cityList">{{city.name}}</option>
      </select>

      <div v-show="!checkCitySelected" class="fallbackSection">
        <div class="imgWrapper">
          <img src="@/assets/images/not_selected.svg" alt="" />
        </div>
        <p>No city selected</p>
      </div>

      <div v-if="checkCitySelected" class="summary">
        <div class="weatherCard">
          <TiWeatherCloudy size="{20}" color="white" />
          <h2>Weather</h2>
          <h4>What's the weather</h4>
          <div class="status">
            <p>{{ this.cityWeather?.weather[0].description }}</p>
          </div>
        </div>
        <h1>{{ convertKelvinToCelius(this.cityWeather?.main.temp) }}°C</h1>
        <h3>
          {{ moment(this.cityWeather.dt * 1000).format("dddd") }},<span>{{
            moment(this.cityWeather.dt * 1000).format("kk:mm")
          }}</span>
        </h3>
        <div class="stroke"></div>
        <div class="cityCard">
          <div class="cityCardWrapper">
            <p>{{ this.cityWeather?.name }}, {{ cityWeather?.sys.country }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="right">
      <WeatherHighlights
        :cityWeather="cityWeather"
        :checkCitySelected="checkCitySelected"
        :showForecast="showForecast"
        @toggle-showForecast="toggleShowForecast"
      />
    </div>
  </div>
</template>

<script>
import WeatherHighlights from "../components/WeatherHighligts.vue";
import { convertKelvinToCelius } from "../utils/convertKelvinToCelius";
import moment from "moment";
import { cityList } from '../assets/data/cityList';

export default {
  name: "WeatherForecast",
  components: {
    WeatherHighlights,
  },
  methods: {
    moment,
    convertKelvinToCelius,
    async changeCity(e) {
      const selectedCity = e.target.value;
      this.showForecast = false;
      if (selectedCity) {
        const res = await fetch(
          `http://localhost:4000/api/current-weather?id=${selectedCity}`
        );
        const data = await res.json();
        this.cityWeather = data;
      } else {
        this.cityWeather = {};
      }
    },
    toggleShowForecast(value) {
      this.showForecast = value;
    },
  },
  data() {
    return {
      cityWeather: {},
      showForecast: false,
      cityList: cityList
    };
  },
  computed: {
    checkCitySelected() {
      if (this.cityWeather && Object.keys(this.cityWeather).length > 0) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style lang="scss">
.dropdown {
  padding: 12px 10px;
  font-size: 14px;
  font-weight: 200;
  font-style: italic;
  outline: none;
}

.container {
  display: flex;
  height: 95%;
  width: 98%;
  border-radius: 2rem;
  background-color: #f7f6f9;
  gap: 10px;
  margin: 2rem;

  .left {
    display: flex;
    flex-direction: column;
    width: 20rem;
    height: 100%;
    padding: 40px;
    background-color: white;
    border-radius: 2rem 0 0 2rem;
  }

  .right {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
}

.fallbackSection {
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .imgWrapper {
    max-width: 80%;
    height: 200px;
    object-fit: cover;
  }

  .imgWrapper > img {
    width: 100%;
    height: 100%;
  }

  p {
    font-size: 14px;
    font-style: italic;
  }
}

.summary {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  position: relative;
  height: 100%;

  .weatherCard {
    width: 100%;
    height: 130px;
    padding: 10px 20px;
    background: url(@/assets/images/morning.jpg) no-repeat;
    background-size: cover;
    background-position: center;
    border-radius: 10px;

    h2 {
      font-weight: 500;
      font-size: 14px;
      margin-bottom: 2px;
    }

    h4 {
      font-weight: 400;
      font-size: 10px;
    }

    .status {
      display: inline-block;
      position: relative;
      top: 10px;
      background-color: white;
      border-radius: 3px;
      padding: 5px 20px;

      p {
        font-size: 16px;
        font-weight: 400;
        text-transform: capitalize;
      }
    }
  }

  h1 {
    font-weight: 300;
    font-size: 3.3rem;
  }

  h3 {
    font-weight: 400;

    span {
      color: gray;
    }
  }

  .stroke {
    margin-top: 10px;
    width: 100%;
    height: 0.1px;
    background-color: rgb(222, 221, 221);
  }

  .cityCard {
    width: 100%;
    height: 80px;
    margin-top: 20px;
    background: url(@/assets/images/city_evening.jpg) no-repeat;
    background-size: cover;
    background-position: center;
    border-radius: 10px;

    .cityCardWrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      border-radius: 10px;
      background-color: rgba(0, 0, 0, 0.2);

      p {
        color: white;
      }
    }
  }
}
</style>