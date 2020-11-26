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

            <!--            <div right v-if="!login">-->
            <!--                    <GoogleLogin-->
            <!--                            :params="params"-->
            <!--                            :onSuccess="onSuccess"-->
            <!--                            :onFailure="onFailure"-->
            <!--                            style="margin-top: 17px"-->
            <!--                    >-->
            <!--                        Login-->
            <!--                    </GoogleLogin>-->
            <!--            </div>-->
            <!--            <b-nav-item-dropdown text="Lang" right v-else>-->
            <!--                <b-dropdown-item href="#">Profile</b-dropdown-item>-->
            <!--                <b-dropdown-item href="#">Logout</b-dropdown-item>-->
            <!--            </b-nav-item-dropdown>-->
        </v-app-bar>
        <br>
        <v-main class="container">
            <v-card-title>
                <v-row align="center" justify="center">
                    <v-btn-toggle
                           rounded
                           background-color="#FFFFFF"
                    >
                        <v-btn :color="!first?'#1f4068':'#ffffff'"
                               :class="!first?'white--text' : 'black--text'"
                               @click="first = false">
                            Lihat Data
                        </v-btn>
                        <v-btn :color="first?'#1f4068':'#ffffff'"
                               :class="first?'white--text' : 'black--text'"
                               @click="first = true">
                            Tambah Data
                        </v-btn>
                    </v-btn-toggle>
                </v-row>
            </v-card-title>
            <br>
            <div v-if="!login">
                <div v-if="!first">
                    <div>
                        <br>
                        <div class="row">
                            <div class="col-md-8">
                                <v-card>
                                    <v-data-table
                                           dense
                                           @click:row="show"
                                           :headers="headers"
                                           :items="desserts"
                                           :items-per-page="10"
                                           class="elevation-1"
                                    ></v-data-table>
                                </v-card>
                            </div>
                            <div class="col-md-4">
                                <h5>Grafik provider penyebar spam</h5>
                                <hr>
                                <v-card id="chart">
                                    <apexchart type="donut" :options="chartOptions"
                                               :series="series"></apexchart>
                                    <br><br><br><br>
                                </v-card>
                            </div>
                        </div>
                        <br><br>
                        <hr>
                        <br><br>
                        <div>
                            <b-modal id="bv-modal-example" hide-footer>
                                <div class="d-block text-center">
                                    <p>{{isi}}</p>
                                </div>
                            </b-modal>
                        </div>
                    </div>
                </div>
                <div v-else>
                    <FormSpam/>
                </div>
            </div>
            <div v-else>
                <h1>Login</h1>
            </div>
        </v-main>
        <!--        <div>-->
        <!--            <b-modal id="bv-modal-example" hide-footer>-->
        <!--                <div class="d-block text-center">-->
        <!--                    <h3>Spam Data Collector TA-07</h3>-->
        <!--                    <p>Website ini ditujukan sebagai media untuk pengumpulan data sms yang bersifat SPAM-->
        <!--                        (tidak diinginkan). Oleh karena itu, kami segenap kelompok TA-07 D4TRPL-2017, meminta bantuan-->
        <!--                        dari seluruh rekan sekalian untuk membantu kami dalam hal mengumpulkan data yang nantinya akan-->
        <!--                        dijadikan sebagai acuan dalam melakukan deteksi dan juga peng-klasifikasi-an setiap data pesan-->
        <!--                        yang masuk ke nomor pengguna. Sebagai bentuk terimakasih, kami </p>-->
        <!--                </div>-->
        <!--                <div class="row">-->
        <!--                    <div class="col-md-6">-->
        <!--                        <GoogleLogin :params="params" :onSuccess="onSuccess" :onFailure="onFailure" style="margin-top: 17px">-->
        <!--                            <a href="#" class="google btn">-->
        <!--                                <img src="../../public/g-icon.png" alt=""> Login with Google+-->
        <!--                            </a>-->
        <!--                        </GoogleLogin>-->
        <!--                    </div>-->
        <!--                    <div class="col-md-6">-->
        <!--                        <b-button style="background-color: #BEBEBE; width: 100%; height: 62px; margin-bottom: 10px" class="mt-3" block @click="$bvModal.hide('bv-modal-example')">Lanjutkan</b-button>-->
        <!--                    </div>-->
        <!--                </div>-->
        <!--            </b-modal>-->
        <!--        </div>-->

    </v-app>
</template>

<script>
    import Home from "./Home";
    import FormSpam from "../components/FormSpam";

    export default {
        name: 'HomePage',
        components: {
            FormSpam,
            Home,
        },
        mounted() {
            this.load();
        },
        methods: {
            show(val) {
                this.isi = val.isi;
                this.$bvModal.show('bv-modal-example')
            },
            load() {
                this.$http.get('/findAll')
                    .then((data) => {
                        var telkomsel = 0
                        var xl = 0
                        var axis = 0
                        var indosat = 0
                        var smartfren = 0
                        var tri = 0
                        var net = 0
                        var bolt = 0
                        console.log(data.data.data);
                        for (var i in data.data.data) {
                            if (data.data.data[i].jenis_provider === "Telkomsel") {
                                telkomsel++;
                            } else if (data.data.data[i].jenis_provider === "XL Axiata ") {
                                xl++;
                            } else if (data.data.data[i].jenis_provider === "AXIS") {
                                axis++;
                            } else if (data.data.data[i].jenis_provider === "Indosat Ooredoo") {
                                indosat++;
                            } else if (data.data.data[i].jenis_provider === "smartfren") {
                                smartfren++;
                            } else if (data.data.data[i].jenis_provider === "3") {
                                tri++;
                            } else if (data.data.data[i].jenis_provider === "Net1 Indonesia") {
                                net++;
                            } else if (data.data.data[i].jenis_provider === "BOLT") {
                                bolt++;
                            }
                            this.desserts.push(data.data.data[i])
                        }
                        this.series.push(indosat, xl, axis, telkomsel, smartfren, tri, net, bolt);
                    }).catch(() => {
                });
            }
        },
        data() {
            return {
                // only needed if you want to render the button with the google ui
                renderParams: {
                    width: 250,
                    height: 50,
                    longtitle: true
                },
                login: false,
                first: false,
                series: [],
                chartOptions: {
                    chart: {
                        type: 'donut',
                    },
                    plotOptions: {
                        pie: {
                            donut: {
                                labels: {
                                    show: true,
                                    total: {
                                        showAlways: true,
                                        show: true
                                    }
                                }
                            }
                        }
                    },
                    labels: ["Indosat Oredoo", "XL Axiata", "AXIS", "Telkomsel  ", 'smartfren', '3', 'Net1 Indonesia', 'BOLT'],
                    responsive: [{
                        breakpoint: 480,
                        options: {
                            chart: {
                                width: 200
                            },
                            legend: {
                                position: 'bottom'
                            }
                        }
                    }]
                },
                headers: [
                    // { text: 'Id', value: 'id' },
                    {text: 'Nomor telepon', value: 'nomor'},
                    // { text: 'Isi Pesan', value: 'isi' },
                    {text: 'Jenis Provider', value: 'jenis_provider'},
                    {text: 'Jumlah', value: 'jumlah'},
                    {text: 'Kategori', value: 'kategori'},
                    // { text: 'Nama Pengirim', value: 'nama_pengirim' },
                    {text: 'Tanggal pengiriman', value: 'tanggal'},
                ],
                desserts: [],
                isi: '',
            }
        }
    }
</script>
<style>
    .google {
        background-color: #bebebe;
        color: white;
    }
</style>
