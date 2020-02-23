<template>
    <div class="login-page">
        <div class="container d-flex align-items-center">
            <div class="form-holder has-shadow">
                <div class="row">
                    <!-- Logo & Information Panel-->
                    <div class="col-lg-6">
                        <div class="info d-flex align-items-center">
                            <div class="content">
                                <div class="logo">
                                    <h1>Dashboard</h1>
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit.
                                </p>
                            </div>
                        </div>
                    </div>
                    <!-- Form Panel    -->
                    <div class="col-lg-6 bg-white">
                        <div class="form ">
                            <div class="alert alert-danger d-block" v-if="errors">{{errors}}</div>
                            <div class="content">
                                <form @submit.prevent="Login()">
                                    <ValidationObserver
                                        ref="form"
                                        class="w-100"
                                    >
                                        <div class="form-group">
                                            <ValidationProvider
                                                name="email"
                                                rules="required"
                                                v-slot="{ errors }"
                                                class="w-100"
                                            >
                                                <label
                                                    for="email"
                                                    class="label-material"
                                                    >Email</label
                                                >
                                                <input
                                                    id="email"
                                                    type="text"
                                                    name="email"
                                                    v-model.number="data.email"
                                                    class="input-material"
                                                    placeholder="Example: admin@gmail.com"
                                                />
                                                <span
                                                    v-if="errors[0]"
                                                    class="text-danger prems_custom_error"
                                                    >{{ errors[0] }}</span
                                                >
                                            </ValidationProvider>
                                        </div>
                                        <div class="form-group">
                                            <ValidationProvider
                                                name="password"
                                                rules="required|min:6"
                                                v-slot="{ errors }"
                                                class="w-100"
                                            >
                                                <label
                                                    for="login-password"
                                                    class="label-material"
                                                    >Password</label
                                                >
                                                <input
                                                    id="login-password"
                                                    type="password"
                                                    name="password"
                                                    v-model="data.password"
                                                    class="input-material"
                                                    placeholder="******"
                                                />
                                                <span
                                                    v-if="errors[0]"
                                                    class="text-danger prems_custom_error"
                                                    >{{ errors[0] }}</span
                                                >
                                            </ValidationProvider>
                                        </div>
                                        <button
                                            type="submit"
                                            class="btn btn-primary"
                                        >
                                            Login
                                        </button>
                                    </ValidationObserver>
                                </form>
                                <a href="#" class="forgot-pass mt-2"
                                    >Forgot Password?</a
                                >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ValidationProvider, ValidationObserver } from "vee-validate";
export default {
    data() {
        return {
            data: {
                email: "",
                password: ""
            },
            errors: ""
        };
    },
    components: {
        ValidationProvider,
        ValidationObserver
    },
    computed: {},
    methods: {
        Login() {
            this.$refs.form.validate().then(result => {
                if (result) {
                    let data = {
                        email: this.data.email,
                        password: this.data.password
                    };
                    axios
                        .post("api/auth/login", data)
                        .then(data => {
                            this.$store.dispatch("login", data);
                            this.errors = ""; 
                        })
                        .catch(error => (this.errors = error.response ? error.response.data.errors.email[0] : ''));
                }
            });
        }
    }
};
</script>
