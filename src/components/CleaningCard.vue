<template>
    <v-card class="mx-auto">
        <v-card-text>
            <p class="text-h4 text--primary">{{ title }}</p>
            <p>{{ price }}</p>
            <!-- <div class="text--primary">
                relating to or dependent on charity; charitable.<br />
                "an eleemosynary educational institution."
            </div> -->
        </v-card-text>
        <v-card-actions>
            <v-btn text color="teal accent-4" @click="reveal = true">
                Подробнее
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
    props: {
        title: String,
        price: String,
    },
};
</script>

<style></style>
