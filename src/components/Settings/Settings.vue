<template>
  <v-popover @apply-show="open" @hide="close" offset="12" :disabled="!isEnabled">

    <button class="tooltip-target" :class="{ active: isActive }">
      <img src="../../assets/cog.svg" width="24" height="24" alt="image description">
    </button>

    <template class="settings_tooltip " slot="popover">

      <p class="tooltip-inner_header">
        <span>
          Manage rules
        </span>
      </p>

      <div class="tooltip-inner_content">
        <Input :active="isActive" idInput="duration" label="duration"/>
        <Input idInput="minVotes" label="Min. votes to pass"/>
        <Input idInput="votes" label="VOTES per user"/>
      </div>

    </template>
  </v-popover>
</template>

<script>

  import Input from '../Input/Input';

  export default {

    name: 'Settings',
    components: { Input },
    data() {
      return {
        isEnabled: true,
        isActive: false
      };
    },
    methods: {
      open() {
        this.isActive = true;
      },
      close() {
        this.isActive = false;
      }
    }
  };
</script>

<style lang="scss">

</style>
