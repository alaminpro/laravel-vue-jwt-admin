<template>
    <header class="header">
        <nav class="navbar navbar-expand-lg">
            <div
                class="container-fluid d-flex align-items-center justify-content-between"
            >
                <div class="navbar-header">
                    <!-- Navbar Header-->
                    <a href="index.html" class="navbar-brand">
                        <div
                            class="brand-text brand-big visible text-uppercase"
                        >
                            <strong class="text-primary">Dark</strong>
                            <strong>Admin</strong>
                        </div>
                        <div class="brand-text brand-sm">
                            <strong class="text-primary">D</strong>
                            <strong>A</strong>
                        </div>
                    </a>
                    <!-- Sidebar Toggle Btn-->
                    <button class="sidebar-toggle">
                        <i class="fa fa-long-arrow-left"></i>
                    </button>
                </div>
                <div class="right-menu list-inline no-margin-bottom">
                    <!-- Log out               -->
                    <div class="list-inline-item logout">
                        <button
                            id="logout" 
                            class="nav-link bg-transparent text-light border-0"
                            @click="logout"
                        >
                            Logout
                            <i class="icon-logout"></i>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
import { toggleSidebar } from "../utils/toggle-sidebar";

export default {
    name: "Header",
    data() {
        return {};
    },
    methods: {
        logout() {
          this.$store.dispatch('logout')
        }
    },
    mounted() {
        toggleSidebar();
    }
};
</script>
