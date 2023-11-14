<script lang="ts">
  export default defineComponent({
    props: {
      src: {
        type: String,
        required: true
      }
    }
  })
</script>

<template>
  <img :src="src" alt="" loading="lazy" width="" height="" />
</template>