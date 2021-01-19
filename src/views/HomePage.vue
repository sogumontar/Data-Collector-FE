<template>
    <v-app>
            <b-navbar toggleable="lg" type="dark" variant="info">
                <v-img
                        alt="Vuetify Logo"
                        class="shrink mr-2"
                        contain
                        src="../../public/logo-2.png"
                        transition="scale-transition"
                        width="100"
                />
                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                <b-collapse id="nav-collapse" is-nav>
                    <h3 style="color: white">Data Collector TA-07</h3>
                    <!-- Right aligned nav items -->
                    <b-navbar-nav class="ml-auto">
                        <b-nav-form>
                            <b-form-input size="sm"  type="number" min="0"  class="mr-sm-2"  v-model="query" placeholder="Cari nomor telepon"></b-form-input>
                            <b-button size="sm" class="my-2 my-sm-0" @click="search" >Search</b-button>
                        </b-nav-form>
                    </b-navbar-nav>
                </b-collapse>
            </b-navbar>

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
        <br>
        <v-main class="container">
            <v-card-title>
                <v-row align="center" justify="center">
                    <v-btn-toggle
                            rounded
                            background-color="#FFFFFF"
                    >
                        <v-btn :color="!first?'#D5DCDB':'#ffffff'"
                               :class="!first?'black--text' : 'black--text'"
                               @click="first = false">
                            Laporan Pengguna
                        </v-btn>
                        <v-btn :color="first?'#D5DCDB':'#ffffff'"
                               :class="first?'black--text' : 'black--text'"
                               @click="first = true">
                            Laporkan SMS Spam
                        </v-btn>
                    </v-btn-toggle>
                </v-row>
            </v-card-title>
            <br>
            <div v-if="!login">
                <div v-if="!first">
                    <div class="container">
                        <br><br>
                        <div v-if="hit">
                            <h5>Hasil Pencarian</h5>
                            <div class="container" v-if="shows">
<!--                                <center><img style="width: 40%; height: 40%"-->
<!--                                             src="../assets/not-found.png" alt=""></center>-->
                                <center><h2>Hasil Pencarian untuk {{query}} Not Found</h2></center>
                            </div>
                            <div class="container" v-else>
                                <div>
                                    <transition-group name="fade" tag="div">
                                        <div v-for="i in [currentIndex]" :key="i">
                                            <center>
                                                <p>{{currentImg.nomor}}</p>
                                                <p>{{currentImg.isi}}</p>
                                            </center>
                                        </div>
                                    </transition-group>
                                    <center>
                                        <div class="row">
                                            <div class="col-md-6" align="left">
                                                <a class="" @click="prev" href="#">&#10094;
                                                    Previous</a>
                                            </div>
                                            <div class="col-md-6" align="right">
                                                <a class="" @click="next" href="#">&#10095; Next</a>
                                            </div>
                                        </div>
                                    </center>
                                </div>
                            </div>
                        </div>
<!--                        <div class="container" >-->
<!--                            <TrendingSpam/>-->
<!--                        </div>-->
                    </div>
                    <div>
<!--                        <br>-->
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
<!--                                <h4>Grafik kategori penyebar spam</h4>-->
<!--                                <hr>-->
<!--                                <v-card id="chart">-->
<!--                                    <apexchart type="donut" :options="chartOptions"-->
<!--                                               :series="series"></apexchart>-->
<!--                                    <br><br><br><br>-->
<!--                                </v-card>-->
<!--                                <hr>-->
                                <h5>Keterangan Kategori</h5>
                                <hr>
                                <v-card>
                                    <b-list-group-item>
                                        <h6><b>Penipuan:</b> Mengandung unsur-unsur rekayasa tipu muslihat dengan
                                            serangkaian kasus
                                            yang menarik perhatian pengguna.</h6>
                                    </b-list-group-item>
                                    <b-list-group-item>
                                        <h6><b>Iklan/Promosi:</b> Mengandung unsur promosi baik berupa barang maupun
                                            jasa seperti
                                            telemarketer atau kreditur.</h6>
                                    </b-list-group-item>
                                    <b-list-group-item>
                                        <h6><b>Banking:</b> Menerima informasi mengenai rekening bank miliknya seperti
                                            cek saldo,
                                            informasi transaksi, dan sebagainya.</h6>
                                    </b-list-group-item>
                                    <b-list-group-item>
                                        <h6><b>Operator:</b> Informasi terkait penggunaan fasilitas yang disediakan
                                            provider seperti
                                            info kuota internet, informasi isi ulang pulsa, dll.</h6>
                                    </b-list-group-item>
                                    <b-list-group-item>
                                        <h6><b>Unknown:</b> pesan yang tidak diketahui/tidak dikenal serta bukan
                                            termasuk sms dengan unsur
                                            penipuan, promosi, banking, dan operator.</h6>
                                    </b-list-group-item>
                                </v-card>
                                <br>

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
        <!--                                <GoogleLogin :params="params" :onSuccess="onSuccess" :onFailure="onFailure" style="margin-top: 17px">-->
        <!--                                    <a href="#" class="google btn">-->
        <!--                                        <img src="../../public/g-icon.png" alt=""> Login with Google+-->
        <!--                                    </a>-->
        <!--                                </GoogleLogin>-->
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
    import {mdbIcon} from 'mdbvue';
    import TrendingSpam from "../components/TrendingSpam";

    export default {
        name: 'HomePage',
        components: {
            TrendingSpam,
            FormSpam,
            Home,
            mdbIcon
        },
        computed: {
            currentImg: function () {
                return this.results[Math.abs(this.currentIndex) % this.results.length];
            }
        },
        mounted() {
            this.load();
        },
        methods: {
            search() {
                this.hit = true;
                this.$http.post('/search/' + this.query)
                    .then((data) => {
                        console.log(data.data.data.length);
                        if (data.data.data.length === 0) {
                            this.shows = true;
                            var opt = confirm("Ingin menambahkan data baru?")
                            if(opt){
                                this.first=true;
                            }
                        } else {
                            this.shows = false;
                            this.results = [];
                            for (var i in data.data.data) {
                                this.results.push(data.data.data[i])
                            }
                        }
                    }).catch(() => {
                });
            },
            show(val) {
                this.isi = val.isi;
                this.$bvModal.show('bv-modal-example')
            },

            next: function () {
                this.currentIndex += 1;
            },
            prev: function () {
                this.currentIndex -= 1;
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
                        console.log(data.data.data);
                        for (var i in data.data.data) {
                            if (data.data.data[i].kategori === "Pesan Penipuan") {
                                telkomsel++;
                            } else if (data.data.data[i].kategori === "Gift Card (Penipuan yang mengarahkan ke link tertentu)") {
                                xl++;
                            } else if (data.data.data[i].kategori === "Iklan/promosi") {
                                axis++;
                            } else if (data.data.data[i].kategori === "Banking (transaksi SMS banking)") {
                                indosat++;
                            } else if (data.data.data[i].kategori === "Operator (Pesan yang langsung dari operator tertentu)") {
                                smartfren++;
                            } else if (data.data.data[i].kategori === "Unknown (Pesan yang tidak mengganggu namun nomor pengirim tidak diketahui)") {
                                tri++;
                            }
                            this.desserts.push(data.data.data[i])
                        }
                        this.series.push(telkomsel, xl, axis, indosat, smartfren, tri);
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
                results: [],
                timer: null,
                currentIndex: 0,
                login: false,
                first: false,
                hit: false,
                series: [],
                backup: [],
                query: "",
                shows: false,
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
                    labels: [
                        "Banking",
                        "Gift Card",
                        "Iklan/promosi",
                        "Penipuan",
                        'Operator',
                        'Unknown'],
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

    .fade-enter-active,
    .fade-leave-active {
        transition: all 0.9s ease;
        overflow: hidden;
        visibility: visible;
        position: absolute;
        width: 100%;
        opacity: 1;
    }

    .fade-enter,
    .fade-leave-to {
        visibility: hidden;
        width: 100%;
        opacity: 0;
    }

    img {
        height: 600px;
        width: 100%
    }

    .prev, .next {
        cursor: pointer;
        position: absolute;
        top: 40%;
        width: auto;
        padding: 16px;
        color: white;
        font-weight: bold;
        font-size: 18px;
        transition: 0.7s ease;
        border-radius: 0 4px 4px 0;
        text-decoration: none;
        user-select: none;
    }

    .next {
        right: 0;
    }

    .prev {
        left: 0;
    }

    .prev:hover, .next:hover {
        background-color: rgba(0, 0, 0, 0.9);
    }
</style>
