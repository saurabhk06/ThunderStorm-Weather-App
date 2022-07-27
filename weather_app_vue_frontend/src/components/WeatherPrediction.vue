<template>
  <div class="weather-prediction-container">
    <button
      v-if="!showForecast"
      @click="generatePrediction()"
      class="weather-prediction-btn"
    >
      SEE FORECAST
    </button>
    <div
      v-show="showForecast"
      :key="forecast.id"
      v-for="forecast in forecastData"
      class="prediction-card"
    >
      <h5>{{moment(forecast.dt * 1000).format('MMMM DD')}}, {{moment(forecast.dt* 1000).format('h:mm')}}</h5>
      <div class="stats">
        <h5>{{ forecast.weather[0].description.toUpperCase() }}</h5>
        <h5 class="temp">{{convertKelvinToCelius(forecast.main.temp_min)}}/{{convertKelvinToCelius(forecast.main.temp_max)}}°C</h5>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment';
import { convertKelvinToCelius } from "../utils/convertKelvinToCelius";

export default {
  name: "WeatherPrediction",
  props: {
    showForecast: Boolean,
    cityId: Number
  },
  data() {
    return {
      forecastData: [],
    };
  },
  methods: {
    moment,
    convertKelvinToCelius,
    async generatePrediction() {
      const res = await fetch(
        `http://localhost:4000/api/weather-forecast?id=${this.cityId}`
      );
      const data = await res.json();
      this.forecastData = data?.list.slice(0, 5);
      this.$emit("toggle-showForecast", true);
    },
  },
};
</script>


<style lang="scss">
.weather-prediction-container {
  display: flex;
  flex-wrap: wrap;
  padding: 10px 0;
  gap: 8px;

  .prediction-card {
    width: 150px;
    height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: white;
    border-radius: 10px;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 0px 16px;
    padding: 15px 10px;

    h5 {
      font-size: 12px;
      font-weight: 400;
      color: gray;
    }

    .stats {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      h5 {
        color: black;
        font-size: 10px;
        font-weight: 600;
      }

      .temp {
        font-size: 10px;
        color: #f97f29;
      }
    }
  }
}

.weather-prediction-btn {
  border: none;
  padding: 15px 20px;
  background: #f97f29;
  color: white;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.1s ease-out;

  &:hover {
    background: #e66204;
  }
}

.stroke {
  margin-top: 10px;
  width: 100%;
  height: 0.1px;
  background-color: rgb(222, 221, 221);
}
</style>