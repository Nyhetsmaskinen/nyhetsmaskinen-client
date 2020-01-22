<template>
  <div class="ScoopTask">

    <Interactable class="social">
      <div v-if="scoop.social.twitter" class="post">
        <blockquote class="twitter-tweet" width="100%">
          <a :href="scoop.social.twitter">Inlägg på Twitter</a>
        </blockquote>
      </div>
      <div v-if="scoop.social.instagram" class="post">
        <blockquote class="instagram-media" :data-instgrm-permalink="scoop.social.instagram" data-instgrm-version="12"  width="100%" max-width="100%">
          Inlägg på Instagram
        </blockquote>
      </div>
    </Interactable>

    <br />

    <Instruction>
      <strong>{{scoop.name}}</strong> {{scoop.description}}
    </Instruction>

    <ContinueButton @click.once="startTask()">Kör!</ContinueButton>

    <Step>

      <div class="timer">
        <Timer :time="scoop.time"></Timer>
      </div>

      <div class="questions">
        <div v-for="(question,key) in scoop.questions" :key="key">
          <ScoopQuestion :question="question" class="question" :reveal="scoop.finished"></ScoopQuestion>
        </div>
      </div>

      <ContinueButton @click.once="finish()">Klar!</ContinueButton>
    </Step>

  </div>
</template>

<script>

import Instruction from '@/components/Instruction.vue'
import Interactable from '@/components/Interactable.vue'
import ContinueButton from '@/components/ContinueButton.vue'
import Step from '@/components/Step.vue'
import ScoopQuestion from '@/components/ScoopQuestion.vue'
import Timer from '@/components/Timer.vue'

//import { createNamespacedHelpers } from 'vuex'
//const { mapState } = createNamespacedHelpers('namespace1/namespace2')

export default {
  name: 'ScoopTask',
  components: {
    Instruction,
    Interactable,
    ContinueButton,
    Step,
    ScoopQuestion,
    Timer
  },
  data: function () {
    return {
      intervalTimer: null,
    }
  },
  props: {
    scoop: Object
  },
  computed: {
    /*...mapState([
      'stateField',
    ]),*/
    /*...mapGetters([
      'nImmune'
    ])*/
  },
  methods: {

    startTask: function () {
      this.intervalTimer = setInterval(this.timerCountdown, 1000);
      this.nextStep();
    },
    timerCountdown: function () {
      this.scoop.time--;
      if(this.scoop.time <= 0){
        clearInterval(this.intervalTimer)
      }
    },
    nextStep: function () {
      this.$store.commit('newsroom/nextStep')
    },
    finish: function () {
      clearInterval(this.intervalTimer);
      this.$store.commit('newsroom/scoop/setFinished', {scoop: this.scoop, finished: true})
      this.nextStep();
    }
  },
  mounted: function () {
    this.$store.dispatch('addScript', {src: 'https://platform.twitter.com/widgets.js', id: "twitter-js"})
    this.$store.dispatch('addScript', {src: '//www.instagram.com/embed.js', id: "instagram-js"})
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.ScoopTask{
}

.social{
  display: flex;
  justify-content: center;
  max-width: 100%;
  overflow-x: hidden;
}

.post{
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
}

.social > div{
}

.blockquote, .blockquote *{
  max-width: 100%;
  width: 100%;
  overflow: hidden;
}

.questions{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.questions > div{
  flex: 1 0 50%;
  min-width: 300px;
  display: flex;
  flex-direction: row;
}

.question{
  margin: 0 5px 10px 0;
}

.timer{
  text-align: center;
  padding: 10px;
}

</style>
