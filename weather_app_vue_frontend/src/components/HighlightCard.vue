<template>
  <div class="highlight-card">
    <p>{{ title }}</p>
    <h2>{{ value }}</h2>
  </div>
</template>

<script>
export default {
  name: "HighlightCard",
  props: {
    title: String,
    value: String,
  },
};
</script>

<style lang="scss">
.highlight-card {
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

  h2 {
    font-weight: 500;
    font-size: 1.9rem;
  }
}
</style>