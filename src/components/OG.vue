<template>
  <div class="OG">

    <div v-if="og.data">
      <a :href="og.data.ogUrl" target="_blank">
        <img :src="og.data.ogImage.url" onerror="this.style.display='none'" />
        <br />
        <h3>{{og.data.ogTitle}}</h3>
        <p>
          {{og.data.ogDescription}}
        </p>
        <h4>
          {{og.data.ogSiteName}}
        </h4>
      </a>
    </div>

  </div>
</template>

<script>

export default {
  name: 'OG',
  data: function () {
    return {
    }
  },
  props: {
    og: Object
  },
  computed: {
  },
  watch: {
  },
  methods: {
    openSite: function () {
      if(this.og.data && this.og.data.ogUrl){
        window.open(this.og.data.ogUrl,'_blank');
      }
    }
  },
  mounted: function () {
  },
  update: function () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

  .OG{}

  .OG *{
    color: white !important;
  }

  img{
    max-width: 100%;
  }

  a{
    font-weight: normal;
  }

</style>
