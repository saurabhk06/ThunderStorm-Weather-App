<template>
  <div class="app">
    <WeatherForecast />
  </div>
</template>

<script>
import WeatherForecast from "./components/WeatherForecast.vue";

export default {
  name: "App",
  components: {
    WeatherForecast,
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: "Open Sans", sans-serif;
}

.app {
  background: #d6d7da;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Open Sans", sans-serif;
}
</style>
