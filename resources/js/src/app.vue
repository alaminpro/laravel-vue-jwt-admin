<template>
  <div>
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./layouts/header.vue";
import Footer from "./layouts/footer.vue";
export default {
  name: "App",
  components: {
    Header,
    Footer
  }, 
};
</script> 