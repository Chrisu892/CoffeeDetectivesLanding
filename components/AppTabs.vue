<script lang="ts">
  export default defineComponent({
    props: {
      content: {
        type: Array,
        required: true
      }
    },
    data() {
      return {
        activeTab: 0,
      }
    },
    methods: {
      handleToggle(id) {
        this.activeTab = id
      }
    }
  })
</script>

<template>
  <div class="tabs">
    <div class="tabs__actions">
      <AppTabButton 
        v-for="tab, key in content" 
        :key="key" 
        :id="key" 
        :title="tab.title" 
        @toggle="handleToggle"
        :class="{ 'tab-button--active': activeTab === key }"
      />
    </div>
    <div class="tabs__content">
      <AppTabContent 
        v-for="tab, key in content" 
        :key="key" 
        :content="tab.content" 
        :class="{ 'tab-content--active': activeTab === key }"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
  .tabs__actions {
    background-color: $clr-shade;
    border-radius: 25px;
    display: flex;
    flex-direction: row;
    gap: 0.25rem;
    padding: 0.25rem;
  }
  .tabs__content {
    margin-top: 1rem;
  }
</style>