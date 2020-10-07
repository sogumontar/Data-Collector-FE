<template>
  <v-app>
    <HomePage/>
  </v-app>
</template>

<script>
import Home from "./views/Home";
import FormSpam from "./components/FormSpam";
import HomePage from "./views/HomePage";

export default {
  name: 'App',
  mounted() {
  },
  components: {
    HomePage,
    FormSpam,
    Home,
  },
  data(){
    return {
     login:false
    }
  },
};
</script>
