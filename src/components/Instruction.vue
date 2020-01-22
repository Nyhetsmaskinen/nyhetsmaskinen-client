<template>
  <div class="Instruction">

    <div class="content">
      <div>
        <slot>
        </slot>
      </div>
    </div>
    <div class="speech">
      <div class="triangles">
        <div class="triangle1">
        </div>
        <div class="triangle2">
        </div>
        <br />
      </div>
      <span class="boss">
        {{emojiRender}}
      </span>
    </div>
  </div>
</template>

<script>

import { createNamespacedHelpers } from 'vuex'
const { mapState } = createNamespacedHelpers('newsroom')

export default {
  name: 'Instruction',
  props:{
    emoji: String
  },
  computed: {
    ...mapState([
      'boss',
    ]),
    emojiRender: function () {
      if(this.emoji){
        return this.emoji
      }
      else{
        return this.boss
      }
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

  .Instruction{
  }

  .content{
    background: DodgerBlue;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 5px 5px 0px LightBlue;
    margin: 0 5px 5px 0;
  }

  .content > div{
    background: white;
    padding: 10px;
    border-radius: 15px;
  }

  .speech{
    position: relative;
    top: -5px;
    left: 20px;
  }

  .triangles{
    width: 60px;
    height: 30px;
    display: flex;
    align-items: stretch;
    position: relative;
    left: 5px;
  }

  .triangle1{
    background-image: linear-gradient(45deg, rgba(0,0,0,0) 50%, DodgerBlue 50%);
    flex: 1;
  }

  .triangle2{
    background-image: linear-gradient(-45deg, rgba(0,0,0,0) 50%, DodgerBlue 50%);
    flex: 1;
  }

  .boss{
    font-size: 4em;
  }

</style>
