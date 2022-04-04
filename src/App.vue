<template>
    <NavigationBar/>
    <router-view></router-view>
</template>

<script setup lang="ts">
import { NavigationBar } from "@/components"
import { useUserStore } from "@/store";
import { IUserStore } from "@/store/type";
import { reactive, watch, ref, onBeforeMount } from "vue";
import { request } from "@/util/request";
import useStore from "element-plus/es/components/table/src/store";

const userStore = useUserStore();

const delay = ()=> {
    return new Promise((resolve, reject)=> {
        setTimeout(()=> {
            resolve(true)
        }, 2000)
    })
}

const data = reactive({
    name: "huangsheng",
    sex: "男",
});

interface User {
    name: String;
    password: String;
}

onBeforeMount(async () => {
    console.log("onBeforeMount");
    // console.log("--data--", ret);
    await delay();
    change();
    console.log("123")
});

const change = () => {
    // userStore.$patch((state: IUserStore) => {
    //     state.count = state.count + 2;
    // });

    userStore.setCount(100);
    userStore.setList(["1", 2])
};

watch(data, (newValue, oldValue) => {
    console.log("newValue", newValue);
    console.log("oldValue", oldValue);
});

// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    background-color: #f5f4f4;

}
</style>
