<template>
  <div class="Game">
    <CenterColumn>

      <h1>{{name}}</h1>

      <StepContainer :step="step">

      <!--Instruction emoji="📰">
        Skriv namnet på er nyhetssajt!
      </Instruction>

      <Interactable>
        <input type="text" placeholder="Nyhetssajtens namn" v-model="name" autofocus ref="name"/>
      </Interactable-->

      <!--ContinueButton @click.once="nextStep()">Klar!</ContinueButton-->

      <Step>
        <Instruction>
          <p>
            God morgon! Kul att ni kunde hoppa in som vikarier. Här på {{name}} jobbar vi effektivt och snabbt. En missad nyhet är en missad möjlighet.
          </p>
          <p>
            Är ni redo att ta er an det första scoopet?
          </p>
        </Instruction>

        <ContinueButton @click.once="nextStep()">Ja!</ContinueButton>

      </Step>

      <div v-for="(scoop,key) in scoops" :key="key">
        <Step>
          <ScoopTask :scoop="scoop"></ScoopTask>
        </Step>
        <br />
        <Step>
          <ScoopResult :scoop="scoop"></ScoopResult>
        </Step>
        <Step>
          <div v-if="key+1 < scoops.length">
            <Instruction>
              Bra! Är du redo för nästa nyhet?
            </Instruction>
            <ContinueButton @click.once="nextStep()">Ja!</ContinueButton>
          </div>
          <div v-else>
            <Instruction>
              Bra! Det var den sista nyheten.
            </Instruction>
            <ContinueButton @click.once="finish()">Ok!</ContinueButton>
          </div>
        </Step>
      </div>

      <br />

      <Step>
        <GameResult></GameResult>
      </Step>

      <Step>
        <Instruction>
          Tack för ditt jobb på {{name}}!
        </Instruction>
        <ContinueButton @click.once="restart()">Börja om</ContinueButton>
      </Step>

</StepContainer>

    </CenterColumn>

  </div>
</template>

<script>
// @ is an alias to /src
import CenterColumn from '@/components/CenterColumn.vue'
import Instruction from '@/components/Instruction.vue'
//import Interactable from '@/components/Interactable.vue'
import ContinueButton from '@/components/ContinueButton.vue'
import StepContainer from '@/components/StepContainer.vue'
import Step from '@/components/Step.vue'
import ScoopTask from '@/components/ScoopTask.vue'
import ScoopResult from '@/components/ScoopResult.vue'
import GameResult from '@/components/GameResult.vue'

import { createNamespacedHelpers } from 'vuex'
const { mapState/*, mapGetters */} = createNamespacedHelpers('newsroom')

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
    ScoopResult,
    GameResult
  },
  data: function () {
    return {
    }
  },
  computed: {
    ...mapState([
      'scoops',
      'step'
    ]),
    /*...mapGetters([
      'nImmune'
    ])*/
    name: {
      get () { return this.$store.state.newsroom.name},
      set (value) {
        this.$store.commit('newsroom/setName', {'name':value})
      }
    }
  },
  methods: {
    nextStep: function () {
      this.$store.commit('newsroom/nextStep')
    },
    finishName: function () {
      //this.$refs['name'].setAttribute('disabled','disabled');
      this.nextStep()
    },
    finish: function () {
      this.$store.commit('newsroom/setFinished', {finished: true})
      this.nextStep()
    },
    restart: function () {
      this.$router.push({ name: 'Home'})
    }
  },
  created: function () {
    this.$store.dispatch('newsroom/initScoops')
  },
  mounted: function () {
  },
}
</script>

<style lang="scss">

  .Game {
    flex: 1;
    flex-direction: column;
    display: flex;
  }

</style>
