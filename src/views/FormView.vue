<template>
    <div class="container">
        <v-form
            ref="form"
            v-model="valid"
            lazy-validation
            class="form"
            @submit.prevent="submit"
        >
            <v-text-field
                v-model="title"
                :counter="10"
                :rules="nameRules"
                label="Title"
                required
            ></v-text-field>

            <v-text-field
                v-model="price"
                :rules="priceRules"
                label="Price"
                required
            ></v-text-field>

            <v-select
                v-model="select"
                :items="items"
                :rules="[(v) => !!v || 'Item is required']"
                label="Item"
                required
            ></v-select>

            <v-btn
                :disabled="!valid"
                color="success"
                class="mr-4 w-100"
                type="submit"
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
        nameRules: [
            (v) => !!v || "Name is required",
            (v) =>
                (v && v.length <= 10) || "Name must be less than 10 characters",
        ],
        price: "",
        priceRules: [
            (v) => !!v || "Price is required",
            (v) => v > 0 || "Цена не может быть отрицательной",
        ],
        select: null,
        items: ["Item 1", "Item 2", "Item 3", "Item 4"],
        checkbox: false,
    }),

    methods: {
        validate() {
            this.$refs.form.validate();
        },
        reset() {
            this.$refs.form.reset();
        },
        resetValidation() {
            this.$refs.form.resetValidation();
        },
        ...mapActions(["addCleaning"]),

        submit() {
            console.log(this.price);
            this.addCleaning({ title: this.title, price: this.price });
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
