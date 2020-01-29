<template>
  <div class="Timer" :class="{'small': small}">
    {{minutes}}:{{seconds}}
  </div>
</template>

<script>
export default {
  name: 'Timer',
  props: {
    time: Number,
    small: {type: Boolean}
  },
  computed: {
    minutes: function () {
      let m = Math.floor(this.time / 60);
      return m <= 9 ? "0"+m : m
    },
    seconds: function () {
      let s = this.time % 60;
      return s <= 9 ? "0"+s : s
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

  .Timer{
    display: inline-block;
    background: black;
    padding: 5px;
    text-align: center;
    font-family: "Share Tech Mono";
    font-size: 3em;
    color: red;
    border-radius: 5px;
  }

  .small{
    font-size: 2em;
    padding: 2px;
  }

</style>
