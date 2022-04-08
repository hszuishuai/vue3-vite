<template>
  <div id="home">
    <!-- {{ isSearchFocus }} -->
    <category-brief />
    <div class="home-main">
      <!-- <div class=""></div> -->
      <router-view :key="route.path" />
      <home-sidebar :adverts="homeObject.adverts" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { ArticleApi } from "@/api";
import { onBeforeMount, onMounted, reactive, ref, computed, watch } from "vue";
import { ArticleItem, NavigationBar, CategoryBrief, HomeSidebar } from "@/components";
import { useUIStore } from "@/store";

interface SearchPros extends HTMLElement {
  isResourceVisible: Boolean;
}

let homeObject = reactive({
  adverts: [],
});
const search = ref<SearchPros | null>(null);
const route = useRoute();
const router = useRouter();

const uiStore = useUIStore();

const isSearchFocus = computed(() => search?.value?.isResourceVisible ?? false);

onBeforeMount(async () => {
  // console.log("--1");
  const categoryBriefs = (await ArticleApi.getCategoryBriefs()) as [];
  const adverts = (await ArticleApi.getAdverts()) as [];
  homeObject.adverts = adverts;
  uiStore.setCategoryBrief(categoryBriefs);
  // articleObj.articleList = articleList.slice(0);
  //   console.log("--articleList--", categoryBriefs);
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

<style scoped lang="less">
.home {
  &-main {
    max-width: 960px;
    margin: auto;
    display: flex;
    justify-content: space-between;
  }
}
</style>
