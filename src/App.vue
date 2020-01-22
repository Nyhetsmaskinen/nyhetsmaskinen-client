<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {

  methods: {
    /*addScript: function (src,id){
    }*/
  },
  mounted: function () {
    //this.addScript('https://platform.twitter.com/widgets.js');
    //this.addScript('//www.instagram.com/embed.js');
    this.$store.dispatch('newsroom/init')
  }

}
</script>

<style lang="scss">

@import './assets/style/layout.css';
@import './assets/style/text.css';
@import './assets/style/form.css';
@import './assets/style/elements.css';

</style>
