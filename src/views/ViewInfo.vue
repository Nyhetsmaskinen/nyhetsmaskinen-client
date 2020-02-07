<template>
  <div class="ViewInfo">
    <CenterColumn>

      <h1>
        Om Nyhetsmaskinen
      </h1>

      <p>
        Nyhetsmaskinen är ett pedagogiskt verktyg för att väcka uppmärksamhet och diskutera vikten av källkritik i vardagen. Det är tänkt som ett stöd för dig som till exempel driver studiecirklar, undervisar i skolan eller själv vill lära dig mer om källkritik. Du kan använda det som övning själv eller utmana andra på samma övning. Att göra alla övningar beräknas ta cirka 15-30 minuter.
      </p>

      <p>
        Verktyget är framtaget av <a href="http://www.fabel.se" target="_blank">Fabel Kommunikation</a> och <a href="https://www.interaktivarum.se" target="_blank">Interaktiva rum</a> på uppdrag av svenska regeringens kommitté <a href="https://demokratiskasamtalet.se/" target="_blank">Nationell satsning på medie- och informationskunnighet och det demokratiska samtalet</a>.
      </p>

      <p>
        Allt innehåll är licensierat enligt Creative Commons (<a href="https://creativecommons.org/licenses/by/4.0/deed.sv" target="_blank">CC-BY-4.0</a>) och kan användas fritt, även i kommersiellt syfte, under förutsättning att de ursprungliga skaparna av materialet namnges. Vi använder oss av öppen källkod som kan återfinnas på <a href="https://github.com/Nyhetsmaskinen" target="_blank">https://github.com/Nyhetsmaskinen</a>.
      </p>

      <p>
        För frågor om innehållet, vänligen kontakta oss på <a href="mailto:info@fabel.se">info@fabel.se</a>.
      </p>

      <h2>FAQ</h2>
      <h3>
        Hur har ni gjort bedömningarna om nyheterna är sanna eller falska?
      </h3>
      <p>
        I spelet finns en bedömning utifrån sanningshalt. Den värderingen är en samlad bedömning utifrån hur väl nyheten har täckning för vad som skrivs i rubrik och text, om fokus ligger på relevanta fakta och omständigheter för händelser eller om det finns andra element som avser att vilseleda läsaren. Vi förstår dock att detta innehåller gråzoner och vi vill poängtera att detta är en bedömning som vi redogör för i avsnittet “Läs mer om nyheten” vid varje avsnitt.
      </p>

      <h2>Resurser</h2>
      <p>
        Vill du lära dig mer om nyhetsgranskning och källkritik är det här bra ställen att kolla på:
        <ul>
          <li>
            <a href="https://statensmedierad.se/larommedier/mikformigdigitalutbildning.1871.html#start" target="_blank">Statens Medieråd</a>
          </li>
          <li>
            <a href="https://internetstiftelsen.se/guide/kallkritik-pa-internet/" target="_blank">Internetstiftelsen</a>
          </li>
          <li>
            <a href="https://mikoteket.se" target="_blank">Mikoteket</a>
          </li>
        </ul>
      </p>

      <ContinueButton @click="home()">Tillbaka till startsidan</ContinueButton>

    </CenterColumn>

  </div>
</template>

<script>

import CenterColumn from '@/components/CenterColumn.vue'
import ContinueButton from '@/components/ContinueButton.vue'

export default {
  name: 'ViewInfo',
  data: function () {
    return {
    }
  },
  components: {
    CenterColumn,
    ContinueButton
  },
  computed: {
  },
  methods: {
    home(){
      this.$router.push({ name: 'Home'})
    }
  },
  created: function () {
  },
  mounted: function () {
  }
}
</script>
