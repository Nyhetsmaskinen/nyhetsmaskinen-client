<template>
  <div class="Interactable" :class="{'correct': correct == 1, 'incorrect': correct == 0}">

    <div>
      <slot>
      </slot>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Interactable',
  props: {
    correct: {type: Number, default: -1}
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

  .Interactable{
    background: HotPink;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 5px 5px 0px Pink;
    margin: 0 5px 5px 0;
    flex: 1;
    max-width: 100%;
    /*display: flex;
    align-items: center;*/
  }

  .Interactable > div{
    background: white;
    padding: 10px;
    border-radius: 15px;
    max-width: 100%;
  }

  .Interactable.focuscolor > div:focus-within{
    background: Pink;
  }

  input{
    outline: none;
    background-color: inherit;
  }

  .correct{
    background: limegreen;
    box-shadow: 5px 5px 0px lightgreen;
  }

  .incorrect{
    background: red;
    box-shadow: 5px 5px 0px lightred;
  }

</style>
