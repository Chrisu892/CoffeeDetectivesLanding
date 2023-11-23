<script setup lang="ts">
  import { ref } from 'vue'
  import { Splide, SplideTrack, SplideSlide } from '@splidejs/vue-splide'
  import { PhArrowLeft, PhArrowRight } from '@phosphor-icons/vue'

  defineProps({
    content: {
      type: Object,
      required: true
    }
  })

  defineComponent({
    components: {
      Splide,
      SplideTrack,
      SplideSlide,
      PhArrowLeft,
      PhArrowRight,
    }
  })

  const activeTab = ref('customer')

  const sliderOptions = {
    type: 'carousel',
    rewind: false,
    gap: '1rem',
    perMove: 1,
    perPage: 3,
    pagination: false,
    breakpoints: {
      1024: {
        perPage: 2,
      },
      640: {
        perPage: 1,
      }
    }
  }

  function handleToggle(id) {
    activeTab.value = id
  }
</script>

<template>
  <div class="tabs">
    <AppInner class="inner--narrow">
      <div class="tabs__actions">
        <AppTabButton :id="'customer'" title="For coffee hobbyists" @toggle="handleToggle" :class="{ 'tab-button--active': activeTab == 'customer' }" />
        <AppTabButton :id="'business'" title="For cafe owners" @toggle="handleToggle" :class="{ 'tab-button--active': activeTab == 'business' }" />
      </div>
    </AppInner>
    <div class="tabs__content">
      <AppInner class="inner--narrow">
      <AppTabContent v-for="benefits, key in content" :key="key" :class="{ 'tab-content--active': activeTab === key }">
        <template #content>
          <Splide :options="sliderOptions" :has-track="false">
            <SplideTrack>
              <SplideSlide v-for="benefit, key in benefits" :key="key">
                <AppBenefit :benefit="benefit" />
              </SplideSlide>
            </SplideTrack>

            <div class="splide__arrows">
              <button class="splide__arrow splide__arrow--prev">
                <PhArrowLeft />
              </button>
              <button class="splide__arrow splide__arrow--next">
                <PhArrowRight />
              </button>
            </div>
          </Splide>
        </template>
      </AppTabContent>
    </AppInner>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .tabs__actions {
    border-radius: $border-radius;
    background-color: $clr-shade;
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

  .splide__arrow {
    background: $clr-secondary;
    color: $clr-primary;

    &--prev {
      left: -5%;
      transform: translateY(-50%) scale(-1);
    }
    &--next {
      right: -5%;
    }
  }

  @media (max-width: 425px) {
    .splide__arrow {
      &--prev {
        left: 1rem;
      }
      &--next {
        right: 1rem;
      }
    }
  }
</style>