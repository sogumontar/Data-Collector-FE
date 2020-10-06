<template>
    <v-app>
        <v-app-bar
                app
                color="primary"
                dark
        >
            <div class="d-flex align-center">
                <v-img
                        alt="Vuetify Logo"
                        class="shrink mr-2"
                        contain
                        src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
                        transition="scale-transition"
                        width="40"
                />

                <div class="container">
                    <h5>Spam Data Collector TA-07</h5>
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
                        <v-btn :color="!login?'#1976d2':'#ffffff'" :class="!login?'white--text' : 'black--text'"
                               @click="login = false">
                            Lihat Data
                        </v-btn>
                        <v-btn :color="login?'#1976d2':'#ffffff'" :class="login?'white--text' : 'black--text'"
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
    </v-app>
</template>

<script>
    import Home from "./Home";
    import FormSpam from "../components/FormSpam";

    export default {
        name: 'HomePage',
        mounted() {
        },
        components: {
            FormSpam,
            Home,
        },
        data() {
            return {
                login: false
            }
        },
    };
</script>
