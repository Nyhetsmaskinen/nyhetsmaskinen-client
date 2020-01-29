<template>
  <div class="Highscore">

    <div v-if="getPlayersFinished.length > 0">
      <h2>Topplista</h2>
      <div class="players">
        <div v-for="(player,key) in getPlayersFinished" :key="key">
          <UserScore :user="player"></UserScore>
        </div>
      </div>
    </div>

    <div v-if="getPlayersNotFinished.length > 0">
      <h2>Spelar just nu</h2>
      <div v-for="(player,key) in getPlayersNotFinished.reverse()" :key="key" class="bluebox margin">
        {{player.name}}
      </div>
    </div>

    <br />

  </div>


</template>

<script>

import UserScore from '@/components/UserScore.vue'
//import AnimatedNumber from '@/components/AnimatedNumber.vue'
/*import Timer from '@/components/Timer.vue'
import Clap from '@/components/Clap.vue'*/

import { mapState, mapGetters } from 'vuex'

export default {
  name: 'Highscore',
  data: function () {
    return {
      time: 0,
      nCorrect: 0
    }
  },
  components: {
    UserScore,
    //AnimatedNumber,
    /*Timer,
    Clap*/
  },
  computed: {
    ...mapState([
      'players',
      'highscore'
    ]),
    ...mapGetters([
      'getPlayersFinished',
      'getPlayersNotFinished'
    ]),
  },
  methods: {
    socketUpdatePlayer: function (){
      this.$socket.emit('player update', {name: this.$refs.name.value, score: parseInt(this.$refs.score.value)});
    },
    socketEvents: function (){
    }
  },
  created: function () {
  },
  mounted: function () {
    this.$socket.emit('get highscore');
    this.socketEvents();
  }
}
</script>

<style scoped lang="scss">

  .Highscore{
  }

  .players{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  .players > div{
    margin: 0 30px 30px 0;
  }

</style>
