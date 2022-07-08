<template>
    <div class="container">
        <v-form ref="form" v-model="valid" lazy-validation class="form">
            <v-text-field
                v-model="title"
                :rules="nameRules"
                label="Название услуги"
                required
            ></v-text-field>

            <v-text-field
                v-model="price"
                :rules="priceRules"
                label="Цена"
                required
            ></v-text-field>

            <v-select
                v-model="city"
                :items="items"
                :rules="[(v) => !!v || 'City is required']"
                label="Город"
                required
            ></v-select>

            <v-btn
                :disabled="!valid"
                color="success"
                class="mr-4 w-100"
                @click="submit"
            >
                Добавить
            </v-btn>
        </v-form>
    </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
    data: () => ({
        valid: true,
        title: "",
        nameRules: [(v) => !!v || "Name is required"],
        price: "",
        priceRules: [
            (v) => !!v || "Price is required",
            (v) => v > 0 || "Цена не может быть отрицательной",
        ],
        city: null,
        items: ["Москва", "Калининград"],
        checkbox: false,
    }),

    methods: {
        ...mapActions(["addCleaning"]),

        submit() {
            let city = "";
            if (this.city === "Москва") {
                city = 1;
            } else {
                city = 2;
            }

            this.addCleaning({ title: this.title, price: this.price, city });
            this.$refs.form.reset();
        },
    },
};
</script>

<style>
.container {
    margin: 0 auto;
    max-width: 1200px;
}
.form {
    width: 500px;
}
</style>
