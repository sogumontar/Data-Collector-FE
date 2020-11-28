<template>
  <div>
    <br>
    <v-data-table
            :headers="headers"
            :items="desserts"
            :page.sync="page"
            :items-per-page="itemsPerPage"
            class="elevation-1"
            @page-count="pageCount = $event"
    ></v-data-table>
          <div class="text-center pt-2">
            <v-pagination
                    v-model="page"
                    :length="pageCount"
            ></v-pagination>
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
      page: 1,
      pageCount: 0,
      itemsPerPage: 5,
      headers: [
        { text: 'Id', value: 'id' },
        { text: 'Nomor', value: 'nomor' },
        { text: 'Isi Pesan', value: 'isi' },
        { text: 'Jenis Provider', value: 'jenis_provider' },
        { text: 'Jumlah', value: 'jumlah' },
        { text: 'Kategori', value: 'kategori' },
        // { text: 'Nama Pengirim', value: 'nama_pengirim' },
        { text: 'Tanggal', value: 'tanggal' },
      ],desserts: [],
    }
  },
  components: {
  }
}
</script>
