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
        <AppFeature class="feature--center feature--margin" icon="PhMapPinLine">
          <template #title>{{ page.tagline }}</template>
          <template #tagline>{{ page.content }}</template>
        </AppFeature>

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

    <AppSection id="about-us" class="section--shade">
      <AppInner class="inner--narrow">
        <AppFeature class="feature--center feature--margin">
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

    <AppSection id="solution">
      <AppInner>
        <AppFeature class="feature--center feature--margin">
          <template #title>{{ page.tagline3 }}</template>
          <template #tagline>{{ page.content3 }}</template>
        </AppFeature>
        <AppTabs :content="proposition" />
      </AppInner>
    </AppSection>

    <AppSection id="demo" class="section--gradient">
      <AppInner>
        <AppFeature class="feature--center feature--margin">
          <template #title>{{ page.tagline4 }}</template>
          <template #tagline>{{ page.content4 }}</template>
        </AppFeature>
        <AppGallery />
      </AppInner>
    </AppSection>

    <AppSection id="subscribe" class="section--sunburst">
      <AppInner class="inner--narrow">
        <AppFeature class="feature--center feature--margin-small">
          <template #title>Join our mailing list</template>
          <template #tagline>Add your email address to our mailing list and get notified about the latest news and updates from Coffee Detectives. Be the first to hear about the new features, beta access and more.</template>
        </AppFeature>
        <AppSubscribe />
      </AppInner>
    </AppSection>
  </main>
</template>

<style scoped lang="scss">
  @import '@/assets/styles/homepage.scss';
</style>