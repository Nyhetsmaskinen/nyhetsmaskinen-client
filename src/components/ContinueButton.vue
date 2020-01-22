<template>
  <div class="ContinueButton">

    <button class="button" :disabled="!enabled" @click="click">
      <slot>
      </slot>
    </button>

  </div>
</template>

<script>
export default {
  name: 'ContinueButton',
  props: {
    text: String,
    enabled: {type: Boolean, default: true}
  },
  methods: {
    click: function () {
      this.$emit('click')
      this.$el.getElementsByTagName('button')[0].setAttribute('disabled','disabled');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

  .ContinueButton{
    text-align: center;
    margin: 10px;
  }

  .button{
    background: Turquoise;
    display: inline-block;
    min-width: 3em;
    padding: 5px;
    font-family: "Amatic SC";
    font-size: 3em;
    font-weight: bold;
    color: white;
    border-radius: 5px;
    box-shadow: 5px 5px 0px Pink;
    transition: all 0.5s;
  }

  .button:hover{
    box-shadow: 0 0;
  }

  .button:disabled{
    background: gray;
    color: lightgray;
    box-shadow: 0 0;
  }

</style>
