<script lang="ts">
  export default defineComponent({
    data() {
      return {
        isActive: false
      }
    }
  })
</script>

<template>
  <article class="card-listing" :class="{ 'card-listing--active': isActive }">
    <h3 class="card-listing__title">
      <slot name="title" />
    </h3>
    <p class="card-listing__text">
      <slot name="text" />
    </p>
    <div class="card-listing__action">
      <button class="card-listing__button" @click="isActive = !isActive">Read more</button>
    </div>

    <div class="card-listing__modal">
      <div class="card-listing__modal__title">
        <slot name="title" />
      </div>
      <div class="card-listing__modal__content">
        <slot name="content" />
      </div>
      <div class="card-listing__modal__action">
        <button class="card-listing__button" @click="isActive = !isActive">Close</button>
      </div>
    </div>
  </article>
</template>

<style scoped lang="scss">
  .card-listing {
    background-color: $clr-white;
    padding: $gutter-half;
  }
  .card-listing__action {
    margin-top: $gutter-half;
  }
  .card-listing__button {
    background: transparent;
    border: 0;
    color: $clr-secondary;
    display: inline-block;
    font-weight: $bold-weight;
    line-height: 1;
    padding: 0;
  }
  .card-listing__modal {
    position: fixed;
    left: 50%;
    top: 50%;
    max-width: 525px;
    background-color: $clr-white;
    padding: $gutter;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 0 12000px rgba($clr-dark,0.5);
    z-index: 10;
    visibility: hidden;
    opacity: 0;
  }
  .card-listing--active .card-listing__modal {
    visibility: visible;
    opacity: 1;
  }
  .card-listing__modal__title {
    font: $font-header;
    margin-bottom: $gutter-half;
    @include font-large;
  }
  .card-listing__modal__action {
    margin-top: $gutter-half;
  }
</style>