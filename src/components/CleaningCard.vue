<template>
    <v-card class="mx-auto card">
        <v-card-text>
            <v-row class="d-flex justify-space-between align-center"
                ><p class="text-h4 text--primary">
                    {{ title }}
                </p>
                <p class="card__price">Цена: {{ price }} ₽</p></v-row
            >

            <p class="card__text">Город: {{ city.name }}</p>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    props: {
        title: String,
        price: String,
        city: String,
    },
};
</script>

<style lang="scss" scoped>
.card {
    padding: 10px;
    &__text {
        margin: 0;
        text-align: left;
        margin-top: 30px;
        margin-left: -15px;
        font-size: 18px;
    }
    &__price {
        font-size: 18px;
    }
}
</style>
