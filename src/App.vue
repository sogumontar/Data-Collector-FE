<template>
  <v-app>
    <HomePage/>
  </v-app>
</template>

<script>
import Home from "./views/Home";
import FormSpam from "./components/FormSpam";
import HomePage from "./views/HomePage";
import After from "./views/After";

export default {
  name: 'App',
  mounted() {
  },
  components: {
    HomePage,
    FormSpam,
    Home,
    After
  },
  data(){
    return {
     login:false
    }
  },
};
</script>
