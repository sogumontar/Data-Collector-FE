<template>
    <div>
        <h3>TRENDING SMS SPAM</h3>
        <div class="row">
            <div class="col-md-6" v-for="data in trend" :key="data.nomor" >
                <div class="card container" style="background-color: #F2EAEA">
                    <p>{{data.nomor}}</p>
<!--                    <p>Isi Pe</p>-->
                    <p align="end">{{data.jumlah}} Laporan</p>
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
</template>

<script>
    export default {
        name: "TrendingSpam",
        mounted() {
            this.$http.get('/trending/findAll')
                .then((data) => {
                    console.log(data.data.data)
                    for (var i in data.data.data) {

                        this.trend.push({'nomor': data.data.data[i].nomor, 'jumlah':data.data.data[i].jumlah});
                    }
                    console.log(this.trend)
                }).catch(() => {
            });
        },
        data() {
            return {
                trend:[

                ]
            }
        }
    }
</script>

<style scoped>

</style>
