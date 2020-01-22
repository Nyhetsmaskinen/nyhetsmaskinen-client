<template>
  <div class="Step">
    <slot>
    </slot>
  </div>
</template>

<script>

export default {
  name: 'Step',
  data: function () {
    return {
    }
  },
  props: {
  },
  computed: {
  },
  watch: {
  },
  mounted: function () {
  },
  update: function () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

  .Step{
    display: none;
  }

</style>
