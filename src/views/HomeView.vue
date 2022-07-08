<template>
    <div class="home">
        <v-container fluid>
            <v-select v-model="sort" :items="items" label="Select"></v-select>
            <div class="home__card" v-for="item in allCleanings" :key="item.id">
                <CleaningCard
                    :title="item.title"
                    :price="item.price"
                ></CleaningCard>
            </div>
            <div class="text-center">
                <v-pagination v-model="page" :length="6"></v-pagination>
            </div>
        </v-container>
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
            ordered: "",
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
            this.fetchCleanings({ page: this.page, ordered });
        },
        page() {
            this.fetchCleanings({ page: this.page, ordered: this.ordered });
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
</style>
