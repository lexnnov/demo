<template>
  <div class="tools">
    <div class="tools_counts">
      <Count class="tools_counts_total" :amount="random()" text="TOTAL" />
      <Count :amount="random()" icon="exit_to_app" />
      <Count :amount="random()" icon="remove_red_eye" />
      <Count :amount="random()" icon="chat_bubble_outline" />
      <Count :amount="random()" icon="movie" />
      <Count :amount="random()" icon="equalizer" />
    </div>
    <div class="tools_labels">
      <Count icon="star" />
      <Count icon="apps" />
    </div>
    <div class="tools_settings">
      <Settings />
    </div>
  </div>
</template>

<script>
  import Settings from '../../components/Settings/Settings.vue';
  import Count from '../../components/Count/Count';

  export default {
    name: 'Tools',
    components: {
      Count,
      Settings,
    },
    methods: {
      random() {
        return Math.floor(Math.random() * 101);
      }
    }
  };
</script>

<style lang="scss">

</style>
