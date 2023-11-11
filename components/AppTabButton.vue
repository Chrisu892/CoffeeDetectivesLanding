<script setup lang="ts">
  const emit = defineEmits(['toggle'])

  function toggle(id) {
    emit('toggle', id)
  }
</script>

<script lang="ts">
  export default defineComponent({
    props: {
      id: {
        type: Number,
        required: true
      },
      title: {
        type: String,
        required: true
      }
    }
  })
</script>

<template>
  <button class="tab-button" @click="toggle(id)" :value="id">{{ title }}</button>
</template>

<style scoped lang="scss">
  .tab-button {
    border: 0;
    border-radius: 25px;
    flex: 1 0;
    padding: 0.25rem 0.5rem;

    &--active {
      background-color: $clr-white;
    }
  }
</style>