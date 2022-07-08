import { createStore } from "vuex";
import cleaning from "./modules/cleaning";

export default createStore({
    modules: {
        cleaning,
    },
});
