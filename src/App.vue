<script lang="ts">
import { defineComponent } from 'vue'
import YourResult from './components/YourResult.vue'
import Summary from './components/Summary.vue'

export default defineComponent({
  name: 'App.vue',
  components: { YourResult, Summary },
  data() {}
})
</script>

<template>
  <div class="wrapper">
    <YourResult></YourResult>
    <Summary></Summary>
  </div>
</template>

<style lang="scss">
.wrapper {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
