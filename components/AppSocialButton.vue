<script setup lang="ts">
  import { defineProps } from 'vue'

  defineProps({
    to: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  })
</script>

<template>
  <a class="social" :href="to" :title="title" target="_blank">
    <slot />
  </a>
</template>

<style scoped lang="scss">
  .social {
    align-items: center;
    border: solid 1px $clr-white;
    border-radius: 100%;
    color: $clr-white;
    display: inline-flex;
    height: 52px;
    justify-content: center;
    transition: border-color 250ms ease-in-out, color 250ms ease-in-out, transform 250ms ease-in-out;
    width: 52px;

    svg {
      display: inline-block;
      height: 30px;
      width: 30px;
    }

    &:hover {
      transform: scale(1.1);
    }
  }
</style>