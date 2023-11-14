<script lang="ts" setup>
  import { Splide, SplideSlide } from '@splidejs/vue-splide'
  import '@splidejs/vue-splide/css'

  const sliderOptions = {
    type: 'carousel',
    perPage: 1,
    perSlide: 1,
    gap: '1rem',
  }

  const gallery = await queryContent('gallery').find()
</script>

<template>
  <div class="gallery">
    <Splide :options="sliderOptions">
      <SplideSlide v-for="image, key in gallery" :key="key">
        <div class="gallery__container">
          <AppImage :src="image.src" />
        </div>
        <div class="gallery__content">
          <h3 class="gallery__caption">{{ image.title }}</h3>
          <div class="gallery__description">{{ image.description }}</div>
        </div>
      </SplideSlide>
    </Splide>
  </div>
</template>

<style scoped lang="scss">
  .gallery {
    margin: 0 auto;
    max-width: 800px;
    overflow: hidden;
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
</style>