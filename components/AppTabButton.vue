<script setup lang="ts">
  const emit = defineEmits(['toggle'])

  defineProps({
    id: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  })

  function toggle(id) {
    emit('toggle', id)
  }
</script>

<template>
  <button class="tab-button" @click="toggle(id)" :value="id">{{ title }}</button>
</template>

<style scoped lang="scss">
  .tab-button {
    border: 0;
    border-radius: 3px;
    color: $clr-primary;
    flex: 1 0;
    padding: 0.775rem 1rem 0.875rem;
    text-transform: uppercase;

    &--active {
      background-color: $clr-secondary;
      font-weight: $bold-weight;
    }
  }
</style>