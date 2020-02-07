<template>
  <div class="ScoopRating">

      <Instruction>
        {{getCommentCorrect(scoop)}} Hur bedömer ni nyheten? 🤔
      </Instruction>

      <Interactable>

        <label :class="{'showCorrect': rated && scoop.rating == 0, 'lock': rated}" >
          <input type="radio" value="0" :name="'rating-'+$data.__ob__.dep.id" v-model="rating" :disabled="rated" />
          <span class="check"></span>
          <div>
            <ProgressBackground :ratio="1" class="header">SANN</ProgressBackground>
            <span class="text">
              I allt väsentligt är denna nyhet sann och den fakta som presenteras är relevant.
            </span>
          </div>
        </label>

        <label :class="{'showCorrect': rated && scoop.rating == 1, 'lock': rated}" >
          <input type="radio" value="1" :name="'rating-'+$data.__ob__.dep.id" v-model="rating" :disabled="rated" />
          <span class="check"></span>
          <div>
            <ProgressBackground :ratio="0.66" class="header">MESTADELS SANN</ProgressBackground>
            <span class="text">
              Sammantaget är denna nyhet sann och relevant men den innehåller till viss del bristfällig information, alternativt är inaktuell eller vilseledande.
            </span>
          </div>
        </label>

        <label :class="{'showCorrect': rated && scoop.rating == 2, 'lock': rated}" >
          <input type="radio" value="2" :name="'rating-'+$data.__ob__.dep.id" v-model="rating" :disabled="rated" />
          <span class="check"></span>
          <div>
            <ProgressBackground :ratio="0.33" class="header">MESTADELS FALSK</ProgressBackground>
            <span class="text">
              Informationen i denna nyhet är mestadels vilseledande eller falsk men det finns samtidigt flera delar som är sanna och relevanta.
            </span>
          </div>
        </label>
        <label :class="{'showCorrect': rated && scoop.rating == 3, 'lock': rated}" >
          <input type="radio" value="3" :name="'rating-'+$data.__ob__.dep.id" v-model="rating" :disabled="rated" />
          <span class="check"></span>
          <div>
            <ProgressBackground :ratio="0" class="header">FALSK</ProgressBackground>
            <span class="text">
              I allt väsentligt är denna nyhet påhittad, kraftigt vilseledande eller dess innehåll överdrivet vinklat.
            </span>
          </div>
        </label>

      </Interactable>

      <div class="sidebyside">
        <ContinueButton :enabled="rating != -1" @click.once="setRating()">Klar!</ContinueButton>
        <ContinueButton :enabled="rated" :class="{'hidden': !rated}" @click.once="nextStep()">Gå vidare!</ContinueButton>
      </div>

      <!--ContinueButton :enabled="rating != -1" @click.once="nextStep()">Klar!</ContinueButton-->

  </div>
</template>

<script>

import Instruction from '@/components/Instruction.vue'
import Interactable from '@/components/Interactable.vue'
import ContinueButton from '@/components/ContinueButton.vue'
import ProgressBackground from '@/components/ProgressBackground.vue'

import { mapGetters } from 'vuex'
//const { mapState } = createNamespacedHelpers('namespace1/namespace2')

export default {
  name: 'ScoopRating',
  components: {
    Instruction,
    Interactable,
    ContinueButton,
    ProgressBackground
  },
  data: function () {
    return {
      rating: -1,
      rated: false
    }
  },
  props: {
    scoop: Object
  },
  computed: {
    ...mapGetters('newsroom/scoop',[
      'getCommentCorrect',
    ]),
  },
  methods: {
    setRating: function () {
      this.$store.commit('newsroom/scoop/setRatingUser', {scoop: this.scoop, 'rating':this.rating})
      this.$socket.emit('player update rating', this.ratingUser);
      this.rated = true;
    },
    nextStep: function(){
      this.$store.commit('newsroom/nextStep')
    }
  },
  mounted: function () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.ScoopRating{
}

input[type="radio"]:checked+div{
  font-weight: bold;
}

.header{
  padding: 5px;
  color: white;
  font-weight: bold;
  display: inline-block;
}

/*.lock:not(.showCorrect){
  filter: opacity(0.25);
}*/

.text{
  display: block;
}

</style>
