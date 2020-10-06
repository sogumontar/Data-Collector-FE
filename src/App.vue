<template>
  <v-app>
    <FormSpam/>
  </v-app>
</template>

<script>
import Home from "./views/Home";
import FormSpam from "./components/FormSpam";

export default {
  name: 'App',
  mounted() {
  },
  components: {
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
