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
          <a href="index.html">
            <i class="icon-home"></i>Home
          </a>
        </li>
        <li>
          <a href="tables.html">
            <i class="icon-grid"></i>Tables
          </a>
        </li>
        <li>
          <a href="charts.html">
            <i class="fa fa-bar-chart"></i>Charts
          </a>
        </li>
        <li>
          <a href="forms.html">
            <i class="icon-padnote"></i>Forms
          </a>
        </li>
        <li>
          <a href="#exampledropdownDropdown" aria-expanded="false" data-toggle="collapse">
            <i class="icon-windows"></i>Example dropdown
          </a>
          <ul id="exampledropdownDropdown" class="collapse list-unstyled">
            <li>
              <a href="#">Page</a>
            </li>
            <li>
              <a href="#">Page</a>
            </li>
            <li>
              <a href="#">Page</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="login.html">
            <i class="icon-logout"></i>Login page
          </a>
        </li>
        <li>
          <a href="login.html">
            <i class="icon-logout"></i>Login page
          </a>
        </li>
        <li>
          <a href="login.html">
            <i class="icon-logout"></i>Login page
          </a>
        </li>
        <li>
          <a href="login.html">
            <i class="icon-logout"></i>Login page
          </a>
        </li>
        <li>
          <a href="login.html">
            <i class="icon-logout"></i>Login page
          </a>
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
 