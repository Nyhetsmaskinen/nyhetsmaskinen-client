<template>
  <div class="ScoopResult">

  <h2>
    Tidsbonus:
    <br />
    <span class="bluetext">
      <AnimatedNumber :end="pTime" :hideZero="true" :delay="1000"></AnimatedNumber>
      ❤️
    </span>
  </h2>
  <h2>
    <Clap emoji="🔍" :small="true"></Clap>
    <span v-if="nCorrect == 1">
      1 korrekt granskning:
    </span>
    <span v-else>
      {{nCorrect}} korrekta granskningar:
    </span>
    <br />
    <div class="bluetext">
      x<AnimatedNumber :end="pCorrect" :delay="2000" v-model="iCorrect"></AnimatedNumber>
        <!--Clap v-for="i in iCorrect" :key="i" class="small"></Clap-->
    </div>
  </h2>
  <h2>
    <Clap emoji="🤔" :small="true"></Clap>
    Bedömning:
    <br />
    <span class="bluetext">
      <AnimatedNumber :end="pRating" :showPlus="true" :duration="0" :steps="1" :delay="3000"></AnimatedNumber>
      ❤️
    </span>
  </h2>

  <hr />

  <h1>
    <span class="bluetext">
      <AnimatedNumber :end="pScoop" :delay="4000"></AnimatedNumber>
      ❤️
    </span>
  </h1>

  </div>
</template>

<script>

import AnimatedNumber from '@/components/AnimatedNumber.vue'
import Clap from '@/components/Clap.vue'

import { createNamespacedHelpers } from 'vuex'
const { mapGetters } = createNamespacedHelpers('newsroom/scoop')

export default {
  name: 'ScoopResult',
  components: {
    AnimatedNumber,
    Clap
  },
  data: function () {
    return {
      iCorrect: 0,
      nCorrect: 0,
      pCorrect: 0,
      pTime: 0,
      pRating: 0,
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
      'getPTime',
      'getNCorrect',
      'getPCorrect',
      'getPRating',
      'calcPoints'
    ]),
    finished: function () {
      return this.scoop.finished
    }
  },
  watch: {
    finished: function (val){
      if(val){
        this.pTime = this.getPTime(this.scoop)
        this.nCorrect = this.getNCorrect(this.scoop)
        this.pCorrect = this.getPCorrect(this.scoop)
        this.pRating = this.getPRating(this.scoop)
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
    //this.$store.commit('newsroom/scoop/setFinished', {scoop: this.scoop, finished: true})
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.ScoopResult{
  text-align: center;
}

h2 {
  /*display: flex;
  align-items: center;
  justify-content: center;*/
}

</style>
