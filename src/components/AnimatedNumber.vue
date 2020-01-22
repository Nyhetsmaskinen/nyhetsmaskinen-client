<template>
  <div class="AnimatedNumber">
    <span v-if="show">
      {{valueInt}}
    </span>

    <slot>
    </slot>

  </div>
</template>

<script>

//import { createNamespacedHelpers } from 'vuex'
//const { mapState } = createNamespacedHelpers('namespace1/namespace2')

export default {
  name: 'AnimatedNumber',
  components: {
    //Component
  },
  data: function () {
    return {
      counter: null,
      valueCurrent: 0,
      valueRestart: 0
    }
  },
  props: {
    value: Number,
    start: Number,
    end: {type: Number, default: 100},
    duration: {type: Number, default: 1000},
    steps: {type: Number, default: 100},
    delay: Number,
    show: {type: Boolean, default: true},
  },
  computed: {
    /*...mapState([
      'stateField',
    ]),*/
    /*...mapGetters([
      'nImmune'
    ])*/
    valueInt: function () {
      return Math.round(this.valueCurrent)
    }
  },
  watch:{
    start: function () {
      this.startCounter();
    },
    end: function () {
      this.startCounter();
    },
    valueCurrent: function () {
      this.emitValue();
    }
  },
  methods: {
    startCounter: function () {
      clearInterval(this.counter)
      this.valueRestart = this.valueCurrent;
      let self = this;
      setTimeout(function(){
        self.counter = setInterval(self.step, self.duration / self.steps);
      }, this.delay);

    },
    step: function () {
      this.valueCurrent += (this.end - this.valueRestart) / this.steps;
      if(this.valueCurrent == this.end || (Math.sign(this.valueCurrent - this.end) == Math.sign(this.end - this.valueRestart))){
        this.valueCurrent = this.end;
        clearInterval(this.counter)
      }
    },
    emitValue() {
      this.$emit('input', this.valueInt)
    }
  },
  mounted: function () {
    this.valueRestart = this.start;
    this.startCounter();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.AnimatedNumber{
  display: inline-block;
}

</style>
