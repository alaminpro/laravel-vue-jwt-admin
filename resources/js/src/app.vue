<template>
  <div>
    <Header></Header>
    <div class="d-flex align-items-stretch">
      <SideBar></SideBar>
      <div class="page-content">
        <Breadcrumb></Breadcrumb>
        <VuePerfectScrollbar class="scroll-area home_scroll" v-once :settings="settings">
          <section id="dev_main_slimscroll" class="dev-main-section">
            <router-view></router-view>
          </section>
        </VuePerfectScrollbar>
      </div>
    </div>
  </div>
</template>

<script>
import VuePerfectScrollbar from "vue-perfect-scrollbar";
import Header from "./layouts/header.vue";
import Breadcrumb from "./layouts/breadcrumb.vue";
import SideBar from "./layouts/side-bar.vue";
export default {
  name: "App",
  components: {
    Header,
    Breadcrumb,
    SideBar,
    VuePerfectScrollbar
  },
  data() {
    return {
      settings: {
        maxScrollbarLength: 60
      }
    };
  }
};
</script> 