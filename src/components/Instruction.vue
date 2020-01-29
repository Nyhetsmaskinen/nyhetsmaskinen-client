<template>
  <div class="Instruction">

    <div class="content">
      <div>
        <slot>
        </slot>
      </div>
    </div>
    <div class="speech" v-if="speech">
      <div class="triangles">
        <div class="triangle1">
        </div>
        <div class="triangle2">
        </div>
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
    emoji: {type: String, default: ""},
    speech: {type: Boolean, default: true}
  },
  computed: {
    ...mapState([
      'boss',
    ]),
    emojiRender: function () {
      if(this.emoji.length > 0){
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
    display: flex;
    flex-direction: column;
    color: rgb(100,100,100);
  }

  .content{
    background: DodgerBlue;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 5px 5px 0px LightSkyBlue;
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
    width: 100px;
  }

  .triangles{
    max-width: 60px;
    height: 30px;
    flex: 1;
    display: flex;
    left: 5px;
    margin: 0;
    padding: 0;
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
