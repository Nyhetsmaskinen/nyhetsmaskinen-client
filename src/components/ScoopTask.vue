<template>
  <div class="ScoopTask">

    <CenterColumn>
      <Instruction>
        <strong>{{scoop.name}}</strong> {{scoop.description}} 🔍
      </Instruction>
    </CenterColumn>

    <ContinueButton @click.once="startTask()">Kör!</ContinueButton>

    <Step>

      <div class="timer">
        <Timer :time="scoop.timeLimit - scoop.time"></Timer>
      </div>

      <div class="columns">
        <div class="social">
          <Instruction :speech="false">
            <div v-if="scoop.social.url" class="post">
              <OG :og="og" v-if="og"></OG>
            </div>
            <div v-if="scoop.social.twitter" class="post">
              <blockquote class="twitter-tweet" width="100%">
                <a :href="scoop.social.twitter">Inlägg på Twitter</a>
              </blockquote>
            </div>
            <div v-if="scoop.social.instagram" class="post">
              <blockquote class="instagram-media" :data-instgrm-permalink="scoop.social.instagram" data-instgrm-version="12"  width="100%" max-width="100%">
                <a :href="scoop.social.instagram">Inlägg på Instagram</a>
              </blockquote>
            </div>
          </Instruction>
        </div>

        <div class="questions">
          <div v-for="(question,key) in scoop.questions" :key="key">
            <ScoopQuestion :question="question" class="question" :reveal="!intervalTimer"></ScoopQuestion>
          </div>
        </div>

      </div>

      <div class="sidebyside">
        <ContinueButton @click.once="finishTime()" :enabled="getNAnswers(scoop) > 0">Klar!</ContinueButton>
        <ContinueButton @click.once="finish()" :enabled="!intervalTimer" :class="{'hidden': intervalTimer}">Gå vidare!</ContinueButton>
      </div>

    </Step>

  </div>
</template>

<script>
import CenterColumn from '@/components/CenterColumn.vue'
import Instruction from '@/components/Instruction.vue'
//import Interactable from '@/components/Interactable.vue'
import ContinueButton from '@/components/ContinueButton.vue'
import Step from '@/components/Step.vue'
import ScoopQuestion from '@/components/ScoopQuestion.vue'
import Timer from '@/components/Timer.vue'
import OG from '@/components/OG.vue'

import ogs from 'open-graph-scraper'

import { mapGetters } from 'vuex'
//const { mapState } = createNamespacedHelpers('namespace1/namespace2')

export default {
  name: 'ScoopTask',
  components: {
    CenterColumn,
    Instruction,
    //Interactable,
    ContinueButton,
    Step,
    ScoopQuestion,
    Timer,
    OG
  },
  data: function () {
    return {
      intervalTimer: null,
      og: {}
    }
  },
  props: {
    scoop: Object
  },
  computed: {
    /*...mapState([
      'stateField',
    ]),*/
    ...mapGetters('newsroom/scoop',[
      'getNAnswers'
    ])
  },
  methods: {

    startTask: function () {
      this.intervalTimer = setInterval(this.timerCountdown, 1000);
      this.nextStep();
    },
    timerCountdown: function () {
      this.scoop.time++;
      if(this.scoop.time >= this.scoop.timeLimit){
        clearInterval(this.intervalTimer)
        this.intervalTimer = null;
        //this.$store.commit('newsroom/scoop/setFinished', {scoop: this.scoop, finished: true})
      }
    },
    nextStep: function () {
      this.$store.commit('newsroom/nextStep')
    },
    finishTime: function () {
      clearInterval(this.intervalTimer);
      this.intervalTimer = null;
      //this.$store.commit('newsroom/scoop/setFinished', {scoop: this.scoop, finished: true})
      //this.nextStep();
    },
    finish: function () {
      //this.$store.commit('newsroom/scoop/setFinished', {scoop: this.scoop, finished: true})
      this.nextStep();
    },
    setOG: function () {
      if(this.scoop.social.url){
        let self = this;
        let url = 'https://cors-anywhere.herokuapp.com/'+this.scoop.social.url
        ogs({'url': url}, function (error, results) {
          if(error){
            console.log(error)
          }
          if(results){
            self.og = results
          }
        });
      }

    }
  },
  mounted: function () {
    this.$store.dispatch('addScript', {src: 'https://platform.twitter.com/widgets.js', id: "twitter-js"})
    this.$store.dispatch('addScript', {src: '//www.instagram.com/embed.js', id: "instagram-js"})

    this.setOG();

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.ScoopTask{
}

.columns{
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  padding: 10px;
}

.social{
  display: flex;
  max-width: 100%;
  flex: 0 1 600px;
  overflow-x: scroll;
  margin-right: 10px;

}

.postContainer{

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
  flex: 1;
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
