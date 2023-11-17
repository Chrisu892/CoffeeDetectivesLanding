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
    height: 50px;
    justify-content: center;
    transition: border-color 350ms ease-in-out, color 350ms ease-in-out;
    width: 50px;

    svg {
      display: inline-block;
      height: 30px;
      width: 30px;
    }
  }
</style>