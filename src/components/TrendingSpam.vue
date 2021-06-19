<template>
    <div>
        <p style="font-weight: bolder" class="gita-judul-trending">TRENDING SMS SPAM</p>
        <div class="row">
            <<<<<<< HEAD
            <div class="col-md-12" v-for="(data,key) in trend" :key="key">
                <div v-if="positions === 1">
                    <div v-if="key < 5" class="card container" style="height:85%;background-color: #ECF3FF">
                        <p v-if="data.kategori === 'Penipuan'">
                            <span style="padding-right: 10px; color: #000000"><i class="fa fa-circle"
                                                                                 aria-hidden="true"></i></span>{{data.nomor}}
                        </p>
                        <p v-else-if="data.kategori === 'Iklan/promosi'">
                            <span style="padding-right: 10px; color: #ECA336"><i class="fa fa-circle"
                                                                                 aria-hidden="true"></i></span>{{data.nomor}}
                        </p>
                        <p>{{data.isi}}</p>
                        <b><p align="end" @click="detail(data.nomor)"><span style="padding-right: 10px"><i
                                class="fa fa-bullhorn"></i></span>{{data.jumlah}} Laporan</p></b>
                    </div>
                </div>
                <div v-else>
                    <div v-if="key >= 5" class="card container" style="height:85%;background-color: #ECF3FF">
                        <p v-if="data.kategori === 'Penipuan'">
                            <span style="padding-right: 10px; color: #000000"><i class="fa fa-circle"
                                                                                 aria-hidden="true"></i></span>{{data.nomor}}
                        </p>
                        <p v-else-if="data.kategori === 'Iklan/promosi'">
                            <span style="padding-right: 10px; color: #ECA336"><i class="fa fa-circle"
                                                                                 aria-hidden="true"></i></span>{{data.nomor}}
                        </p>
                        <p>{{data.isi}}</p>
                        <b><p align="end" @click="detail(data.nomor)"><span style="padding-right: 10px"><i
                                class="fa fa-bullhorn"></i></span>{{data.jumlah}} Laporan</p></b>
                    </div>
                    <!--            <div class="col-md-12" v-if="position===1" v-for="data in trend2" :key="data.nomor">-->
                    <!--                <div class="card container" style="height:85%;background-color: #ECF3FF">-->
                    <!--                    <p v-if="data.kategori === 'Penipuan'">-->
                    <!--                        <span style="padding-right: 10px; color: #000000"><i class="fa fa-circle"-->
                    <!--                                                                             aria-hidden="true"></i></span>{{data.nomor}}-->
                    <!--                    </p>-->
                    <!--                    <p v-else-if="data.kategori === 'Iklan/promosi'">-->
                    <!--                        <span style="padding-right: 10px; color: #ECA336"><i class="fa fa-circle"-->
                    <!--                                                                             aria-hidden="true"></i></span>{{data.nomor}}-->
                    <!--                    </p>-->
                    <!--                    <p>{{data.isi}}</p>-->
                    <!--                    <b><p align="end" @click="detail(data.nomor)"><span style="padding-right: 10px"><i-->
                    <!--                            class="fa fa-bullhorn"></i></span>{{data.jumlah}} Laporan</p></b>-->
                    <!--                </div>-->
                    <!--            </div>-->


                    <div class="col-md-12 col-11 gita-container-sms" v-if="succes_load"
                         v-for="data in getAllTrendLimit5" :key="data.nomor" style="">
                        <div class="card container" style="height:85%;background-color: #ECF3FF;">
                            <p v-if="data.kategori === 'Penipuan'">
                        <span style="padding-right: 10px; color: #000000"><i class="fa fa-circle"
                                                                             aria-hidden="true"></i></span>{{data.nomor}}
                            </p>
                            <p v-else-if="data.kategori === 'Iklan/promosi'">
                        <span style="padding-right: 10px; color: #ECA336"><i class="fa fa-circle"
                                                                             aria-hidden="true"></i></span>{{data.nomor}}
                            </p>
                            <p>{{data.isi}}</p>
                            <p align="end" @click="detail(data.nomor)"><span style="padding-right: 10px"><i
                                    class="fa fa-bullhorn"></i></span>{{data.jumlah}} Laporan</p>
                            >>>>>>> 75c5e17fc8b63defe3a16f282b3ca14c3d3a0258
                        </div>
                    </div>


                    <div>
                        <b-modal id="bv-modal-example1" hide-footer>
                            <h3 align="center">{{selected}}</h3>
                            <hr>
                            <div class="d-block text-center" v-for="(data,index) in details" :key="index">
                                <p>{{data.isi}}</p>
                                <p align="end">{{data.tanggal}}</p>
                                <hr>
                            </div>
                        </b-modal>
                    </div>
                    <div class="container">
                        <div class="gita-tombol-tengah">
                            <div class="row">
                                <div class="col-md-auto col-auto" style="">
                                    <v-btn class="btn" style="box-shadow: 1px 1px grey" :disabled="pos === 1"
                                           @click="pos--">Sebelumnya
                                    </v-btn>
                                </div>
                                <div class="col-md-auto col-auto" style="">
                                    <v-btn class="btn" style="box-shadow: 1px 1px grey" :disabled="pos === pages"
                                           @click="pos++">Sesudah
                                    </v-btn>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!--            <div class="col-md-6">-->
                    <!--                <div class="card container" style="background-color: #F2EAEA">-->
                    <!--                    <p>0081239827</p>-->
                    <!--                    <p>Isi Pesan</p>-->
                    <!--                    <p><v-icon-->
                    <!--                            color="yellow"-->
                    <!--                            x-small-->
                    <!--                    ></v-icon>Laporan</p>-->
                    <!--                </div>-->
                    <!--            </div>-->

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TrendingSpam",
        mounted() {
            this.$http.get('/trending/findAll').then((res) => {
                var indikator = 0;
                const {data} = res.data;
                for (var i in data) {
                    this.trend.push({
                        'nomor': data[indikator].nomor,
                        'jumlah': data[indikator].jumlah,
                        'isi': data[indikator].isi,
                        'position': indikator,
                        'kategori': data[indikator].kategori
                    });
                    indikator++
                }
                this.pages = Math.ceil(this.trend.length / 5);
                this.succes_load = true;
            }).catch(() => {
            });
        },
        computed:
            {
                getAllTrendLimit5: function () {
                    var res = new Array();
                    var start = (this.pos * 5) - 5;
                    console.log(this.trend)
                    for (var i = start; i < start + 5 && this.trend.length > i; i++) {
                        console.log(this.trend[i])
                        res.push(this.trend[i])
                    }
                    return res;
                }
            }
        ,
        data() {
            return {
                trend: new Array(),
                trend2: [],
                position: 1,
                details: [],
                selected: '',
                pos: 1,
                pages: 1,
                succes_load: false
            }
        }
        ,
        methods: {
            detail(nomor) {
                this.selected = nomor;
                this.$http.get('/trending/' + nomor)
                    .then((data) => {
                        this.$bvModal.show('bv-modal-example1')
                        console.log(data.data.data)
                        this.details = data.data.data;
                    }).catch(() => {
                });
            }
        }
    }
</script>

<style scoped>
    @media only screen and (max-width: 600px) {
        .gita-judul-trending {
            font-size: 25px;
            margin-left: -20px;
            text-align: center;
        }

        .gita-container-sms {
            margin-left: 17px
        }

        .gita-tombol-tengah {
            margin-left: 42px;
        }
    }

    /* Small devices (portrait tablets and large phones, 600px and up) */
    @media only screen and (min-width: 600px) {
        .gita-judul-trending {
            font-size: 25px;
            margin-left: -4px;
            /*text-align: left;*/
        }

    }

    /* Medium devices (landscape tablets, 768px and up) */
    @media only screen and (min-width: 768px) {

    }

    /* Large devices (laptops/desktops, 992px and up) */
    @media only screen and (min-width: 992px) {
        .gita-judul-trending {
            font-size: 25px;
            margin-left: -2px;
            /*text-align: left;*/
        }

    }

    /* Extra large devices (large laptops and desktops, 1200px and up) */
    @media only screen and (min-width: 1200px) {

    }
</style>
