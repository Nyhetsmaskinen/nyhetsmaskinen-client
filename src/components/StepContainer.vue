<template>
  <div class="StepContainer">
    <slot>
    </slot>
  </div>
</template>

<script>

export default {
  name: 'StepContainer',
  data: function () {
    return {
    }
  },
  props: {
    step: {type: Number, default: -1}
  },
  computed: {
  },
  watch: {
    step: function (val){
      if(val > -1){
        let el = this.$el.getElementsByClassName('Step')[val];
        el.style.display = "inline";
        el.scrollIntoView(true)
      }
    }
  },
  methods: {
  },
  mounted: function () {
    this.$store.commit('newsroom/setStep', {step: 0})
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

  .StepContainer{
  }

</style>
