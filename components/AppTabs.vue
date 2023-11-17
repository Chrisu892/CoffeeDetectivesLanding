<script lang="ts" setup>
  import { Splide, SplideSlide } from '@splidejs/vue-splide'

  const sliderOptions = {
    type: 'loop',
    rewind: false,
    gap: '2rem',
    perMove: 1,
    perPage: 3,
    breakpoints: {
      1024: {
        perPage: 2,
      },
      640: {
        perPage: 1,
      }
    }
  }
</script>

<script lang="ts">
  export default defineComponent({
    props: {
      content: {
        type: Object,
        required: true,
      }
    },
    data() {
      return {
        activeTab: 'customer',
      }
    },
    methods: {
      handleToggle(id) {
        this.activeTab = id
      }
    }
  })
</script>

<template>
  <div class="tabs">
    <div class="tabs__actions">
      <AppTabButton :id="'customer'" title="For coffee hobbyists" @toggle="handleToggle" :class="{ 'tab-button--active': activeTab == 'customer' }" />
      <AppTabButton :id="'business'" title="For cafe owners" @toggle="handleToggle" :class="{ 'tab-button--active': activeTab == 'business' }" />
    </div>
    <div class="tabs__content">
      <AppTabContent v-for="benefits, key in content" :key="key" :class="{ 'tab-content--active': activeTab === key }">
        <template #content>
          <Splide :options="sliderOptions">
            <SplideSlide v-for="benefit, key in benefits" :key="key">
              <AppBenefit :benefit="benefit" />
            </SplideSlide>
          </Splide>
        </template>
      </AppTabContent>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .tabs__actions {
    background-color: $clr-shade;
    border-radius: 25px;
    display: flex;
    flex-direction: row;
    gap: 0.25rem;
    padding: 0.25rem;

    @media (max-width: 600px) {
      flex-direction: column;
    }
  }
  .tabs__content {
    margin-top: $gutter-half;
    max-height: 534px;
    overflow-y: auto;
  }
  .tabs__container {
    display: grid;
    gap: $gutter-half;
    grid-template-columns: repeat(3, 1fr);
  }
</style>