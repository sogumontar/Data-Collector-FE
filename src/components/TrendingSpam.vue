<template>
    <div>
        <h3>TRENDING SMS SPAM</h3>
        <div class="row">
            <div class="col-md-6" v-for="data in trend" :key="data.nomor" >
                <div class="card container" style="background-color: #F2EAEA">
                    <p>{{data.nomor}}</p>
<!--                    <p>Isi Pe</p>-->
                    <p align="end" @click="detail(data.nomor)">{{data.jumlah}} Laporan</p>
                </div>
            </div>
            <div>
                <b-modal id="bv-modal-example1" hide-footer>
                    <h3 align="center">{{selected}}</h3>
                    <hr>
                    <br><br>
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
                        this.trend.push({'nomor': data.data.data[i].nomor, 'jumlah':data.data.data[i].jumlah});
                    }
                }).catch(() => {
            });
        },
        data() {
            return {
                trend:[],
                details:[],
                selected:''
            }
        },
        methods:{
            detail(nomor){
                this.selected=nomor;
                this.$http.get('/trending/'+nomor)
                    .then((data) => {
                        this.$bvModal.show('bv-modal-example1')
                        console.log(data.data.data)
                        this.details= data.data.data;
                    }).catch(() => {
                });
            }
        }
    }
</script>

<style scoped>

</style>
