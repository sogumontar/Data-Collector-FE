<template>
    <div class="container">
        <v-form v-model="valid">
                <v-row>
                    <v-col cols="12" md="12">
                        <v-text-field
                                type="number"
                                v-model="nomor"
                                :counter="13"
                                label="Nomor Pengirim Pesan"
                                required>
                        </v-text-field>
                    </v-col>
                    <v-col cols="12" md="12">
                        <v-text-field
                                v-model="isi"
                                label="Isi Pesan"
                                required>
                        </v-text-field>
                    </v-col>
                    <v-col cols="12" md="4">
                        <v-text-field
                                type="number"
                                v-model="jumlah"
                                label="Jumlah"
                                min="1"
                                required>
                        </v-text-field>
                    </v-col>
                    <v-col cols="12" md="4">
                        <v-select
                                v-model="kategori_select"
                                :items="kategori"
                                :rules="[v => !!v || 'Item is required']"
                                label="Kategori Pesan"
                                required>
                        </v-select>
                    </v-col>
                    <v-col cols="12" md="4">
                        <v-text-field
                                id = "tanggal"
                                v-model="tanggal"
                                type="date"
                                label="Tanggal Pesan Diterima"
                                required>
                        </v-text-field>
                    </v-col>
                </v-row>
                <v-btn color="#1F4068" align="end" style="color: white; alignment: right" class="mr-4" @click="submit">
                    submit
                </v-btn>
        </v-form>
    </div>
</template>

<script>
    export default {
        name: "FormSpam",
        data() {
            return {
                select: '',
                valid: false,
                nomor: '',
                nama: '',
                isi: '',
                judul: '',
                jumlah: 1,
                kategori_select: '',
                kategori: [
                    'Penipuan',
                    'Gift Card (Penipuan yang mengarahkan ke link tertentu)',
                    'Iklan/promosi',
                    'Banking (transaksi SMS banking)',
                    'Operator (Pesan yang langsung dari operator tertentu)',
                    'Unknown (Pesan yang tidak mengganggu namun nomor pengirim ' +
                    'tidak diketahui)'
                ],
                nama_pengirim: '--',
                tanggal: '',
                nameRules: [
                    v => !!v || 'Name is required',
                    v => v.length <= 10 ||
                        'Name must be less than 10 characters',
                ],
                email: '',
                emailRules: [
                    v => !!v || 'E-mail is required',
                    v => /.+@.+/.test(v) || 'E-mail must be valid',
                ],
            }
        },
        methods: {
            submit() {
                this.validate();
            },
            validate() {
                let today = new Date().toISOString().slice(0, 10)
                var now = Date.parse(today);
                var picked = Date.parse(this.tanggal);
                var n = new Date().getDate();
                var m = new Date().getMonth() + 1;
                var y = new Date().getFullYear();
                var dateNow = `${y}-${m}-${n>10?n:`0${n}`}`;
                if (
                    !this.nomor || !this.isi ||
                    !this.kategori_select ||
                    !this.tanggal
                ) {
                    alert('Semua Field Harus diisi');
                } else if(now < picked){
                    alert("Tidak boleh lewat dari tanggal sekarang")
                } else {
                    this.store();
                }
            },
            store(){
                this.$http.post('/store',{
                    "judul": "--",
                    "tanggal": this.tanggal,
                    "isi": this.isi,
                    "nomor": this.nomor,
                    "kategori": this.kategori_select,
                    "id_pengirim": "1",
                    "nama_pengirim": this.nama_pengirim,
                    "jenis_provider": this.select,
                    "jumlah": this.jumlah
                    }
                ).then(data => {
                    alert('Store Data Sukses')
                    window.location.href = "/";
                }).catch((e) => {
                    alert(e);
                });
            }
        }
    }
</script>

<style scoped>

</style>
