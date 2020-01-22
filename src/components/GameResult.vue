<template>
  <div class="GameResult">

    <h2>
      Totalpoäng:
    </h2>

    <h1>
      <span class="bluetext">
        <AnimatedNumber :end="pTotal"></AnimatedNumber>
        ❤️
      </span>
    </h1>

    <ContinueButton @click.native.once="nextStep()">Fortsätt!</ContinueButton>

  </div>
</template>

<script>

import ContinueButton from '@/components/ContinueButton.vue'
import AnimatedNumber from '@/components/AnimatedNumber.vue'

import { createNamespacedHelpers } from 'vuex'
const { mapState, mapGetters } = createNamespacedHelpers('newsroom')

export default {
  name: 'GameResult',
  components: {
    ContinueButton,
    AnimatedNumber
  },
  data: function () {
    return {
      pTotal: 0,
    }
  },
  props: {
  },
  computed: {
    ...mapState([
      'finished',
    ]),
    ...mapGetters([
      'calcPoints'
    ]),
  },
  watch: {
    finished: function (val){
      if(val){
        this.pTotal = this.calcPoints
      }
    }
  },
  methods: {
    nextStep: function () {
      this.$store.commit('newsroom/nextStep')
    },
  },
  mounted: function () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.GameResult{
  text-align: center;
}

</style>
