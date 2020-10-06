<template>
  <div>
    <br>
    <v-data-table
            :headers="headers"
            :items="desserts"
            :items-per-page="5"
            class="elevation-1"
    ></v-data-table>
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
        { text: 'Id', value: 'id' },
        { text: 'Nomor', value: 'nomor' },
        { text: 'Isi', value: 'isi' },
        { text: 'Provider', value: 'jenis_provider' },
        { text: 'Judul', value: 'judul' },
        { text: 'Jumlah', value: 'jumlah' },
        { text: 'Kategori', value: 'kategori' },
        { text: 'Nama Pengirim', value: 'nama_pengirim' },
        { text: 'Tanggal', value: 'tanggal' },
      ],desserts: [],
    }
  },
  components: {
  }
}
</script>
