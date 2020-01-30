<template>
  <div class="ScoopRating">

      <Instruction>
        {{getCommentCorrect(scoop)}} Hur bedömer ni nyheten? 🤔
      </Instruction>

      <Interactable>
        <label :class="{'showCorrect': rated && scoop.rating == 0, 'lock': rated}" >
          <input type="radio" value="0" :name="'rating-'+$data.__ob__.dep.id" v-model="rating" :disabled="rated" />
          <span>
            Sann: I allt väsentligt är denna nyhet sann och den fakta som presenteras är relevant.
          </span>
        </label>
        <label :class="{'showCorrect': rated && scoop.rating == 1, 'lock': rated}" >
          <input type="radio" value="1" :name="'rating-'+$data.__ob__.dep.id" v-model="rating" :disabled="rated" />
          <span>
            Mestadels sann: Sammantaget är denna nyhet sann och relevant men den innehåller till viss del bristfällig information, alternativt är inaktuell eller vilseledande.
          </span>
        </label>
        <label :class="{'showCorrect': rated && scoop.rating == 2, 'lock': rated}" >
          <input type="radio" value="2" :name="'rating-'+$data.__ob__.dep.id" v-model="rating" :disabled="rated" />
          <span>
            Mestadels falsk: Informationen i denna nyhet är mestadels vilseledande eller falsk men det finns samtidigt flera delar som är sanna och relevanta.
          </span>
        </label>
        <label :class="{'showCorrect': rated && scoop.rating == 3, 'lock': rated}" >
          <input type="radio" value="3" :name="'rating-'+$data.__ob__.dep.id" v-model="rating" :disabled="rated" />
          <span>
            Falsk: I allt väsentligt är denna nyhet påhittad, kraftigt vilseledande eller dess innehåll överdrivet vinklat.
          </span>
        </label>

        <br />

        <div class="progressContainer">


        <progress :value="3-rating" max="3" v-if="rating != -1"></progress>
</div>
      </Interactable>

      <ContinueButton :enabled="rating != -1" @click.once="nextStep()">Klar!</ContinueButton>

  </div>
</template>

<script>

import Instruction from '@/components/Instruction.vue'
import Interactable from '@/components/Interactable.vue'
import ContinueButton from '@/components/ContinueButton.vue'

import { mapGetters } from 'vuex'
//const { mapState } = createNamespacedHelpers('namespace1/namespace2')

export default {
  name: 'ScoopRating',
  components: {
    Instruction,
    Interactable,
    ContinueButton
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
    nextStep: function(){
      this.$store.commit('newsroom/scoop/setRatingUser', {scoop: this.scoop, 'rating':this.rating})
      this.$store.commit('newsroom/nextStep')
      this.$socket.emit('player update rating', this.ratingUser);
      this.rated = true;
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

input[type="radio"]:checked+span{
  font-weight: bold;
}

.showCorrect{
  text-decoration: underline;
}

.progressContainer{
  height: 20px;
  background: gray;
  border-radius: 5px;
  overflow: hidden;
  border: none;
  position: relative;
}

progress {
  position: absolute;
  top: 0;
  left: 0;
  -webkit-appearance: none;
  width: 100%;
  height: 100%;
  border: none;
}

::-webkit-progress-value, ::-moz-progress-bar {
  background-color: limegreen;
}

progress, ::-webkit-progress-bar {
  background-color: red;
}

</style>
