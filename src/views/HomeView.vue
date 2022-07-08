<template>
    <div class="home">
        <div class="container">
            <v-select
                v-model="sort"
                :items="items"
                label="Сортировка"
            ></v-select>
            <v-select
                v-model="city"
                :items="cities"
                label="Фильтрация"
            ></v-select>
            <div class="home__card" v-for="item in allCleanings" :key="item.id">
                <CleaningCard
                    :title="item.title"
                    :price="item.price"
                    :city="item.city"
                ></CleaningCard>
            </div>
            <div class="text-center">
                <v-pagination v-model="page" :length="6"></v-pagination>
            </div>
        </div>
    </div>
</template>

<script>
import CleaningCard from "../components/CleaningCard.vue";
import { mapGetters, mapActions } from "vuex";
export default {
    name: "HomeView",
    data() {
        return {
            page: 1,
            sort: "",
            items: ["Цена (по убыванию)", "Цена (по возрастанию)"],
            cities: ["Москва", "Калининград"],
            ordered: "",
            city: "",
            cityCode: "",
        };
    },

    components: {
        CleaningCard,
    },
    methods: {
        ...mapActions(["fetchCleanings"]),
    },
    computed: {
        ...mapGetters(["allCleanings"]),
    },
    async mounted() {
        this.fetchCleanings({ page: this.page, ordered: this.sort });
    },
    watch: {
        sort() {
            let ordered = "";
            if (this.sort === "Цена (по убыванию)") {
                ordered = "-price";
            } else if (this.sort === "Цена (по возрастанию)") {
                ordered = "price";
            }
            this.ordered = ordered;
            this.fetchCleanings({
                page: this.page,
                ordered,
                city: this.cityCode,
            });
        },
        page() {
            this.fetchCleanings({
                page: this.page,
                ordered: this.ordered,
                city: this.cityCode,
            });
        },
        city() {
            let city = "";
            if (this.city === "Москва") {
                city = 1;
            } else {
                city = 2;
            }
            this.cityCode = city;
            this.fetchCleanings({
                page: this.page,
                ordered: this.ordered,
                city: this.cityCode,
            });
        },
    },
};
</script>

<style scoped lang="scss">
.home {
    &__card {
        margin-bottom: 20px;
    }
}

.container {
    margin: 0 auto;
    max-width: 1000px;
    padding: 0 20px;
}
</style>
