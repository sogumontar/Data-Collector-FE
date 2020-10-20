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
                    <h5 style="color: #ffffff">Data Collector TA-07</h5>
                </div>
            </div>

            <v-spacer></v-spacer>

            <div right v-if="!login">
                    <GoogleLogin
                            :params="params"
                            :onSuccess="onSuccess"
                            :onFailure="onFailure"
                            style="margin-top: 17px"
                    >
                        Login
                    </GoogleLogin>
            </div>
            <b-nav-item-dropdown text="Lang" right v-else>
                <b-dropdown-item href="#">Profile</b-dropdown-item>
                <b-dropdown-item href="#">Logout</b-dropdown-item>
            </b-nav-item-dropdown>
        </v-app-bar>
        <br>
        <v-main class="container">
            <v-card-title>
                <v-row align="center" justify="center">
                    <v-btn-toggle
                            rounded
                            background-color="#FFFFFF"
                    >
                        <v-btn :color="!first?'#1f4068':'#ffffff'" :class="!first?'white--text' : 'black--text'"
                               @click="first = false">
                            Lihat Data
                        </v-btn>
                        <v-btn :color="first?'#1f4068':'#ffffff'" :class="first?'white--text' : 'black--text'"
                               @click="first = true">
                            Tambah Data
                        </v-btn>
                    </v-btn-toggle>
                </v-row>
            </v-card-title>
            <br>
            <div v-if="!login">
                <div v-if="!first">
                    <Home/>
                </div>
                <div v-else>
                    <FormSpam/>
                </div>
            </div>
            <div v-else>
                <h1>Login</h1>
            </div>
        </v-main>
        <div>
            <b-modal id="bv-modal-example" hide-footer>
                <div class="d-block text-center">
                    <h3>Spam Data Collector TA-07</h3>
                    <p>Website ini ditujukan sebagai media untuk pengumpulan data sms yang bersifat SPAM
                        (tidak diinginkan). Oleh karena itu, kami segenap kelompok TA-07 D4TRPL-2017, meminta bantuan
                        dari seluruh rekan sekalian untuk membantu kami dalam hal mengumpulkan data yang nantinya akan
                        dijadikan sebagai acuan dalam melakukan deteksi dan juga peng-klasifikasi-an setiap data pesan
                        yang masuk ke nomor pengguna. Sebagai bentuk terimakasih, kami </p>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <GoogleLogin :params="params" :onSuccess="onSuccess" :onFailure="onFailure" style="margin-top: 17px">
                            <a href="#" class="google btn">
                                <img src="../../public/g-icon.png" alt=""> Login with Google+
                            </a>
                        </GoogleLogin>
                    </div>
                    <div class="col-md-6">
                        <b-button style="background-color: #BEBEBE; width: 100%; height: 62px; margin-bottom: 10px" class="mt-3" block @click="$bvModal.hide('bv-modal-example')">Lanjutkan</b-button>
                    </div>
                </div>
            </b-modal>
        </div>
    </v-app>
</template>

<script>
    import Home from "./Home";
    import FormSpam from "../components/FormSpam";
    import GoogleLogin from 'vue-google-login';

    export default {
        name: 'HomePage',
        components: {
            FormSpam,
            Home,
            GoogleLogin
        },
        mounted() {
            if (!this.login) {
                this.$bvModal.show('bv-modal-example')
            }
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
                login: false,
                first: false
            }
        },
        methods: {
            onSuccess(googleUser) {
                console.log("test");
                console.log("asd" + googleUser);

                // This only gets the user information: id, name, imageUrl and email
                console.log(googleUser.getBasicProfile());
            },
            onFailure() {
                alert('Login failed.. Try again');
            }
        }
    };
</script>
<style>
    .google {
        background-color: #bebebe;
        color: white;
    }
</style>
