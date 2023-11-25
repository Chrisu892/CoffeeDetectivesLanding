<script setup lang="ts">
  import { PhInstagramLogo, PhEnvelope, PhWhatsappLogo, PhGithubLogo } from '@phosphor-icons/vue'

  defineComponent({
    components: {
      PhInstagramLogo,
      PhEnvelope,
      PhWhatsappLogo,
      PhGithubLogo,
    }
  })

  defineProps({
    name: {
      type: String,
      required: true
    },
    to: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  })
</script>

<template>
  <a class="social" :href="to" :title="title" target="_blank">
    <template v-if="name === 'Instagram'"><PhInstagramLogo /></template>
    <template v-if="name === 'Email'"><PhEnvelope /></template>
    <template v-if="name === 'WhatsApp'"><PhWhatsappLogo /></template>
    <template v-if="name === 'GitHub'"><PhGithubLogo /></template>
  </a>
</template>

<style scoped lang="scss">
  .social {
    align-items: center;
    border-radius: 100%;
    color: $clr-white !important;
    display: inline-flex;
    height: 52px;
    justify-content: center;
    transition: border-color 250ms ease-in-out, color 250ms ease-in-out, transform 250ms ease-in-out;
    width: 52px;

    svg {
      display: inline-block;
      height: 26px;
      width: 26px;
    }

    &:hover {
      transform: scale(1.1);
    }

    &--instagram {
      background: #fd5949;
      background: linear-gradient(to bottom, #fd5949 13%, #d6249f 66%, #285aeb 100%);
    }
    &--email {
      background: $clr-dark;
    }
    &--whatsapp {
      background: #128C7E;
    }
    &--github {
      background: #333;
    }
  }
</style>