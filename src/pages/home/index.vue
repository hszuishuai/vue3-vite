<template>
  <div id="home">
    <!-- {{ isSearchFocus }} -->
    <router-view :key="route.path" />
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { ArticleApi } from "@/api";
import { onBeforeMount, onMounted, reactive, ref, computed, watch,  } from "vue";
import { ArticleItem, NavigationBar, SearchInput } from "@/components";
import { useUIStore } from "@/store";

interface SearchPros extends HTMLElement {
    isResourceVisible: Boolean
}


let articleObj = reactive({
  articleList: [],
});
const search = ref<SearchPros| null>(null);
const route = useRoute();
const router = useRouter();

const uiStore = useUIStore();

const isSearchFocus = computed(() => search?.value?.isResourceVisible ?? false);

onBeforeMount(async () => {
  // console.log("--1");
  const categoryBriefs = (await ArticleApi.getCategoryBriefs()) as [];
  uiStore.setCategoryBrief(categoryBriefs);
  // articleObj.articleList = articleList.slice(0);
  console.log("--articleList--", categoryBriefs);
});

const handlerRouter = (type) => {
  router.push({
    path: `/${type}`,
  });
};

console.log("--router--", route.path);

const handlerSearch = (searchValue) => {
  console.log("--searchValue--", searchValue);
};

// watch(router, (newValue, oldValue) => {
//   console.log("newValue", newValue);
//   console.log("oldValue", oldValue);
// });
</script>

<style scoped></style>
