<script lang="ts" setup>
  import { Splide, SplideSlide, SplideTrack } from '@splidejs/vue-splide'

  const sliderOptions = {
    type: 'carousel',
    perPage: 1,
    perSlide: 1,
    gap: '1rem',
    pagination: false,
  }

  const gallery = await queryContent('gallery').find()
</script>

<script lang="ts">
  import { PhCamera, PhArrowLeft, PhArrowRight } from '@phosphor-icons/vue'

  export default defineComponent({
    components: {
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
      <div class="gallery__credits">
        <PhCamera /> <div><a href="https://unsplash.com/@sarahdorweiler?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Sarah Dorweiler</a></div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .gallery {
    overflow: hidden;
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
    margin-bottom: $gutter-half;
  }
  .gallery__credits {
    @include font-small;
    align-items: center;
    display: flex;
    gap: 0.5rem;
    justify-content: center;
  }
  .splide__arrow {
    background: $clr-primary;
    bottom: 7.5%;
    color: $clr-secondary;
    opacity: 1;
    top: initial;

    &--prev {
      left: -5%;
    }
    &--next {
      right: -5%;
    }

    svg {
      fill: currentColor;
      transform: initial;
    }
  }
</style>