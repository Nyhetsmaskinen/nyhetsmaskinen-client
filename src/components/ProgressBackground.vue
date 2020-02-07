<template>
  <div class="ProgressBackground" :style="{'background-image': gradient }">
    <slot>
    </slot>
  </div>
</template>

<script>

//import { createNamespacedHelpers } from 'vuex'
//const { mapState } = createNamespacedHelpers('namespace1/namespace2')

export default {
  name: 'ProgressBackground',
  components: {
    //Component
  },
  data: function () {
    return {
      //name: "name"
    }
  },
  props: {
    ratio: {type: Number, default: 0.5},
    c0: {type: String, default: 'limegreen'},
    c1: {type: String, default: 'red'}
  },
  computed: {
    percent: function () {
      return this.ratio*100 + "%";
    },
    gradient: function () {
      return 'linear-gradient(to right, ' + this.c0 + ' 0%, ' + this.c0 + ' ' + this.percent + ', ' + this.c1 + ' ' + this.percent + ', ' + this.c1 + ' 100%)'
    }
  },
  methods: {
  },
  mounted: function () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.ProgressBackground{
}

</style>
