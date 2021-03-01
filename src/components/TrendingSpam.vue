<template>
    <div>
        <h3 style="font-weight: bolder">TRENDING SMS SPAM</h3>
        <div class="row">
            <div class="col-md-12" v-for="data in trend" :key="data.nomor">
                <div class="card container" style="height:85%;background-color: #F2EAEA">
                    <p>
                        <span style="padding-right: 10px; color: orange" ><i class="fa fa-circle" aria-hidden="true"></i></span>{{data.nomor}}</p>
                    <p>{{data.isi}}</p>
                    <p align="end" @click="detail(data.nomor)">{{data.jumlah}} Laporan</p>
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
</template>

<script>
    export default {
        name: "TrendingSpam",
        mounted() {
            this.$http.get('/trending/findAll')
                .then((data) => {
                    for (var i in data.data.data) {
                        if (i < data.data.data.length / 2) {
                            this.trend.push({
                                'nomor': data.data.data[i].nomor,
                                'jumlah': data.data.data[i].jumlah,
                                'isi': data.data.data[i].isi,
                                'position': i
                            });
                        } else {
                            this.trend2.push({
                                'nomor': data.data.data[i].nomor,
                                'jumlah': data.data.data[i].jumlah,
                                'isi': data.data.data[i].isi,
                                'position': i
                            });
                        }
                    }
                }).catch(() => {
            });
        },
        data() {
            return {
                trend: [],
                trend2: [],
                details: [],
                selected: ''
            }
        },
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

</style>
