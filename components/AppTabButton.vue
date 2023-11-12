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
    border-radius: 20px;
    flex: 1 0;
    padding: 0.775rem 1rem 0.875rem;
    text-transform: uppercase;

    &--active {
      background-color: $clr-secondary;
    }
  }
</style>