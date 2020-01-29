<template>
  <div class="GameResult">

    <h2>
      Totalpoäng:
    </h2>

    <UserScore :user="getPlayer" v-if="getPlayer"></UserScore>

    <br /><br />

  </div>
</template>

<script>

import UserScore from '@/components/UserScore.vue'

import { mapState, mapGetters } from 'vuex'
//const { mapState, mapGetters } = createNamespacedHelpers('newsroom')

export default {
  name: 'GameResult',
  components: {
    UserScore
  },
  data: function () {
    return {
      pTotal: 0,
    }
  },
  props: {
  },
  computed: {
    ...mapState('newsroom',[
      'finished',
    ]),
    ...mapGetters([
      'getPlayer'
    ]),
    ...mapGetters('newsroom',[
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
  display: flex;
  flex-direction: column;
  align-items: center;
}

</style>
