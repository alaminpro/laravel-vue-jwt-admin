<template>
    <div>
        <div v-if="!loginRoute" >
            <Header></Header>
            <div class="d-flex align-items-stretch">
                <SideBar></SideBar>
                <div class="page-content">
                    <Breadcrumb></Breadcrumb> 
                        <section
                            id="dev_main_slimscroll"
                            class="dev-main-section"
                        >
                            <router-view></router-view>
                        </section>
                
                </div>
            </div>
        </div>
        <div v-if="loginRoute">
           <router-view></router-view>
        </div>
    </div>
</template>

<script>

import Header from "./layouts/header.vue";
import Breadcrumb from "./layouts/breadcrumb.vue";
import SideBar from "./layouts/side-bar.vue";
export default {
    name: "App",
    components: {
        Header,
        Breadcrumb,
        SideBar, 
    },
    data() {
        return {
            settings: {
                maxScrollbarLength: 60
            },
            loginRoute: false
        };
    }, 
   watch: {
     '$route' (to, from){
        from.name == "Login" ? this.loginRoute = true : this.loginRoute= false 
        to.name == "Login" ? this.loginRoute = true : this.loginRoute= false 
    }
    },
  mounted(){
    this.$route.name == "Login" ? this.loginRoute = true : this.loginRoute= false
  }
};
</script>
