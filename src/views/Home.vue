<template>
    <div>
        <br>
        <div class="container">
            <TrendingSpam/>
        </div>
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
                <h5>Grafik provider penyebar spams</h5>
                <hr>
                <v-card id="chart">
                    <apexchart type="donut" :options="chartOptions" :series="series"/>
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
</template>

<script>
    import TrendingSpam from "../components/TrendingSpam";
    export default {
        name: 'Home',
        mounted() {
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
                        if (data.data.data[i].kategori === "Pesan Penipuan") {
                            telkomsel++;
                        } else if (data.data.data[i].jenis_provider === "Gift Card (Penipuan yang mengarahkan ke link tertentu)") {
                            xl++;
                        } else if (data.data.data[i].jenis_provider === "Iklan/promosi") {
                            axis++;
                        } else if (data.data.data[i].jenis_provider === "Banking (transaksi SMS banking)") {
                            indosat++;
                        } else if (data.data.data[i].jenis_provider === "Operator (Pesan yang langsung dari operator tertentu)") {
                            smartfren++;
                        } else if (data.data.data[i].jenis_provider === "Unknown (Pesan yang tidak mengganggu namun nomor pengirim tidak diketahui") {
                            tri++;
                        }
                        this.desserts.push(data.data.data[i])
                    }
                    this.series.push(indosat, xl, axis, telkomsel, smartfren, tri);
                }).catch(() => {
            });
        },
        data() {
            return {
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
                    labels: [
                        "Penipuan",
                        "Gift Card (Penipuan yang mengarahkan ke link tertentu)",
                        "Iklan/promosi",
                        "Banking (transaksi SMS banking)",
                        'Operator (Pesan yang langsung dari operator tertentu)',
                        'Unknown (Pesan yang tidak mengganggu namun nomor pengirim tidak diketahui'],
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
        },
        methods: {
            show(val) {
                this.isi = val.isi;
                this.$bvModal.show('bv-modal-example')
            }
        },
        components: {TrendingSpam}
    }
</script>
<style>
    .dataTables_wrapper .dataTables_paginate .paginate_button:hover {
        background: none;
        color: black !important;
        border-radius: 4px;
        border: 1px solid #828282;
    }

    .dataTables_wrapper .dataTables_paginate .paginate_button:active {
        background: none;
        color: black !important;
    }
</style>
