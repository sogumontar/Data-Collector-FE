<template>
    <v-app style="">
        <HomePage/>
    </v-app>
</template>

<script>
    import Home from "./views/Home";
    import FormSpam from "./components/FormSpam";
    import HomePage from "./views/HomePage";
    import After from "./views/After";
    import Footer from "./components/Footer";

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
        data() {
            return {
                login: false
            }
        },
    };
</script>
