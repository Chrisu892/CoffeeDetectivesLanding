<script setup lang="ts">
  import { PhMapPinLine } from "@phosphor-icons/vue"

  // Use page content in the head
  const { page } = useContent()
  useContentHead(page)

  // Fetch data required for the homepage
  const stats = await queryContent('stats').limit(4).find()
  const offering = await queryContent('offering').limit(6).find()
</script>

<template>
  <main id="main" class="main">
    <AppHero>
      <template #title>{{ page.longTitle }}</template>
      <template #tagline>{{ page.mtagline }}</template>
    </AppHero>

    <AppSection id="mission">
      <AppInner>
        <AppFeature class="feature--center" icon="PhMapPinLine">
          <template #title>{{ page.tagline }}</template>
          <template #tagline>{{ page.content }}</template>
        </AppFeature>

        <AppGrid class="grid--4">
          <AppPortal v-for="stat, key in stats" :key="key" :class="{ 'portal-listing--large': key === 0, 'portal-listing--medium': key === 1 }">
            <template #stat>{{ stat.number }}</template>
            <template #blurb>{{ stat.title }}</template>
          </AppPortal>
        </AppGrid>
        <div class="credit">Based on survey of 8 independent cafes in Newcastle upon Tyne</div>
      </AppInner>
    </AppSection>

    <AppSection id="perspectives" class="section--shade">
      <AppInner>
        <AppFeature class="feature--center">
          <template #title>{{ page.tagline2 }}</template>
          <template #tagline>{{ page.content2 }}</template>
        </AppFeature>

        <AppOffering v-for="offer, key in offering" :key="key" :offer="offer">
          <template #title>{{ offer.title }}</template>
          <template #tagline>{{ offer.tagline }}</template>
          <template #content>{{ offer.description }}</template>
        </AppOffering>
      </AppInner>
    </AppSection>

    <AppSection>
      <AppInner>
        <AppFeature class="feature--center">
          <template #title>Our value proposition is simple</template>
          <template #tagline>We want to create a go-to platform for coffee hobbyists and cafe owners.</template>
        </AppFeature>
        <AppTabs :content="[{
          title: 'For coffee enthusiasts',
          content: page.content3
        }, {
          title: 'For cafe owners',
          content: page.content4
        }]" />
      </AppInner>
    </AppSection>

    <AppSection>
      <AppInner>
        <AppTestimonial>
          <template #title>{{ page.tagline3 }}</template>
          <template #content>{{ page.content3 }}</template>
          <template #author>Chris Prusakiewicz</template>
        </AppTestimonial>
      </AppInner>
    </AppSection>
  </main>
</template>

<style scoped lang="scss">
  @import '@/assets/styles/homepage.scss';
</style>