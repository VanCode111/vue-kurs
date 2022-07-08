import axios from "axios";

export default {
    actions: {
        async fetchCleanings({ commit, dispatch }, { page, ordered }) {
            try {
                const res = await fetch(
                    `http://127.0.0.1:8000/api/cleanings/?page=${page}&ordering=${ordered}`
                );
                const cleanings = await res.json();

                dispatch("sayHello");
                commit("updateCleanings", cleanings.results);
            } catch (e) {
                console.log(e);
            }
        },
        async addCleaning({ commit, dispatch }, { price, title }) {
            console.log(title, price, commit, dispatch);
            try {
                const res = await axios.post(
                    `http://127.0.0.1:8000/api/cleanings/`,
                    {
                        title: title,
                        price: +price,
                        city: 1,
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
