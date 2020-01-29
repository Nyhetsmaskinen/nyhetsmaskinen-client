<template>
  <div class="CenterColumn">
    <div class="col">
      <div>
        <slot>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CenterColumn'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

  .CenterColumn{
    flex: 1;
    max-width: 100%;
    display: flex;
    justify-content: center;
    padding: 5px;
  }

  .col{
    flex: 0 1 800px;
    max-width: 100%;
    text-align: left;
    /*padding: 10px;*/
    border: 0px solid lightgray;
  }

</style>
