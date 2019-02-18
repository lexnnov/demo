<template>
  <div @click="focus" class="input-wrapper">
    <label :class="{ activeInput: isActive }">{{ label }}</label>
    <input  :ref="idInput" @input="isNumber" v-model="inputValue"  @blur="unFocus" />
    <span :class="{ whiteBorder: !isActive }" class="input-highlight border">
      {{ inputValue.replace(/[^\d.]/g, '')}}
    </span>
  </div>
</template>

<script>
  export default {
    name: 'Input',
    props: ['label', 'idInput', 'active'],
    data() {
      return {
        inputValue: '',
        isActive: false,
      };
    },
    watch: {
      active: function(active) {
        if(active){
          setTimeout(()=>{
            this.$refs.duration.focus();
            this.isActive = true
          },50)
        }
      }
    },
    methods: {
      isNumber(){
        return this.inputValue = this.inputValue.replace(/[^\d.]/g, '')
      },
      focus() {
        this.$refs[`${this.idInput}`].focus();
        this.isActive = true
      },
      unFocus() {
        this.isActive = false
      }
    }
  };
</script>

<style scoped>

</style>
