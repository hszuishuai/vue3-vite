import { createPinia } from "pinia";
const store = createPinia();

export { default as useUserStore } from "./user";
export { default as useUIStore } from "./ui";


export default store;
