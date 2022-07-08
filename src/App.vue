<template>
    <v-app>
        <Header class="header" />
        <router-view />
        <FooterСomponent />
    </v-app>
</template>
<script>
import Header from "./components/Header.vue";
import FooterСomponent from "./components/FooterComponent.vue";

export default {
    components: {
        Header,
        FooterСomponent,
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

.header {
    margin-bottom: 100px;
}

nav {
    padding: 30px;
}

nav a {
    font-weight: bold;
    color: #2c3e50;
}

nav a.router-link-exact-active {
    color: #42b983;
}
</style>
