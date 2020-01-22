<template>
  <div class="ScoopResult">

  <h3>Delpoäng: {{scoop.name}}</h3>
  <h2>
    Tidsbonus:
    <span class="bluetext">
      <AnimatedNumber :end="pTime" :delay="1000"></AnimatedNumber>
      ❤️
    </span>
  </h2>
  <h2>
    Korrekta granskningar:
    <div class="bluebox">
      x<AnimatedNumber :end="pCorrect" :delay="2000"></AnimatedNumber>
      ❤️
    </div>
  </h2>
  <h1>
    <span class="bluetext">
      <AnimatedNumber :end="pScoop" :delay="3000"></AnimatedNumber>
      ❤️
    </span>
  </h1>

  <hr />

  <ContinueButton @click.native.once="nextStep()">Fortsätt!</ContinueButton>

  </div>
</template>

<script>

import ContinueButton from '@/components/ContinueButton.vue'
import AnimatedNumber from '@/components/AnimatedNumber.vue'

import { createNamespacedHelpers } from 'vuex'
const { mapGetters } = createNamespacedHelpers('newsroom/scoop')

export default {
  name: 'ScoopResult',
  components: {
    ContinueButton,
    AnimatedNumber,
  },
  data: function () {
    return {
      pCorrect: 0,
      pTime: 0,
      pScoop: 0,
    }
  },
  props: {
    scoop: Object
  },
  computed: {
    /*...mapState([
      'finished',
    ]),*/
    ...mapGetters([
      'getNCorrect',
      'calcPoints'
    ]),
    finished: function () {
      return this.scoop.finished
    }
  },
  watch: {
    finished: function (val){
      if(val){
        this.pTime = this.scoop.time
        this.pCorrect = this.getNCorrect(this.scoop)
        this.pScoop = this.calcPoints(this.scoop)
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

.ScoopResult{
  text-align: center;
}

</style>
