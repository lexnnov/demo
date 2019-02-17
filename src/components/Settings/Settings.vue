<template>
  <v-popover :delay="{ hide: 100 }" @show="open" @hide="close" offset="15" :disabled="!isEnabled">

    <button class="tooltip-target" v-bind:class="{ active: isActive }">
      <img src="../../assets/cog.svg" width="24" height="24" alt="image description">
    </button>

    <template class="settings_tooltip " slot="popover">

      <p class="tooltip-inner_header">
        <span>
            Manage rules
        </span>
      </p>

      <div class="tooltip-inner_content">

        <v-flex class="tooltip-inner_content_input" xs12>
          <v-text-field
            v-model="duration"
            hide-details
            label="Duration"
            placeholder="Placeholder"
          ></v-text-field>
        </v-flex>

        <v-flex class="tooltip-inner_content_input" xs12>
          <v-text-field
            v-model="minVotes"
            hide-details
            label="Min. votes to pass"
            placeholder="Placeholder"
          ></v-text-field>
        </v-flex>

        <v-flex class="settings_tooltip_content_input" xs12>
          <v-text-field
            v-model="votes"
            hide-details
            label="VOTES per user"
            placeholder="Placeholder"
          ></v-text-field>

        </v-flex>

      </div>
    </template>
  </v-popover>
</template>

<script>

  export default {

    name: 'Settings',
    data() {
      return {
        isEnabled: true,
        isActive: false,
        duration: '',
        minVotes: '',
        votes: '',
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
