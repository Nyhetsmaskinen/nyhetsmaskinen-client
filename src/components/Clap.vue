<template>
  <div class="Clap" :class="{'small': small}">
    {{emoji}}
  </div>
</template>

<script>
export default {
  name: 'Clap',
  props: {
    small: {type: Boolean},
    emoji: {type: String, default: "👏"}
  },
  computed: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

  .Clap{
    display: inline-block;
    font-size: 2em;
  }

  .small{
    font-size: 1em;
  }

</style>
