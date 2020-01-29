<template>
  <div class="ViewHighscore">
    <CenterColumn>

      <h1>
        Topplista
      </h1>

      <Highscore></Highscore>

    </CenterColumn>

  </div>
</template>

<script>

import CenterColumn from '@/components/CenterColumn.vue'
import Highscore from '@/components/Highscore.vue'

export default {
  name: 'ViewHighscore',
  data: function () {
    return {
    }
  },
  components: {
    CenterColumn,
    Highscore,
  },
  computed: {
  },
  methods: {
  },
  created: function () {
  },
  mounted: function () {
  }
}
</script>
