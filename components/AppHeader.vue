<script setup lang="ts">
  import { ref, onMounted, onUnmounted, nextTick } from 'vue'

  const isTransparent = ref(true)
  let threshold = ref(0)

  const handleScroll = () => {
    isTransparent.value = window.scrollY < threshold.value
  }

  onMounted(async () => {
    await nextTick()
    const hero = document.getElementById('hero')
    const header = document.getElementById('header');
    threshold.value = hero.offsetHeight - header.offsetHeight
    window.addEventListener('scroll', handleScroll)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })
</script>

<template>
  <header id="header" class="header" :class="{ 'header--active': !isTransparent }">
    <AppInner class="header__container">
      <AppLogo :class="{ 'logo--rev': !isTransparent }" />
      <AppNav :class="{ 'nav--rev': !isTransparent }" />
    </AppInner>
  </header>
</template>

<style scoped lang="scss">
  .header {
    background-color: rgba($clr-primary, 0.3);
    left: 0;
    padding: 1.25rem 0;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 100;
    transition: background-color 350ms ease-in-out;

    &--active {
      background-color: rgba($clr-white, 0.75);
    }
  }
  .header__container {
    align-items: center;
    display: flex;
    flex-direction: row;
    gap: $gutter-half;
    justify-content: space-between;
  }

  @media (max-width: 640px) {
    .header__container {
      justify-content: center;
    }
    .nav {
      display: none;
    }
  }
</style>