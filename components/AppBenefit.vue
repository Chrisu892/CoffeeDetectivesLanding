<script type="ts">
  import { 
    PhMagnifyingGlass, 
    PhCoffee, 
    PhUsersThree, 
    PhPlant, 
    PhPresentationChart,
    PhChartLineUp,
    PhMegaphone,
    PhCursorClick,
    PhSmiley,
    PhChartBar,
    PhThumbsUp,
    PhChatsCircle,
    PhCrown,
    PhPiggyBank,
    PhMoney,
    PhTrophy
  } from '@phosphor-icons/vue'

  export default defineComponent({
    components: {
      PhMagnifyingGlass,
      PhCoffee,
      PhUsersThree,
      PhPlant,
      PhPresentationChart,
      PhChartLineUp,
      PhMegaphone,
      PhCursorClick,
      PhSmiley,
      PhChartBar,
      PhThumbsUp,
      PhChatsCircle,
      PhCrown,
      PhPiggyBank,
      PhMoney,
      PhTrophy
    },
    props: {
      benefit: {
        type: Object,
        required: true,
      }
    }
  })
</script>

<template>
  <div class="benefit" type="button">
    <div class="benefit__icon">
      <PhMagnifyingGlass v-if="benefit.icon === 'PhMagnifyingGlass'" />
      <PhCoffee v-if="benefit.icon === 'PhCoffee'" />
      <PhUsersThree v-if="benefit.icon === 'PhUsersThree'" />
      <PhPlant v-if="benefit.icon === 'PhPlant'" />
      <PhPresentationChart v-if="benefit.icon === 'PhPresentationChart'" />
      <PhChartLineUp v-if="benefit.icon === 'PhChartLineUp'" />
      <PhMegaphone v-if="benefit.icon === 'PhMegaphone'" />
      <PhCursorClick v-if="benefit.icon === 'PhCursorClick'" />
      <PhSmiley v-if="benefit.icon === 'PhSmiley'" />
      <PhChartBar v-if="benefit.icon === 'PhChartBar'" />
      <PhThumbsUp v-if="benefit.icon === 'PhThumbsUp'" />
      <PhChatsCircle v-if="benefit.icon === 'PhChatsCircle'" />
      <PhCrown v-if="benefit.icon === 'PhCrown'" />
      <PhPiggyBank v-if="benefit.icon === 'PhPiggyBank'" />
      <PhMoney v-if="benefit.icon === 'PhMoney'" />
      <PhTrophy v-if="benefit.icon === 'PhTrophy'" />
    </div>
    <div class="benefit__title">{{ benefit.title }}</div>
    <div class="benefit__content">{{ benefit.description }}</div>
  </div>
</template>

<style scoped lang="scss">
  .benefit {
    border: solid 1px $clr-shade;
    border-radius: $border-radius;
    background: transparent;
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: $gutter $gutter-half $gutter-half $gutter-half;
    text-align: center;

    @media (max-width: 640px) {
      padding: $gutter $gutter-large;
      text-align: center;
    }
  }
  .benefit__icon {
    color: $clr-primary;

    svg {
      display: inline-block;
      height: 44px;
      width: 44px;
    }
  }
  .benefit__title {
    font: $font-header;
    margin: 0.25rem 0 1rem;
    @include font-medium;
  }
</style>