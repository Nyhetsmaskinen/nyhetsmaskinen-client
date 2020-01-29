<template>
  <div class="Game">

<StepContainer :step="step">

    <CenterColumn>

      <h1>{{name}}</h1>

        <Step>
          <Instruction>
            <p>
              God morgon! Kul att ni kunde hoppa in som vikarier 👏 Här på {{name}} jobbar vi effektivt och snabbt. En missad nyhet är en missad möjlighet.
            </p>
            <p>
              Är ni redo att ta er an det första scoopet?
            </p>
          </Instruction>

          <ContinueButton @click.once="nextStep()">Ja!</ContinueButton>

        </Step>

        <Step v-if="randomCompetitor">
          <Instruction>
            Vi har en ny konkurrent Nyhetssajten <strong>{{randomCompetitor.name}}</strong> skriver om samma nyheter som oss! Nu gäller det att vi är snabba men noggranna!
          </Instruction>

          <ContinueButton @click.once="nextStep()">Let's do it!</ContinueButton>

        </Step>
      </CenterColumn>

      <div v-for="(scoop,key) in scoops" :key="key">
        <Step>
          <hr />
          <ScoopTask :scoop="scoop"></ScoopTask>
        </Step>

        <br />

          <CenterColumn>

            <Step>
              <ScoopRating :scoop="scoop"></ScoopRating>
            </Step>

            <Step>
              <ScoopHeader :scoop="scoop"></ScoopHeader>
            </Step>

            <Step>
              <Instruction>
                {{getCommentHeader()}} Vi kollar vad ni fick för poäng.
              </Instruction>
              <ContinueButton @click.once="nextStep(); finishScoop(scoop)">Visa poäng!</ContinueButton>
            </Step>

            <Step>
              <Instruction :speech="false">
                <ScoopResult :scoop="scoop"></ScoopResult>
              </Instruction>

              <Instruction>
                Vill du veta mer om nyheten och granskningarna, eller fortsätta vidare?
              </Instruction>

              <ScoopMoreInfo :scoop="scoop"></ScoopMoreInfo>

              <div v-if="key+1 < scoops.length">
                <ContinueButton @click.once="nextStep()">Fortsätt till nästa nyhet!</ContinueButton>
              </div>
              <div v-else>
                <ContinueButton @click.once="finish()">Visa mina slutpoäng!</ContinueButton>
              </div>
            </Step>
          </CenterColumn>


      </div>

      <Step>

        <hr />

        <CenterColumn>

          <GameResult></GameResult>
          <Instruction>
            Bra jobbat! Vi jämför med hur det har gått för våra konkurrenter.
          </Instruction>
          <ContinueButton @click.once="nextStep()">Bra idé!</ContinueButton>

        </CenterColumn>

      </Step>

      <br />

      <Step>
        <CenterColumn>
          <Highscore></Highscore>
          <Instruction>
            Tack för ditt jobb på {{name}}!
          </Instruction>
          <div class="sidebyside">
            <ContinueButton @click.once="restart()">Tack själv!</ContinueButton>
            <ContinueButton @click.once="restart()">Tack & hej!</ContinueButton>
            <ContinueButton @click.once="restart()">Hej då!</ContinueButton>
          </div>
        </CenterColumn>
      </Step>

    </StepContainer>

  </div>
</template>

<script>

//import Vue from 'vue'

// @ is an alias to /src
import CenterColumn from '@/components/CenterColumn.vue'
import Instruction from '@/components/Instruction.vue'
//import Interactable from '@/components/Interactable.vue'
import ContinueButton from '@/components/ContinueButton.vue'
import StepContainer from '@/components/StepContainer.vue'
import Step from '@/components/Step.vue'
import ScoopTask from '@/components/ScoopTask.vue'
import ScoopRating from '@/components/ScoopRating.vue'
import ScoopResult from '@/components/ScoopResult.vue'
import ScoopHeader from '@/components/ScoopHeader.vue'
import ScoopMoreInfo from '@/components/ScoopMoreInfo.vue'
import GameResult from '@/components/GameResult.vue'
import Highscore from '@/components/Highscore.vue'

//import { createNamespacedHelpers } from 'vuex'
//const { mapState, mapGetters} = createNamespacedHelpers('newsroom')
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'Game',
  components: {
    CenterColumn,
    Instruction,
    //Interactable,
    ContinueButton,
    StepContainer,
    Step,
    ScoopTask,
    ScoopRating,
    ScoopMoreInfo,
    ScoopResult,
    ScoopHeader,
    GameResult,
    Highscore
  },
  data: function () {
    return {
      //players: null
    }
  },
  computed: {
    ...mapState([
      'players'
    ]),
    ...mapState('newsroom',[
      'scoops',
      'step',
      'boss',
    ]),
    ...mapGetters([
      'getPlayer',
      'getCompetitors'
    ]),
    ...mapGetters('newsroom',[
      'calcPoints',
      'getNCorrect',
      'getTimeTotal',
      'getNCorrectRating'
    ]),
    ...mapGetters('newsroom/scoop',[
      'getCommentHeader'
    ]),
    name: {
      get () { return this.$store.state.newsroom.name},
      set (value) {
        this.$store.commit('newsroom/setName', {'name':value})
      }
    },
    randomCompetitor: function () {
      let nCompetitors = this.getCompetitors.length;
      if (nCompetitors > 0){
        return this.getCompetitors[Math.floor(Math.random() * nCompetitors)]
      }
      return null
    }
  },
  watch: {
  },
  methods: {
    nextStep: function () {
      this.$store.commit('newsroom/nextStep')
    },
    finishName: function () {
      //this.$refs['name'].setAttribute('disabled','disabled');
      this.nextStep()
    },
    finishScoop: function (scoop) {
      this.$store.commit('newsroom/scoop/setFinished', {scoop: scoop, finished: true})
    },
    finish: function () {
      this.$socket.emit('player update score', {
        score: this.calcPoints,
        time: this.getTimeTotal,
        correct: this.getNCorrect,
        rating: this.getNCorrectRating
      });
      this.$store.commit('newsroom/setFinished', {finished: true})
      this.nextStep()
    },
    restart: function () {
      this.$router.push({ name: 'Home'})
    },
    socketEvents: function (){
    }
  },
  created: function () {
    this.$store.dispatch('newsroom/initScoops')
  },
  mounted: function () {

    if(this.name == ""){
      this.$router.push({ name: 'Home'})
    }

    this.socketEvents();
    this.$socket.emit('player update name', this.name);
  },
}
</script>

<style lang="scss">

  .Game {
    flex: 1;
    flex-direction: column;
    display: flex;
    padding-bottom: 100px;
  }

</style>
