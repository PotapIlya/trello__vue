<template functional>
  <div id="app">
    <Nav />
    <router-view/>
  </div>
</template>
<script>
  import Nav from '@/components/templates/nav';

  export default {
    components: {
      Nav
    }
  }
</script>
