<template>
  <div class="jcss">
    <pub-head></pub-head>
    <Traffic-facilities></Traffic-facilities>
  </div>
</template>

<script>
import TrafficFacilities from '@/components/TrafficFacilities'
import pubHead from '@/components/pubHead'
export default {
  name: 'jcss',
  data () {
    return {
      msg: 'hehe..'
    }
  },
  components: { 'TrafficFacilities': TrafficFacilities, 'pubHead': pubHead }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .jcss {
    /*  */
  }
</style>