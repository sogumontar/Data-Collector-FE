<template>
    <div>
        <v-form v-model="valid">
            <v-container>
                <v-row>
                    <v-col
                            cols="12"
                            md="4"
                    >
                        <v-text-field
                                v-model="nomor"
                                :counter="13"
                                label="Nomor "
                                required
                        ></v-text-field>
                    </v-col>

                    <v-col
                            cols="12"
                            md="4"
                    >
                        <v-text-field
                                v-model="isi"
                                label="Isi"
                                required
                        ></v-text-field>
                    </v-col>

                    <v-col
                            cols="12"
                            md="4"
                    >
                        <v-select
                                v-model="select"
                                :items="providers"
                                :rules="[v => !!v || 'Item is required']"
                                label="Provider"
                                required
                        ></v-select>
                    </v-col>

                    <v-col
                            cols="12"
                            md="4"
                    >
                        <v-text-field
                                v-model="judul"
                                label="Judul"
                                required
                        ></v-text-field>
                    </v-col>

                    <v-col
                            cols="12"
                            md="4"
                    >
                        <v-text-field
                                type="number"
                                v-model="jumlah"
                                label="Jumlah"
                                min="0"
                                required
                        ></v-text-field>
                    </v-col>

                    <v-col
                            cols="12"
                            md="4"
                    >
                        <v-select
                                v-model="kategori_select"
                                :items="kategori"
                                :rules="[v => !!v || 'Item is required']"
                                label="Kategori"
                                required
                        ></v-select>
                    </v-col>

                    <v-col
                            cols="12"
                            md="4"
                    >
                        <v-text-field
                                v-model="nama_pengirim"
                                label="Nama Pengirim"
                                required
                        ></v-text-field>
                    </v-col>

                    <v-col
                            cols="12"
                            md="4"
                    >
                        <v-text-field
                                v-model="tanggal"
                                type="date"
                                label="Tanggal"
                                required
                        ></v-text-field>
                    </v-col>
                </v-row>
                <v-btn
                        color="#1976D2"
                        align="right"
                        style="color: white; alignment: right"
                        class="mr-4"
                        @click="submit"
                >
                    submit
                </v-btn>
            </v-container>
        </v-form>
    </div>
</template>

<script>
    export default {
        name: "FormSpam",
        data() {
            return {
                select:'',
                providers: [
                    'Telkomsel',
                    'XL Axiata ',
                    'AXIS',
                    'Indosat Ooredoo',
                    'smartfren',
                    '3',
                    'Net1 Indonesia',
                    'BOLT',
                ],
                valid: false,
                nomor: '',
                nama: '',
                isi: '',
                judul: '',
                jumlah: 0,
                kategori_select:'',
                kategori: [
                    'Finansial',
                    'Iklan',
                    'Kesehatan dan Obat-obatan',
                    'Gratisan',
                    'Kartu kredit',
                    'Edukasi',
                    'Tipuan negara',
                    'Berhubungan dengan TI',
                ],
                nama_pengirim: '',
                tanggal:'',
                nameRules: [
                    v => !!v || 'Name is required',
                    v => v.length <= 10 || 'Name must be less than 10 characters',
                ],
                email: '',
                emailRules: [
                    v => !!v || 'E-mail is required',
                    v => /.+@.+/.test(v) || 'E-mail must be valid',
                ],
            }
        },
        methods:{
            submit(){
                console.log(this.nomor)
                this.validate();
            },
            clear(){

            },
            validate(){
                if(!this.nomor || !this.isi || !this.select || !this.judul || this.jumlah==0 || !this.kategori_select
                    || !this.nama_pengirim || !this.tanggal){
                    alert('Semua Field Harus diisi');
                }else{
                    this.store();
                }
            },
            store(){
                this.$http.post('/store',{
                    "judul": this.judul,
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
                }).catch((e) => {
                    alert(e);
                });
            }
        }
    }
</script>

<style scoped>

</style>
