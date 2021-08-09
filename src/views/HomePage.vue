<template>
    <v-app>
        <b-navbar toggleable="lg" type="dark" style="background-color: #4788FF;">
            <v-img
                    alt="Vuetify Logo"
                    class="shrink mr-2"
                    contain
                    @click="reloads"
                    src="../../public/logo-2.png"
                    transition="scale-transition"
                    width="100"
            />
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <h3 style="color: white"
                    @click="reloads" class="ml-4">Data Collector TA-07</h3>
                <!-- Right aligned nav items -->
                <b-navbar-nav class="">
                    <div class="form-group">
                        <b-nav-form>
                            <b-row class="wr-form-search1" style="">
                                <b-col cols="auto">
                                    <b-form-input size="sm" type="number" min="0" class="wr-form-search" v-model="query"
                                                  placeholder="Cari nomor spam" style=""></b-form-input>
                                </b-col>
                                <b-col cols="auto" class="wr-button-search" style="">
                                    <b-button size="sm" class="my-sm-0 " @click="search"
                                              style="background-color: white"><i
                                            class="fa fa-search"
                                            style="color: black;"></i>
                                    </b-button>
                                </b-col>
                            </b-row>
                        </b-nav-form>
                    </div>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
        <v-spacer></v-spacer>
        <v-main class="container">
            <div v-if="!admin">
                <div v-if="!first">
                    <div v-if="hit">
                        <div class="row">
                            <div class="col-md-11"><h5><b v-if="!shows">Hasil Pencarian</b></h5></div>
                            <div class="col-md-1" style="align-items: end">
                                <button @click="tutup"><i class="fa fa-times"></i></button>
                            </div>
                        </div>
                        <div class="container" v-if="shows">
                            <center><h4>Hasil pencarian untuk {{query}} tidak ditemukan</h4></center>
                        </div>
                        <div class="container" v-else>
                            <div class="row">
                                <div class="col-md-11"><h5><b v-if="shows">Hasil Pencarian</b></h5></div>
                                <div class="row">
                                    <div class="col-md-12" v-for="data in resultsearch" :key="data.nomor">
                                        <div class="card container" style="height:85%;background-color: #ECF3FF">
                                            <p>
                                                    <span style="padding-right: 10px; color: orange"><i
                                                            class="fa fa-circle" aria-hidden="true"></i></span>{{data.nomor}}
                                            </p>
                                            <p>{{data.isi}}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="row" v-if="!cek">
                            <div class="col-md-8 col-sm-12 ">
                                <br>
                                <TrendingSpam/>
                            </div>
                            <div class="col-md-4 col-sm-12">
                                <v-card-title v-if="!cek">
                                    <v-row justify="end">
                                        <v-btn-toggle
                                                rounded
                                                background-color="#FFFFFF"
                                                v-if="!first "

                                        >
                                            <v-btn :color="first?'#ffffff':'#2CA1D3'"
                                                   :class="first?'black--text' : 'white--text'"
                                                   @click="first = true" style="border-radius: 20px;">
                                                Laporkan SMS Spam
                                            </v-btn>

                                            <v-btn :color="first?'#ffffff':'#2CA1D3'"
                                                   :class="first?'black--text' : 'white--text'"
                                                   @click="openAdmin" style="border-radius: 20px; margin-left: 10px">
                                                Admin Site
                                            </v-btn>
                                        </v-btn-toggle>
                                    </v-row>
                                    <div v-if="first">
                                        <button @click="first = false"><i class="fa fa-times flex-row"></i></button>
                                    </div>
                                </v-card-title>
                                <v-card style="padding: 10px" class="col-md-12">
                                    <h5>Keterangan Kategori</h5>
                                    <div class="row" v-for="kategori in kategori" :key="kategori.title">
                                        <div class="col-1">
                                            <h6>
                                            <span style="padding-right: 10px; " v-bind:style="{color:kategori.color}"><i
                                                    class="fa fa-circle"
                                                    aria-hidden="true"></i>
                                            </span>

                                            </h6>
                                        </div>
                                        <div class="col-sm-10 col-md-4">
                                            <p>{{kategori.title}}</p>
                                        </div>
                                        <div class="col-md-7 col-sm-12">
                                            <p>{{kategori.deskripsi}}</p>
                                        </div>
                                    </div>
                                </v-card>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div v-if="!cek || shows">
                            <div class="col-md-12 col-12 p-4">
                                <v-card>
                                    <v-data-table
                                            dense
                                            @click:row="show"
                                            :headers="headers"
                                            :items="desserts"
                                            :items-per-page="10"
                                            class="elevation-1 table table-responsive"
                                    >
                                        <template v-slot:item="{ item }">
                                            <tr>
                                                <td><span v-bind:style="{color:item.colour}"
                                                          style="padding-right: 10px;"><i class="fa fa-circle"
                                                                                          aria-hidden="true"></i></span>
                                                </td>
                                                <td>{{ item.nomor }}</td>
                                                <td>{{ item.isi }}</td>
                                                <td>{{ item.jenis_provider }}</td>
                                                <td>{{ item.tanggal }}</td>
                                            </tr>
                                        </template>
                                    </v-data-table>
                                </v-card>
                            </div>
                        </div>
                        <br>
                    </div>
                </div>
                <div v-else>
                    <FormSpam/>
                </div>
            </div>
            <div v-else  class="container">
                <div v-if="!admin_login" align="center">
                    <div class="card"  style="background-color:#ECF3FF ; width: 50%" >
                        <div style="margin: 20px">
                        <p>Masukkan PIN Admin</p>
                            <div style="width: 60%">
                                <input v-model="pin_admin" type="password" width="5px" class="form-control" >
                            </div>
                        <br>
                        <v-btn color="#2CA1D3"  style="color: white;"
                               @click="checkPin">
                            Lanjutkan
                        </v-btn>
                        </div>
                    </div>
                </div>
                <div v-else>
                    <Admin/>
                </div>
            </div>
        </v-main>
        <Footer/>

    </v-app>
</template>

<script>
    import Home from "./Home";
    import FormSpam from "../components/FormSpam";
    import {mdbIcon} from 'mdbvue';
    import TrendingSpam from "../components/TrendingSpam";
    import Footer from "../components/Footer";
    import Admin from "../components/Admin";

    export default {
        name: 'HomePage',
        components: {
            TrendingSpam,
            FormSpam,
            Home,
            Footer,
            mdbIcon,
            Admin,
        },
        computed: {
            currentImg: function () {
                return this.results[Math.abs(this.currentIndex) % this.results.length];
            }
        },
        mounted() {
            this.load();
            if (this.$route.query.msg) {
                this.first = true
            }
        },
        methods: {
            checkPin(){
                if(this.pin_admin == "ta07"){
                    this.admin_login = true;
                    this.pin_admin =""
                }else{
                    alert("Pin Salah");
                }

            },
            openAdmin() {
                this.admin = true
                this.$bvModal.show('myModal')
            },
            tutup() {
                this.cek = false;
                this.hit = false;
            },
            search() {
                this.hit = true;
                this.cek = true;
                this.$http.post('/search/' + this.query)
                    .then((data) => {
                        this.shows = true;
                        if (data.data.data.length === 0) {
                            this.shows = true;
                            var opt = confirm("Ingin menambahkan data baru?")
                            if (opt) {
                                this.first = true;
                                this.searchFalse = true
                            }
                        } else {
                            this.shows = false;
                            this.resultsearch = [];
                            for (var i in data.data.data) {
                                this.resultsearch.push(data.data.data[i])
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
            reloads() {
                this.admin_login= false
                this.admin = false
                this.first = false
                this.shows = false
                this.cek = false;
                this.hit = false;
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
                        for (var i in data.data.data) {
                            var obj = data.data.data[i];
                            if (obj.kategori === "Penipuan") {
                                obj.colour = '#000000'
                                telkomsel++;
                            } else if (obj.kategori === "Gift Card (Penipuan yang mengarahkan ke link tertentu)") {
                                xl++;
                            } else if (obj.kategori === "Iklan/promosi") {
                                obj.colour = '#ECA336'
                                axis++;
                            } else if (obj.kategori === "Banking (transaksi SMS banking)") {
                                indosat++;
                            } else if (obj.kategori === "Operator (Pesan yang langsung dari operator tertentu)") {
                                smartfren++;
                            } else {
                                obj.colour = '#4788FF'
                            }

                            if (obj.kategori !== "Ham") {
                                this.desserts.push(obj)
                            }
                        }
                        this.series.push(telkomsel, xl, axis, indosat, smartfren, tri);
                    }).catch(() => {
                });
            }
        },
        data() {
            return {
                admin: false,
                pin_admin:"",
                admin_login: false,
                cek: false,
                // only needed if you want to render the button with the google ui
                renderParams: {
                    width: 250,
                    height: 50,
                    longtitle: true
                },
                kategori: [
                    {
                        'color': "black",
                        'title': "Penipuan",
                        'deskripsi': "Mengandung unsur-unsur rekayasa tipu muslihat dengan serangkaian kasus yang menarik perhatian pengguna."
                    },
                    {
                        'color': "orange",
                        'title': "Iklan/ Promosi",
                        'deskripsi': "Mengandung unsur promosi baik berupa barang maupun jasa seperti telemarketer atau kreditur."
                    },
                    // {
                    //     'color': "grey",
                    //     'title': "Unknown",
                    //     'deskripsi': "Pesan yang tidak diketahui/tidak dikenal serta bukan termasuk sms dengan unsur penipuan, promosi, banking, dan operator."
                    // }
                ],
                results: [],
                resultsearch: [],
                timer: null,
                currentIndex: 0,
                login: false,
                first: false,
                hit: false,
                series: [],
                searchFalse: false,
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
                    {text: '', value: 'colour'},
                    {text: 'Nomor telepon', value: 'nomor'},
                    {text: 'Isi Pesan', value: 'isi'},
                    {text: 'Jenis Provider', value: 'jenis_provider'},
                    // {text: 'Jumlah', value: 'jumlah'},
                    // {text: 'Kategori', value: 'kategori'},
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

    /* Extra small devices (phones, 600px and down) */
    @media only screen and (max-width: 600px) {
        .wr-form-search {
            margin-left: -10px
        }

        .wr-button-search {
            margin-left: -35px
        }

    }

    @media only screen and (min-width: 600px) {
        .wr-form-search {
            margin-left: -11px
        }

        .wr-button-search {
            margin-left: -30px
        }

    }

    /* Medium devices (landscape tablets, 768px and up) */
    @media only screen and (min-width: 768px) {
        .wr-form-search {
            margin-left: -10px
        }

        .wr-button-search {
            margin-left: -35px
        }

        /*.wr-form-search1{*/
        /*    margin-left: 20px*/
        /*}*/
    }

    /* Large devices (laptops/desktops, 992px and up) */
    @media only screen and (min-width: 992px) {
        .wr-form-search {
            margin-left: 330px
        }

        .wr-button-search {
            margin-left: -27px
        }

        /*.wr-form-search1{*/
        /*    margin-right: -20px*/
        /*}*/
    }

    /* Extra large devices (large laptops and desktops, 1200px and up) */
    @media only screen and (min-width: 1200px) {
        .wr-form-search {
            margin-left: 535px
        }

        .wr-button-search {
            margin-left: -29px
        }

        /*.wr-form-search1{*/
        /*    margin-right: 300px*/
        /*}*/
    }

    * {
        box-sizing: border-box;
    }

    /* Style the search field */
    form.example input[type=text] {
        padding: 10px;
        font-size: 17px;
        border: 1px solid grey;
        float: left;
        width: 80%;
        background: #f1f1f1;
    }

    /* Style the submit button */
    form.example button {
        float: left;
        width: 20%;
        padding: 10px;
        background: #2196F3;
        color: white;
        font-size: 17px;
        border: 1px solid grey;
        border-left: none; /* Prevent double borders */
        cursor: pointer;
    }

    form.example button:hover {
        background: #0b7dda;
    }

    /* Clear floats */
    form.example::after {
        content: "";
        clear: both;
        display: table;
    }

    img {
        height: 600px;
        width: 100%
    }


</style>
