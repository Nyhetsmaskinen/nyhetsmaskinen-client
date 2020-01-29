<template>
  <div class="ViewInfo">
    <CenterColumn>

      <h1>
        Om Dramafabriken
      </h1>

      <p>
        Dramafabriken är ett pedagogiskt verktyg för att väcka uppmärksamhet och diskutera vikten av källkritik i vardagen. Det är tänkt som ett stöd för dig som till exempel driver studiecirklar, undervisar i skolan eller själv vill lära dig mer om källkritik. Du kan använda det som övning själv eller utmana andra på samma övning. Att göra alla övningar beräknas ta cirka 15-30 minuter.
      </p>

      <p>
        Verktyget är framtaget av <a href="http://www.fabel.se" target="_blank">Fabel Kommunikation</a> och <a href="https://www.interaktivarum.se" target="_blank">Interaktiva rum</a> på uppdrag av svenska regeringens kommitté <a href="https://demokratiskasamtalet.se/" target="_blank">Nationell satsning på medie- och informationskunnighet och det demokratiska samtalet</a>.
      </p>

      <p>
        Allt innehåll är licensierat enligt Creative Commons (CC-BY-4.0) och kan användas fritt, även i kommersiellt syfte, under förutsättning att de ursprungliga skaparna av materialet namnges. Vi använder oss av öppen källkod som kan återfinnas på <a href="https://github.com/Dramafabriken" target="_blank">https://github.com/Dramafabriken</a>.
      </p>

      <p>
        För frågor om innehållet, vänligen kontakta oss på <a href="mailto:info@fabel.se">info@fabel.se</a>.
      </p>

      <ContinueButton @click.native="home()">Tillbaka till startsidan</ContinueButton>

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
