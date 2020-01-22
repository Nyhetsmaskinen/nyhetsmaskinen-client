<template>
  <div class="Information">

    <div>
      <slot>
      </slot>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Information'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

  .Information{
    background: limegreen;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 5px 5px 0px lightgreen;
    margin: 0 5px 5px 0;
    flex: 1;
    /*display: flex;
    align-items: center;*/
  }

  .Information > div{
    color: white !important;
    padding: 10px;
    border-radius: 15px;
  }

</style>
