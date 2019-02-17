<template>
  <v-app>
    <Tools />
  </v-app>
</template>

<script>
  import Tools from '../Tools/Tools';

  export default {
    name: 'Main',
    components: {
      Tools,
    }
  };
</script>

<style lang="scss">
  @import "../../styles/global";
</style>
