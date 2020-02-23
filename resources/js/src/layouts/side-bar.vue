<template>
  <nav id="sidebar">
    <!-- Sidebar Header-->
    <div class="sidebar-header d-flex align-items-center">
      <div class="avatar">
        <img src="img/avatar-6.jpg" alt="..." class="img-fluid rounded-circle" />
      </div>
      <div class="title">
        <h1 class="h5">Mark Stephen</h1>
        <p>Web Designer</p>
      </div>
    </div>
    <!-- Sidebar Navidation Menus-->
    <span class="heading">Main</span>
    <VuePerfectScrollbar
      class="scroll-area dev_scroll"
      v-once
      :settings="settings" 
    >
      <ul class="list-unstyled">
        <li class="active">
          <router-link to="/" class="nav-link">
                    Home
                </router-link>
        </li>
        <li class="active">
            <router-link to="/a" class="nav-link">
                  404 page
                </router-link>
        </li> 
            
      </ul>
    </VuePerfectScrollbar>
    <Footer></Footer>
  </nav>
</template>

<script>
import Footer from "./footer.vue";
import VuePerfectScrollbar from "vue-perfect-scrollbar";
export default {
  name: "Header",
  components: {
    Footer,
    VuePerfectScrollbar
  },
  data() {
    return {
      settings: {
        maxScrollbarLength: 60
      }
    };
  }, 
};
</script>
 