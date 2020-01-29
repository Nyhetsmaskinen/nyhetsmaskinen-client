<template>
  <div class="ScoopQuestion">

    <Interactable :correct="reveal ? correct : -1">

      <h3>
        <strong>{{question.text}}</strong>
      </h3>

      <div v-for="(answer,id) in question.answers" :key="id">
        <ScoopQuestionAnswer :text="answer" :questionName="'q'+question.__ob__.dep.id" :val="id" v-model="question.answerUser" :lock="reveal" :correct="reveal && isCorrectId(id)"></ScoopQuestionAnswer>
      </div>

    </Interactable>

  </div>
</template>

<script>

import Interactable from '@/components/Interactable.vue'
import ScoopQuestionAnswer from '@/components/ScoopQuestionAnswer.vue'

//import { createNamespacedHelpers } from 'vuex'
//const { mapState } = createNamespacedHelpers('namespace1/namespace2')

export default {
  name: 'ScoopQuestion',
  components: {
    Interactable,
    ScoopQuestionAnswer
  },
  data: function () {
    return {
      answered: -1
    }
  },
  props: {
    question: Object,
    reveal: Boolean
  },
  computed: {
    /*...mapState([
      'stateField',
    ]),*/
    /*...mapGetters([
      'nImmune'
    ])*/
    correct: function () {
      return this.question.answerCorrect == this.question.answerUser ? 1 : 0;
    }
  },
  methods: {
    isCorrectId: function (id) {
      return id == this.question.answerCorrect;
    }
  },
  mounted: function () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.ScoopQuestion{
  display: flex;
  flex: 1;
}

</style>
