<script setup lang="ts">
  defineProps({
    src: {
      type: String,
      required: true
    }
  })
</script>

<template>
  <img :src="src" alt="" loading="lazy" width="" height="" />
</template>