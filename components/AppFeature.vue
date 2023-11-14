<script lang="ts">
  import { PhMapPinLine } from '@phosphor-icons/vue'

  export default defineComponent({
    components: {
      PhMapPinLine,
    },
    props: {
      icon: {
        type: String,
        default: null
      }
    }
  })
</script>

<template>
  <div class="feature">
    <PhMapPinLine v-if="icon && icon === 'PhMapPinLine'" />
    <h2 class="feature__title">
      <slot name="title" />
    </h2>
    <p class="feature__tagline">
      <slot name="tagline" />
    </p>
  </div>
</template>

<style scoped lang="scss">
  .feature {
    margin: 0 auto;
    max-width: 880px;

    &--center {
      text-align: center;
    }
    &--margin {
      margin-bottom: $gutter;
    }
    &--margin-small {
      margin-bottom: $gutter-half;
    }

    svg {
      height: 44px;
      margin-bottom: 0.5rem;
      width: 44px;
    }
  }
</style>