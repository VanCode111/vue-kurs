<template>
    <div>
        <v-app-bar color="deep-purple accent-4" dark>
            <v-btn to="/"> Объявления </v-btn>

            <v-btn to="/addCleaning"> Добавить объявление </v-btn>
            <v-spacer></v-spacer>

            <v-menu left bottom> </v-menu>
        </v-app-bar>
    </div>
</template>

<script>
export default {
    name: "HelloWorld",
    data() {
        return {
            dark: true,
        };
    },
    props: {
        msg: String,
    },
    methods: {
        changeTheme(e) {
            console.log(e);
        },
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
