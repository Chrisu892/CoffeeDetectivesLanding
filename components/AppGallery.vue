<script setup lang="ts">
  import { defineComponent } from 'vue'
  import { Splide, SplideTrack, SplideSlide } from '@splidejs/vue-splide'
  import { PhCamera, PhArrowLeft, PhArrowRight } from '@phosphor-icons/vue'

  const sliderOptions = {
    type: 'carousel',
    perPage: 1,
    perSlide: 1,
    gap: '1rem',
    pagination: false,
  }

  const gallery = await queryContent('gallery').find()

  defineComponent({
    components: {
      Splide,
      SplideTrack,
      SplideSlide,
      PhCamera,
      PhArrowLeft,
      PhArrowRight,
    }
  })
</script>

<template>
  <div class="gallery">
    <AppImage src="/images/gallery-background-1.png" class="gallery__background" />
    <div class="gallery__wrapper">
      <Splide :options="sliderOptions" :has-track="false">
        <SplideTrack>
          <SplideSlide v-for="image, key in gallery" :key="key">
            <div class="gallery__container">
              <AppImage :src="image.src" />
            </div>
            <div class="gallery__content">
              <h3 class="gallery__caption">{{ image.title }}</h3>
              <div class="gallery__description">{{ image.description }}</div>
            </div>
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
    </div>
  </div>
</template>

<style scoped lang="scss">
  .gallery {
    position: relative;
  }
  .gallery__background {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    object-fit: contain;
    object-position: top center;
    transform: scaleX(-1);
  }
  .gallery__wrapper {
    margin: 0 auto;
    max-width: 800px;
  }
  .gallery__container {
    background-color: $clr-white;
    border: solid 1px $clr-shade;
    border-radius: 15px;
    overflow: hidden;
    padding: 1rem;
  }
  .gallery__image {
    position: relative;
  }
  .gallery__content {
    padding: $gutter-half;
    text-align: center;
  }
  .splide__arrow {
    background: $clr-secondary;
    color: $clr-primary;
    opacity: 1;
    top: 40%;

    &--prev {
      left: -10%;
    }
    &--next {
      right: -10%;
    }

    svg {
      fill: currentColor;
      transform: initial;
    }
  }

  @media (max-width: 980px) {
    .gallery__wrapper {
      max-width: 700px;
    }
  }

  @media (max-width: 880px) {
    .gallery__wrapper {
      max-width: 600px;
    }
  }

  @media (max-width: 750px) {
    .gallery__wrapper {
      max-width: 100%;
    }
    .splide__arrow {
      &--prev {
        left: -2.5rem;
      }
      &--next {
        right: -2.5rem;
      }
    }
  }

  @media (max-width: 600px) {
    .splide__arrow {
      &--prev {
        left: -1rem;
      }
      &--next {
        right: -1rem;
      }
    }
  }

  @media (max-width: 425px) {
    .splide__arrow {
      &--prev {
        left: 0.5rem;
      }
      &--next {
        right: 0.5rem;
      }
    }
  }
</style>