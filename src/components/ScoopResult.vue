<template>
  <div class="ScoopResult">

  <h3>
    Tidsbonus:
  </h3>
  <div class="sidebyside">
    <Clap emoji="⏳"></Clap>
    <h1>
      <AnimatedNumber :end="pTime" :delay="1000"></AnimatedNumber>
    </h1>
    <Clap emoji="⏳"></Clap>
  </div>

  <h3>
    <span v-if="nCorrect == 1">
      1 korrekt granskning:
    </span>
    <span v-else>
      {{nCorrect}} korrekta granskningar:
    </span>
  </h3>
  <div class="sidebyside">
    <Clap emoji="🔍"></Clap>
    <h1>
      x<AnimatedNumber :end="pCorrect" :delay="2000" v-model="iCorrect"></AnimatedNumber>
    </h1>
    <Clap emoji="🔍"></Clap>
  </div>

  <h3>
    Bedömning:
  </h3>
  <div class="sidebyside">
    <Clap emoji="🤔"></Clap>
    <h1>
      <AnimatedNumber :end="pRating" :showPlus="true" :duration="0" :steps="1" :delay="3000"></AnimatedNumber>
    </h1>
    <Clap emoji="🤔"></Clap>
  </div>

  <hr class="white"/>

  <div class="sidebyside">
    <h2>
      <Clap emoji="❤️"></Clap>
    </h2>
    <h1 class="large">
      <AnimatedNumber :end="pScoop" :delay="4000"></AnimatedNumber>
    </h1>
    <h2>
      <Clap emoji="❤️"></Clap>
    </h2>
  </div>

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

.ScoopResult *{
  color: white !important;
}

h2 {
  /*display: flex;
  align-items: center;
  justify-content: center;*/
}

.sidebyside{
  align-items: center;
  flex-wrap: nowrap;
}

.sidebyside > *{
  margin: 0 10px 0 10px;
}

</style>
