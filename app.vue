<script setup lang="ts">
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "additionalType": "Marketplace for independent cafes in Tyne and Wear",
    "name": "Coffee Detectives",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Gateshead",
      "addressRegion": "Tyne and Wear",
      "postalCode": "NE10 0DU",
      "addressCountry": "United Kingdom"
    },
    "url": "https://www.coffeedetectives.co.uk/",
    "telephone": "+447446840237",
    "priceRange": "$",
    "image": ["https://www.coffeedetectives.co.uk/images/logo.png"],
    "sameAs": [],
    "description": "Coffee Detectives is a digital marketplace where coffee enthusiasts can search for independent cafes in Tyne and Wear.",
    "logo": "https://www.coffeedetectives.co.uk/images/logo.png",
    "areaServed": [
      {
        "@type": "City",
        "name": "Newcastle upon Tyne"
      },
      {
        "@type": "City",
        "name": "Gateshead"
      },
      {
        "@type": "City",
        "name": "Sunderland"
      },
      {
        "@type": "City",
        "name": "South Shields"
      },
      {
        "@type": "City",
        "name": "North Shields"
      },
      {
        "@type": "City",
        "name": "Tynemouth"
      }
    ]
  }

  const siteTitle = 'Coffee Detectives : Marketplace for independent cafes in Tyne & Wear and beyond.'

  useHead({
    titleTemplate: (titleChunk) => {
      return titleChunk !== 'Home' ? `${titleChunk} : ${siteTitle}` : siteTitle
    },
    meta: [
      { name: 'description', content: 'Coffee Detectives: a digital marketplace where coffee enthusiasts can search for independent cafes in Tyne and Wear.' },
      { name: 'keywords', content: 'coffee, cafe, independent, business, local, culture' },
      { name: 'author', content: 'Chris Prusakiewicz' },
      { name: 'msapplication-TileImage', content: '/apple-touch-icon.png' },
      { name: 'msapplication-TileColor', content: '4b3009' },
    ],
    link: [
      { rel: 'shortcut icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' }
    ],
    htmlAttrs: {
      lang: 'en-GB'
    },
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify(structuredData)
      }
    ]
  })
</script>

<template>
  <div>
    <AppHeader />
    <NuxtPage />
    <AppFooter />
  </div>
</template>
