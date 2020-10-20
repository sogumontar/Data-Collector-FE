<template>
    <v-app>
        <v-app-bar
                app
                style="color: #ebecf1"
                color="#1b1c25"
                dark
        >
            <div class="d-flex align-center">
                <v-img
                        alt="Vuetify Logo"
                        class="shrink mr-2"
                        contain
                        src="../../public/logo.png"
                        transition="scale-transition"
                        width="100"
                />

                <div class="container">
                    <h5 style="color: #ffffff">Spam Data Collector TA-07</h5>
                </div>
            </div>

            <v-spacer></v-spacer>

            <v-btn
                    href="https://github.com/vuetifyjs/vuetify/releases/latest"
                    target="_blank"
                    text
            >
            </v-btn>
        </v-app-bar>
        <br>
        <v-main class="container">
            <v-card-title>
                <v-row align="center" justify="center">
                    <v-btn-toggle
                            rounded
                            background-color="#FFFFFF"
                    >
                        <v-btn :color="!login?'#1f4068':'#ffffff'" :class="!login?'white--text' : 'black--text'"
                               @click="login = false">
                            Lihat Data
                        </v-btn>
                        <v-btn :color="login?'#1f4068':'#ffffff'" :class="login?'white--text' : 'black--text'"
                               @click="login = true">
                            Tambah Data
                        </v-btn>
                    </v-btn-toggle>
                </v-row>
            </v-card-title>
            <br>
            <div v-if="!login">
                <Home/>
            </div>
            <div v-else>
                <FormSpam/>
            </div>
        </v-main>

        <GoogleLogin :params="params" :onSuccess="onSuccess" :onFailure="onFailure">Login</GoogleLogin>
    </v-app>
</template>

<script>
    import Home from "./Home";
    import FormSpam from "../components/FormSpam";
    import GoogleLogin from 'vue-google-login';

    export default {
        name: 'HomePage',
        mounted() {
        },
        components: {
            FormSpam,
            Home,
            GoogleLogin
        },
        data() {
            return {
                params: {
                    client_id: "996225415106-qqs15f2riu4ge4v0go9cf00hn75ofvmu.apps.googleusercontent.com"
                },
                // only needed if you want to render the button with the google ui
                renderParams: {
                    width: 250,
                    height: 50,
                    longtitle: true
                },
                login: false
            }
        },
        methods: {
            onSuccess(googleUser) {
                console.log("test");
                console.log("asd"+googleUser);

                // This only gets the user information: id, name, imageUrl and email
                console.log(googleUser.getBasicProfile());
            }
        }
    };
</script>
