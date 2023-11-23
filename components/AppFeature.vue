<script setup lang="ts">
  import { PhMapPinLine } from '@phosphor-icons/vue'

  defineProps({
    icon: {
      type: String,
      default: null
    },
    title: {
      type: String,
      required: true
    },
    tagline: {
      type: String,
      required: true
    }
  })

  defineComponent({
    components: {
      PhMapPinLine,
    }
  })
</script>

<template>
  <div class="feature">
    <PhMapPinLine v-if="icon && icon === 'PhMapPinLine'" />
    <AppImage v-if="icon && icon === 'map.png'" src="/images/map.png" class="feature__image" />
    <h2 class="feature__title">{{ title }}</h2>
    <p class="feature__tagline">{{ tagline }}</p>
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
    &--rev {
      color: $clr-white;
    }

    svg {
      height: 44px;
      margin-bottom: 0.5rem;
      width: 44px;
    }
  }
  .feature__image {
    margin: 0 auto 1rem;
    max-width: 130px;
  }
</style>