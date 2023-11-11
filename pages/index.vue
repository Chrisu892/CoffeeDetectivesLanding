<script setup lang="ts">
  // Use page content in the head
  const { page } = useContent()
  useContentHead(page)

  // Fetch data required for the homepage
  const stats = await queryContent('stats').limit(4).find()
</script>

<template>
  <main id="main" class="main">
    <AppHero>
      <template #title>{{ page.longTitle }}</template>
      <template #tagline>{{ page.mtagline }}</template>
    </AppHero>

    <AppSection id="mission">
      <AppFeature class="feature--center">
        <template #title>{{ page.tagline }}</template>
        <template #tagline>{{ page.content }}</template>
      </AppFeature>

      <AppGrid class="grid--4">
        <AppPortal v-for="stat, key in stats" :key="key">
          <template #stat>{{ stat.number }}</template>
          <template #blurb>{{ stat.title }}</template>
        </AppPortal>
      </AppGrid>
      <div class="credit">Based on survey of 8 independent cafes in Newcastle upon Tyne</div>
    </AppSection>

    <AppSection id="perspectives">
      
    </AppSection>
  </main>
</template>

<style scoped lang="scss">
  @import '@/assets/styles/homepage.scss';
</style>