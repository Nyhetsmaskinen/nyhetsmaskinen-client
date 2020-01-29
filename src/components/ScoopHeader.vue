<template>
  <div class="ScoopHeader">

      <Instruction>
        {{getCommentRating(scoop)}} Vilken vinkel tycker ni vi ska ha på vår artikel? Skriv en rubrik som passar nyheten.
      </Instruction>

      <Interactable class="focuscolor">
        <input type="text" placeholder="Ange rubrik" v-model="header" @keydown.enter="nextStep()" maxlength="40" :disabled="scoop.headerUser.length > 0 " />
      </Interactable>

      <ContinueButton :enabled="header.length > 0 && !scoop.headerUser" @click.once="nextStep()">Klar!</ContinueButton>

  </div>
</template>

<script>

import Instruction from '@/components/Instruction.vue'
import Interactable from '@/components/Interactable.vue'
import ContinueButton from '@/components/ContinueButton.vue'

import { mapGetters } from 'vuex'
//const { mapState } = createNamespacedHelpers('namespace1/namespace2')

export default {
  name: 'ScoopHeader',
  components: {
    Instruction,
    Interactable,
    ContinueButton
  },
  data: function () {
    return {
      header: ""
    }
  },
  props: {
    scoop: Object
  },
  computed: {
    ...mapGetters('newsroom',[
      'getHeadersUser',
    ]),
    ...mapGetters('newsroom/scoop',[
      'getCommentRating',
    ]),
  },
  methods: {
    nextStep: function(){
      if(this.header.length > 0){
        this.$store.commit('newsroom/scoop/setHeaderUser', {scoop: this.scoop, 'header':this.header})
        this.$store.commit('newsroom/nextStep')
        this.$socket.emit('player update headers', this.getHeadersUser);
      }
    }
  },
  mounted: function () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.ScoopHeader{
}

</style>
