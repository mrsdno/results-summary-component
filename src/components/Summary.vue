<script lang="ts">
import { defineComponent } from 'vue'
import MemoryIcon from '@/assets/images/MemoryIcon.vue'
import ReactionIcon from '@/assets/images/ReactionIcon.vue'
import VerbalIcon from '@/assets/images/VerbalIcon.vue'
import VisualIcon from '@/assets/images/VisualIcon.vue'

export default defineComponent({
  name: 'Summary.vue',
  components: {
    MemoryIcon,
    ReactionIcon,
    VerbalIcon,
    VisualIcon
  },
  data() {}
})
</script>

<template>
  <div class="summary-wrapper">
    <div class="heading">Summary</div>
    <div class="score-section red">
      <div class="sub-heading"><ReactionIcon />Reaction</div>
      <div class="score-detail"><span>80</span> / 100</div>
    </div>
    <div class="score-section yellow">
      <div class="sub-heading"><MemoryIcon />Memory</div>
      <div class="score-detail"><span>92</span> / 100</div>
    </div>
    <div class="score-section teal">
      <div class="sub-heading"><VerbalIcon />Verbal</div>
      <div class="score-detail"><span>61</span> / 100</div>
    </div>
    <div class="score-section blue">
      <div class="sub-heading"><VisualIcon />Visual</div>
      <div class="score-detail"><span>72</span> / 100</div>
    </div>
    <div class="btn-wrapper">
      <button class="continue-btn">Continue</button>
    </div>
  </div>
</template>

<style lang="scss">
@import '@/assets/base.scss';

.summary-wrapper {
  background-color: $white;
  box-shadow: 30px 30px 40px hsla(221, 100%, 96%);
  border-radius: 20px;
  width: 250px;
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  .heading {
    padding: 2rem;
    font-weight: 700;
    color: $dark-gray-blue;
    align-self: flex-start;
  }
  .score-section {
    display: flex;
    width: 70%;
    justify-content: space-between;
    padding: 14px;
    border-radius: 0.5rem;
    margin: 5px 10px;
    .sub-heading {
      font-weight: 700;
      font-size: 12px;
      display: flex;
    }
    .score-detail {
      font-size: 12px;
      color: hsla(0, 0%, 0%, 0.4);
      font-weight: 700;
    }
    .score-detail > span {
      color: hsla(0, 0%, 0%, 1);
    }
  }
  .red {
    background: linear-gradient(40deg, hsla(0, 100%, 67%, 0.1), hsla(0, 100%, 67%, 0.05));
    color: $red;
  }
  .yellow {
    background: linear-gradient(40deg, hsla(39, 100%, 56%, 0.1), hsla(39, 100%, 56%, 0.05));
    color: $yellow;
  }
  .teal {
    background: linear-gradient(40deg, hsla(166, 100%, 37%, 0.1), hsla(166, 100%, 37%, 0.05));
    color: $teal;
  }
  .blue {
    background: linear-gradient(40deg, hsla(234, 85%, 45%, 0.1), hsla(234, 85%, 45%, 0.05));
    color: $blue;
  }
  .btn-wrapper {
    width: 100%;
    text-align: center;
    .continue-btn {
      width: 70%;
      border-radius: 30px;
      padding: 10px;
      background: $dark-gray-blue;
      border: none;
      color: $white;
      font-size: 12px;
      font-weight: 700px;
      margin-top: 10px;
    }
    .continue-btn:hover {
      background: linear-gradient(hsl(252, 100%, 67%), hsl(241, 81%, 54%));
      cursor: pointer;
    }
  }
}
</style>
