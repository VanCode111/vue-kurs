import axios from "axios";

export default {
    actions: {
        async fetchCleanings(
            { commit, dispatch },
            { page, ordered, city = "" }
        ) {
            try {
                const res = await fetch(
                    `http://127.0.0.1:8000/api/cleanings/?page=${page}&ordering=${ordered}&city=${city}`
                );
                const cleanings = await res.json();

                dispatch("sayHello");
                commit("updateCleanings", cleanings.results);
            } catch (e) {
                console.log(e);
            }
        },
        async addCleaning({ commit, dispatch }, { price, title, city }) {
            console.log(title, price, commit, dispatch);
            try {
                const res = await axios.post(
                    `http://127.0.0.1:8000/api/cleanings/`,
                    {
                        title: title,
                        price: +price,
                        city,
                    }
                );
                console.log(res);
            } catch (e) {
                console.log(e);
            }
        },
        sayHello() {},
    },
    mutations: {
        updateCleanings(state, cleanings) {
            state.cleanings = cleanings;
        },
        createCleaning(state, newCleaning) {
            state.cleanings.unshift(newCleaning);
        },
    },
    state: {
        cleanings: [],
    },
    getters: {
        allCleanings(state) {
            return state.cleanings;
        },
    },
};
