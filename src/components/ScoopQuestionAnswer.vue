<template>
  <div class="ScoopQuestionAnswer">

    <label :class="{'showCorrect': correct, 'lock': lock}">

      <input :name="questionName" type="radio" ref="radio" :value="val" @change="updateAnswer()" :disabled="lock"/>
      <span class="check"></span>
      <span class="text">
        {{text}}
      </span>
    </label>

  </div>
</template>

<script>

//import { createNamespacedHelpers } from 'vuex'
//const { mapState } = createNamespacedHelpers('namespace1/namespace2')

export default {
  name: 'ScoopQuestionAnswer',
  components: {
  },
  data: function () {
    return {
      //name: "name"
    }
  },
  props: {
    value: Number,
    text: String,
    questionName: String,
    val: Number,
    lock: Boolean,
    correct: Boolean
  },
  computed: {
    /*...mapState([
      'stateField',
    ]),*/
    /*...mapGetters([
      'nImmune'
    ])*/
  },
  methods: {
    updateAnswer() {
      this.$emit('input', parseInt(this.$refs.radio.value))
    }
  },
  mounted: function () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.ScoopQuestionAnswer{
}

</style>
