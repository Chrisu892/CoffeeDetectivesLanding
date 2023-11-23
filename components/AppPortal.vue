<script setup lang="ts">
  defineProps({
    image: {
      type: String,
      default: null
    },
    title: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  })
</script>

<template>
  <article class="portal-listing">
    <AppImage class="portal-listing__thumbnail" :src="image" />
    <div class="portal-listing__overlay">
      <h3 class="portal-listing__title">{{ title }}</h3>
      <p class="portal-listing__text">{{ text }}</p>
    </div>
  </article>
</template>

<style scoped lang="scss">
  .portal-listing {
    background-color: $clr-shade;
    border: solid 0.5rem $clr-primary;
    border-radius: $border-radius;
    overflow: hidden;
    padding-top: 75%;
    position: relative;

    &:nth-child(1) {
      grid-column: 1/3;
      grid-row: 1/3;
    }
    &:nth-child(2) {
      grid-column: 3/4;
      grid-row: 1/3;
    }
    &:nth-child(3) {
      grid-column: 4/5;
      grid-row: 1/2;
    }
    &:nth-child(4) {
      grid-column: 4/5;
      grid-row: 2/3;
    }

    @media (max-width: 1280px) {
      &:nth-child(1) {
        grid-column: 1/3;
        grid-row: 1/2;
      }
      &:nth-child(2) {
        grid-column: 3/6;
        grid-row: 1/2;
      }
      &:nth-child(3) {
        grid-column: 1/3;
        grid-row: 2/3;
        padding-top: 50%;
      }
      &:nth-child(4) {
        grid-column: 3/6;
        grid-row: 2/3;
        padding-top: 50%;
      }
    }

    @media (max-width: 768px) {
      &:nth-child(1) {
        grid-column: 1/6;
        grid-row: 1/2;
        padding-top: 50%;
      }
      &:nth-child(2) {
        grid-column: 1/6;
        grid-row: 2/3;
        padding-top: 50%;
      }
      &:nth-child(3) {
        grid-column: 1/6;
        grid-row: 3/4;
      }
      &:nth-child(4) {
        grid-column: 1/6;
        grid-row: 4/5;
      }
    }
  }
  .portal-listing__thumbnail {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .portal-listing__overlay {
    background: linear-gradient(180deg, rgba($clr-primary, 0.25) 50%, rgba($clr-primary, 0.85) 100%);
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    left: 0;
    padding: $gutter-half;
    position: absolute;
    right: 0;
    z-index: 1;
    color: $clr-white;
    top: 0;
    text-shadow: 0 0 2px $clr-dark;
  }
  .portal-listing__title {
    @include font-xl;
    font-weight: $bold-weight;
    line-height: 1;
  }
  .portal-listing__text {
    max-width: 415px;
  }
</style>