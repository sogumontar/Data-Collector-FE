<template>
  <div>
    <br>
    <v-data-table
            dense
            @click:row="show"
            :headers="headers"
            :items="desserts"
            :items-per-page="10"
            class="elevation-1"
    ></v-data-table>

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
              console.log(data.data.data);
              for(var i in data.data.data){
                this.desserts.push(data.data.data[i])
              }
            }).catch(() => {
    });
  },
  data() {
    return {
      headers: [
        // { text: 'Id', value: 'id' },
        { text: 'Nomor telepon', value: 'nomor' },
        // { text: 'Isi Pesan', value: 'isi' },
        { text: 'Jenis Provider', value: 'jenis_provider' },
        { text: 'Jumlah', value: 'jumlah' },
        { text: 'Kategori', value: 'kategori' },
        // { text: 'Nama Pengirim', value: 'nama_pengirim' },
        { text: 'Tanggal pengiriman', value: 'tanggal' },
      ],
      desserts: [],
      isi: '',
    }
  },
  methods:{
    show(val){
      this.isi = val.isi;
      this.$bvModal.show('bv-modal-example')
    }
  },
  components: {
  }
}
</script>
<style>
  .dataTables_wrapper .dataTables_paginate .paginate_button:hover {
    background: none;
    color: black!important;
    border-radius: 4px;
    border: 1px solid #828282;
  }

  .dataTables_wrapper .dataTables_paginate .paginate_button:active {
    background: none;
    color: black!important;
  }
</style>