<script setup lang="ts">
  import { ref, defineComponent, defineProps } from 'vue'
  import { PhPlus, PhMountains, PhEye, PhFlag } from '@phosphor-icons/vue'

  const props = defineProps({
    offer: {
      type: Object,
      required: true
    }
  })

  defineComponent({
    components: {
      PhPlus,
      PhMountains,
      PhEye,
      PhFlag
    }
  })

  const isActive = ref(false)
</script>

<template>
  <article class="offering-listing" :class="{ 'offering-listing--active': isActive }">
    <div class="offering-listing__container">
      <div class="offering-listing__icon">
        <PhMountains v-if="offer.icon === 'mountains'" />
        <PhEye v-if="offer.icon === 'eye'" />
        <PhFlag v-if="offer.icon === 'flag'" />
      </div>
      <div class="offering-listing__content">
        <h3 class="offering-listing__title"><slot name="title" /></h3>
        <p class="offering-listing__tagline"><slot name="tagline" /></p>
      </div>
      <div class="offering-listing__action">
        <button class="offering-listing__toggle" type="button" @click="isActive = !isActive">
          <PhPlus />
        </button>
      </div>
    </div>
    <div class="offering-listing__drawer">
      <div class="offering-listing__drawer__content">
        <div class="offering-listing__drawer__border">
          <slot name="content" />
        </div>
      </div>
    </div>
  </article>
</template>

<style scoped lang="scss">
  .offering-listing {
    background-color: $clr-white;

    &:not(:first-child) {
      margin-top: $gutter-half;
    }
  }
  .offering-listing__container {
    align-items: center;
    display: flex;
    flex-direction: row;
  }
  .offering-listing__icon {
    color: $clr-primary;
    padding: $gutter-half 0 $gutter-half $gutter-half;
    line-height: 0;

    svg {
      display: inline-block;
      height: 44px;
      width: 44px;
    }

    @media (max-width: 600px) {
      svg {
        height: 33px;
        width: 33px;
      }
    }

    @media (max-width: 425px) {
      display: none;
    }
  }
  .offering-listing__content {
    flex: 1 0;
    padding: $gutter-half;

    @media (max-width: 425px) {
      padding: $gutter;
    }
  }
  .offering-listing__action {
    padding: $gutter-half $gutter-half $gutter-half 0;
  }
  .offering-listing__title {
    line-height: 1;
    margin: 0;
  }
  .offering-listing__tagline {
    margin-top: 0.25rem;
  }
  .offering-listing__toggle {
    background-color: $clr-secondary;
    border: 0;
    border-radius: 100%;
    color: $clr-primary;
    font-weight: $bold-weight;
    line-height: 0;
    padding: 0;
    height: 44px;
    width: 44px;
    transition: transform 150ms ease-in-out;
  }
  .offering-listing--active .offering-listing__toggle {
    transform: rotate(45deg);
  }
  .offering-listing__drawer {
    overflow: hidden;
    height: 0;
    transition: height 150ms ease-in-out;
  }
  .offering-listing--active .offering-listing__drawer {
    height: auto;
  }
  .offering-listing__drawer__content {
    padding: 0 $gutter-half $gutter-half 3rem;

    @media (max-width: 425px) {
      padding-left: $gutter-half;
    }
  }
  .offering-listing__drawer__border {
    border-left: solid 2px $clr-primary;
    padding-left: 3rem;

    @media (max-width: 425px) {
      padding-left: $gutter-half;
    }
  }
</style>