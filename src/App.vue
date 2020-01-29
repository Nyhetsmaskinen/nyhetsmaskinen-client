<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {

  methods: {
    socketEvents: function (){

      let self = this;
      this.$socket.on('players update', function(players){
        self.$store.commit('playersUpdate', {players: players})
      });

      this.$socket.on('highscore update', function(highscore){
        self.$store.commit('highscoreUpdate', {highscore: highscore})
      });

    }
  },
  mounted: function () {
    //this.addScript('https://platform.twitter.com/widgets.js');
    //this.addScript('//www.instagram.com/embed.js');
    this.$store.dispatch('newsroom/init')
    this.socketEvents();
  }

}
</script>

<style lang="scss">

@import './assets/style/layout.css';
@import './assets/style/text.css';
@import './assets/style/form.css';
@import './assets/style/elements.css';

</style>
