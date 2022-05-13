<template functional>
  <div class="container" id="app">

    <Nav />
    <div>
      <router-view/>
    </div>
  </div>
</template>

<script>
  import Nav from '@/components/templates/nav'

export default {
  name: 'Index',
  components: {
    Nav,
  },
  data: () => ({
    //
  }),
};
</script>
