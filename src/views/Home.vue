<template>
  <div class="home">
    <CenterColumn>

      <h1>Källkampen</h1>

      <p>
        I det här spelet tar du eller ni rollen som medarbetare på en nyhetssajt. Ni får uppdrag av er chefredaktör att publicera nyheter som kan få stor spridning. Det är ert uppdrag att faktagranska nyheten för att sedan välja en vinkel om hur ni förmedlar nyheten.
      </p>

      <Instruction>
        Snabbhet är bra men noggrannhet är viktigast! Att vara både snabb och korrekt kommer ge högst poäng.
        <strong>Lycka till!</strong>
      </Instruction>

      <h2>Skriv namnet på er nyhetssajt för att börja spela!</h2>

      <Interactable>
        <input type="text" placeholder="Nyhetssajtens namn" v-model="name" ref="name"/>
      </Interactable>

      <ContinueButton :enabled="name.length > 0" @click.native="startGame()">Spela!</ContinueButton>

    </CenterColumn>

  </div>
</template>

<script>
// @ is an alias to /src
import CenterColumn from '@/components/CenterColumn.vue'
import Interactable from '@/components/Interactable.vue'
import Instruction from '@/components/Instruction.vue'
import ContinueButton from '@/components/ContinueButton.vue'

export default {
  name: 'home',
  components: {
    CenterColumn,
    Instruction,
    Interactable,
    ContinueButton
  },
  computed: {
    name: {
      get () { return this.$store.state.newsroom.name},
      set (value) {
        this.$store.commit('newsroom/setName', {'name':value})
      }
    }
  },
  methods: {
    startGame: function () {
      this.$router.push({ name: 'Game'})
    }
  },
  created: function () {
    this.$store.dispatch('newsroom/initNewsroom')
  },
}
</script>
