<template>
  <div class="UserScore">

    <h2>
      {{user.name}}
    </h2>

    <div class="sidebyside">

      <div class="margin">
        <div class="bluebox small">
          <AnimatedNumber :end="user.score.score"></AnimatedNumber> ❤️
        </div>
      </div>

      <h2>
        <AnimatedNumber :end="user.score.correct" v-model="nCorrect" :delay="2000">
          <!--Clap v-for="i in nCorrect" :key="i" emoji="🧐"></Clap-->
          <Clap emoji="🧐" :small="true"></Clap>
        </AnimatedNumber>
      </h2>



    </div>

    <div class="sidebyside">

      <div class="margin">
        <AnimatedNumber :end="user.score.time" v-model="time" :delay="1000" :show="false">
          <Timer :time="time" :small="true"></Timer>
        </AnimatedNumber>
      </div>

      <h2>
        <AnimatedNumber :end="user.score.rating" v-model="nRating" :delay="3000">
          <!--Clap v-for="i in nRating" :key="i" emoji="🤔"></Clap-->
          <Clap emoji="🤔" :small="true"></Clap>
        </AnimatedNumber>
      </h2>

    </div>

    <strong>Rubriker:</strong>
    <div v-for="(header, key) in user.headers" :key="key">
      {{header}}
    </div>


  </div>
</template>

<script>

import AnimatedNumber from '@/components/AnimatedNumber.vue'
import Timer from '@/components/Timer.vue'
import Clap from '@/components/Clap.vue'

export default {
  name: 'UserScore',
  components: {
    AnimatedNumber,
    Timer,
    Clap
  },
  data: function () {
    return {
      nCorrect: 0,
      nRating: 0,
      time: 0
    }
  },
  props: {
    user: Object
  },
  computed: {
  },
  watch: {
  },
  methods: {
  },
  mounted: function () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.UserScore{
  background: LightSkyBlue;
  box-shadow: 5px 5px 0 DodgerBlue;
  border-radius: 5px;
  padding: 5px;
  transform: rotateZ(-5deg);
}

.score{
  display: flex;
}

.sidebyside{
  width: 80%;
  justify-content: flex-start;
}

.sidebyside > div {
  flex: 1;
}

h2{
  color: black;
}

</style>
