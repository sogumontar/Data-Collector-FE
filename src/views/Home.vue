<template>
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
                    <apexchart type="donut" :options="chartOptions" :series="series"></apexchart>
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
        },
        methods: {
            show(val) {
                this.isi = val.isi;
                this.$bvModal.show('bv-modal-example')
            }
        },
        components: {}
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
