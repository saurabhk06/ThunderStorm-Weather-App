<template>
  <div class="highlight-container">
    <div class="highlight-wrapper" v-if="checkCitySelected">
      <h1>Today's Highlights</h1>
      <div class="highlight-cards">
        <HighlightCard
          title="Feels like"
          :value="convertKelvinToCelius(cityWeather.main.feels_like) + '°C'"
        />
        <HighlightCard
          title="Wind Status"
          :value="convertMetreSecToKmHour(cityWeather.wind.speed) + ' km/h'"
        />
        <HighlightCard
          title="Humidity"
          :value="cityWeather.main.humidity + '%'"
        />
        <HighlightCard
          title="Visibility"
          :value="convertMetreToKm(cityWeather.visibility) + 'km'"
        />
        <HighlightCard
          title="Pressure"
          :value="cityWeather.main.pressure + ' hPa'"
        />
        <div class="sunrise-card">
          <p>Temp</p>
          <div class="temp">
            <fa icon="fa-solid fa-up-long" color="#FFBF5E" />
            <h3>
              {{ convertKelvinToCelius(this.cityWeather?.main.temp_max) }}°C
            </h3>
          </div>
          <div class="temp">
            <fa icon="fa-solid fa-down-long" color="#FFBF5E" />
            <h3>
              {{ convertKelvinToCelius(this.cityWeather?.main.temp_min) }}°C
            </h3>
          </div>
        </div>
      </div>
      <div class="stroke"></div>
      <WeatherPrediction
        :cityId="cityWeather.id"
        :showForecast="showForecast"
        @toggle-showForecast="$emit('toggle-showForecast', true)"
      />
    </div>
    <div v-if="!checkCitySelected" class="fallbackImgWrapper">
      <img src="@/assets/images/raining.svg" alt="" />
    </div>
  </div>
</template>

<script>
import HighlightCard from "../components/HighlightCard.vue";
import WeatherPrediction from "../components/WeatherPrediction.vue";
import { convertKelvinToCelius } from "../utils/convertKelvinToCelius";
import { convertMetreSecToKmHour } from "../utils/convertMetreSecToKmHour";
import { convertMetreToKm } from "../utils/convertMetreToKm";

export default {
  name: "WeatherHighlights",
  props: {
    cityWeather: Object,
    checkCitySelected: Boolean,
    showForecast: Boolean,
  },
  components: {
    HighlightCard,
    WeatherPrediction,
  },
  methods: {
    convertKelvinToCelius,
    convertMetreSecToKmHour,
    convertMetreToKm,
  },
  emits: ["toggle-showForecast"],
};
</script>

<style lang="scss">
.highlight-container {
  padding: 40px;

  h1 {
    font-size: 1.8rem;
    font-weight: 500;
  }
  .highlight-cards {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    padding: 20px 0;
  }

  .sunrise-card {
    width: 200px;
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background: white;
    border-radius: 20px;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 0px 16px;
    padding: 10px;

    p {
      color: #aeaeae;
      font-weight: 300;
      font-size: 17px;
    }

    h3 {
      font-weight: 400;
    }
  }

  .temp {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .fallbackImgWrapper {
    max-width: 80%;
    height: 80%;
    object-fit: cover;
  }

  .fallbackImgWrapper > img {
    width: 100%;
    height: 100%;
  }
}
</style>