<script setup lang="ts">
  import '@splidejs/vue-splide/css'

  // Use page content in the head
  const { page } = useContent()
  useContentHead(page)

  // Fetch data required by the homepage
  const stats = await queryContent('stats').limit(4).find()
  const offering = await queryContent('offering').limit(6).find()
  const proposition = {
    customer: await queryContent('proposition/customer').find(),
    business: await queryContent('proposition/business').find()
  }
</script>

<template>
  <main id="main" class="main">
    <AppHero>
      <template #title>{{ page.longTitle }}</template>
      <template #tagline>{{ page.mtagline }}</template>
    </AppHero>

    <AppSection id="problem">
      <AppInner>
        <AppFeature class="feature--center feature--margin" icon="map.png" :title="page.tagline" :tagline="page.content" />

        <AppGrid class="grid--4">
          <AppPortal
            v-for="stat, key in stats"
            :key="key" 
            :class="{ 'portal-listing--large': key === 0, 'portal-listing--medium': key === 1 }"
            :title="stat.title"
            :text="stat.text"
            :image="stat.image"
          />
        </AppGrid>
      </AppInner>
    </AppSection>

    <AppSection id="about-us" class="section--pattern">
      <AppInner class="inner--narrow">
        <AppFeature class="feature--center feature--margin feature--rev" :title="page.tagline2" :tagline="page.content2" />

        <AppOffering v-for="offer, key in offering" :key="key" :offer="offer">
          <template #title>{{ offer.title }}</template>
          <template #tagline>{{ offer.tagline }}</template>
          <template #content>{{ offer.description }}</template>
        </AppOffering>
      </AppInner>
    </AppSection>

    <AppSection id="solution">
      <AppInner>
        <AppFeature class="feature--center feature--margin" :title="page.tagline3" :tagline="page.content3" />
      </AppInner>
      <AppTabs :content="proposition" />
    </AppSection>

    <AppSection id="demo" class="section--gradient">
      <AppInner>
        <AppFeature class="feature--center feature--margin" :title="page.tagline4" :tagline="page.content4" />
        <AppGallery />
      </AppInner>
    </AppSection>

    <AppSection id="subscribe" class="section--sunburst">
      <AppInner class="inner--narrow">
        <AppFeature class="feature--center feature--margin-small" title="Join our mailing list" tagline="Add your email address to our mailing list and get notified about the latest news and updates from Coffee Detectives. Be the first to hear about the new features, beta access and more." />
        <AppSubscribe />
      </AppInner>
    </AppSection>
  </main>
</template>

<style scoped lang="scss">
  @import '@/assets/styles/homepage.scss';
</style>