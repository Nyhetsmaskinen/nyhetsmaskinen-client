<template>
  <div class="ViewHome">

    <div class="main">

      <CenterColumn>

        <h1>Nyhetsmaskinen</h1>

        <p>
          I det här spelet tar du eller ni rollen som medarbetare på en nyhetssajt. Ni får uppdrag av er chefredaktör ({{boss}}) att publicera nyheter som kan få stor spridning. Det är ert uppdrag att faktagranska nyheten för att sedan välja en vinkel om hur ni förmedlar nyheten.
        </p>

        <p>
          Använd din dator eller mobil att eftersöka fakta och andra källor. Räkna med att det tar 15-30 minuter att slutföra.
        </p>

        <Instruction>
          <strong>Snabbhet är bra men noggrannhet är viktigast!</strong> Att vara både snabb och korrekt kommer ge högst poäng.
          Lycka till! 🤩
        </Instruction>

        <h2>Skriv namnet på er nyhetssajt för att börja spela!</h2>

        <Interactable class="focuscolor">
          <input type="text" placeholder="Nyhetssajtens namn" v-model="name" ref="name" @keydown.enter="startGame()" maxlength="30"/>
        </Interactable>

        <ContinueButton :enabled="name.length > 0" @click.once="startGame()">Spela!</ContinueButton>

      </CenterColumn>
    </div>

    <div  v-if="players.length">

      <hr />

      <CenterColumn>
        <Highscore></Highscore>
      </CenterColumn>

    </div>

    <div>

      <hr />

      <CenterColumn>
        <h2>Om Nyhetsmaskinen</h2>
        Koncept & design: <a href="http://www.fabel.se" target="_blank">Fabel Kommunikation</a>, <a href="https://www.interaktivarum.se" target="_blank">Interaktiva rum</a>
        <br />
        Utveckling: <a href="https://www.interaktivarum.se" target="_blank">Interaktiva rum</a>
        <br />
        I samarbete med: <a href="https://demokratiskasamtalet.se/" target="_blank">Det demokratiska samtalet</a>
        <br /> <br />
        <router-link :to="{ name: 'Info'}">Läs mer om Nyhetsmaskinen</router-link>

      </CenterColumn>

    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import CenterColumn from '@/components/CenterColumn.vue'
import Interactable from '@/components/Interactable.vue'
import Instruction from '@/components/Instruction.vue'
import ContinueButton from '@/components/ContinueButton.vue'
import Highscore from '@/components/Highscore.vue'

import { mapState } from 'vuex'

export default {
  name: 'ViewHome',
  components: {
    CenterColumn,
    Instruction,
    Interactable,
    ContinueButton,
    Highscore
  },
  computed: {
    ...mapState([
      'players'
    ]),
    ...mapState('newsroom',[
      'boss'
    ]),
    name: {
      get () { return this.$store.state.newsroom.name},
      set (value) {
        this.$store.commit('newsroom/setName', {'name':value})
      }
    }
  },
  methods: {
    startGame: function () {
      if(this.name.length > 0){
        this.$router.push({ name: 'Game'})
      }
    }
  },
  created: function () {
    this.$store.dispatch('newsroom/initNewsroom')
  },
}
</script>

<style lang="scss">

  .ViewHome {
    flex: 1;
    flex-direction: column;
    display: flex;
    padding-bottom: 50px;
  }

  .main{
    flex: 1;
  }

</style>
