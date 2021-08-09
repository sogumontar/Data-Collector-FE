<template>
    <div>
        <p style="font-weight: bolder" class="gita-judul-trending">REQUEST LAPORAN SMS</p>
        <div class="row">
            <div class="col-md-12 col-11 gita-container-sms" v-if="succes_load" v-for="data in getAllTrendLimit5"
                 :key="data.nomor" style="">
                <div class="card container" style="height:100%;background-color: #ECF3FF;">
                    <p v-if="data.kategori === 'Penipuan'">
                        <v-row>
                            <v-col>
                                <span style="padding-right: 10px; color: #000000"><i class="fa fa-circle" aria-hidden="true"></i></span>{{data.nomor}}
                            </v-col>

                            <v-col align="right">
                                <span style="alignment: right"><i class="fa fa-envelope" aria-hidden="true"></i></span>{{data.email}}
                            </v-col>
                        </v-row>
                    </p>
                    <p v-else-if="data.kategori === 'Iklan/promosi'">
                        <v-row>
                            <v-col>
                                <span style="padding-right: 10px; color: #ECA336"><i class="fa fa-circle"
                                                                                     aria-hidden="true"></i></span>{{data.nomor}}
                            </v-col>
                            <v-col align="right">
                                <span style="alignment: right"><i class="fa fa-envelope" aria-hidden="true"></i></span>{{data.email}}
                            </v-col>
                        </v-row>
                    </p>
                    <p>{{data.isi}}</p>
                    <v-row style="alignment: right" align="right">
                        <v-col cols="12"  align="right">
                            <v-btn color="#2CA1D3" style="color: white; " width="75px" class="mr-4"
                                   @click="approve(data.id)"
                            >
                                <b>TERIMA</b>
                            </v-btn>
                            <v-btn color="#ffffff" style="color: #2CA1D3; " width="75px" class="mr-4"
                                   @click="reject(data.id)"
                            >
                                <b>TOLAK</b>
                            </v-btn>
                        </v-col>
                    </v-row>
                </div>
            </div>

            <div class="container">
                <div class="gita-tombol-tengah">
                    <div class="row">
                        <div class="col-md-auto col-auto" style="">
                            <v-btn class="btn" style="box-shadow: 1px 1px grey" :disabled="pos === 1" @click="pos--">
                                Sebelumnya
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


        </div>
    </div>
</template>

<script>
    export default {
        name: "Admin",
        mounted() {
            this.getData();
        },
        computed: {
            getAllTrendLimit5: function () {
                var res = new Array();
                var start = (this.pos * 5) - 5;
                for (var i = start; i < start + 5 && this.trend.length > i; i++) {
                    res.push(this.trend[i])
                }
                return res;
            }
        },
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
        },
        methods: {
            getData() {
                this.trend = [];
                this.$http.get('/admin/findAll')
                    .then((res) => {
                        var indikator = 0;
                        const {data} = res.data;
                        for (var i in data) {
                            // if (indikator < data.length / 2) {
                            this.trend.push({
                                'id': data[indikator].id,
                                'nomor': data[indikator].nomor,
                                'jumlah': data[indikator].jumlah,
                                'isi': data[indikator].isi,
                                'position': indikator,
                                'email':data[indikator].nama_pengirim,
                                'kategori': data[indikator].kategori
                            });
                            indikator++
                        }
                        this.pages = Math.ceil(this.trend.length / 5);
                        this.succes_load = true;
                    }).catch(() => {
                });
            },
            reject(id) {
                this.$http.put('/admin/approval/' + id, {
                    "status": 0
                })
                    .then((res) => {
                        this.getData();
                    })
            },
            approve(id) {
                this.$http.put('/admin/approval/' + id, {
                    "status": 2
                })
                    .then((res) => {
                        this.getData();
                    })
            }
        }
    }
</script>

<style scoped>

</style>