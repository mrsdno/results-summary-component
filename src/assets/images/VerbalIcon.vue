<template>
  <svg class="my-svg-component">
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 20 20">
      <path
        stroke="#00BB8F"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.25"
        d="M7.5 10h5M10 18.333A8.333 8.333 0 1 0 1.667 10c0 1.518.406 2.942 1.115 4.167l-.699 3.75 3.75-.699A8.295 8.295 0 0 0 10 18.333Z"
      />
    </svg>
  </svg>
</template>

<script lang="ts">
export default {
  name: 'memory'
}
</script>

<style scoped>
.my-svg-component {
  width: 14px;
  height: 14px;
  margin-right: 8px;
}
</style>
