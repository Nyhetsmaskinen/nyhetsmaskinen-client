<template>
  <div class="ScoopMoreInfo">

    <ContinueButton @click.once="showInfo()">Visa mer information om nyheten</ContinueButton>

    <div ref="scrollTo"></div>
    <div class="info" v-if="show">

      <br />

      <!--h2>Mer information om: {{scoop.name}}</h2-->

      <p>
        {{scoop.info.text}}
      </p>

      <h3>Referenser</h3>
      <div v-for="(reference,key) in scoop.info.references" :key="key">
        {{key+1}}: <a :href="reference" target="_blank">{{reference}}</a>
      </div>

      <br />

    </div>

  </div>
</template>

<script>

import ContinueButton from '@/components/ContinueButton.vue'

export default {
  name: 'ScoopMoreInfo',
  components: {
    ContinueButton,
  },
  data: function () {
    return {
      show: false
    }
  },
  props: {
    scoop: Object
  },
  computed: {
  },
  watch: {
  },
  methods: {
    showInfo: function () {
      this.show = true;
      this.$nextTick(() => {
        this.$refs["scrollTo"].scrollIntoView(true)
      })
    },
  },
  mounted: function () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.ScoopMoreInfo{
}

</style>
