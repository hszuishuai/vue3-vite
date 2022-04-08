<template>
  <div id="recommend">
    <div class="view-content">
      <div class="article-list">
        <article-item
          v-for="(article, aIdx) in articleObj.articleList"
          :key="aIdx"
          :article="article"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { ArticleApi } from "@/api";
import { onBeforeMount, onMounted, reactive } from "vue";
import { ArticleItem, CategoryBrief } from "@/components";
import { useUIStore } from "@/store";

let articleObj = reactive({
  articleList: [],
});
const route = useRoute();
const router = useRouter();

const uiStore = useUIStore();

console.log("route.path", route.path);

onMounted(async () => {
  const { categoryBriefs } = uiStore;
  console.log("--1",uiStore, categoryBriefs);
  const categoryBrief = categoryBriefs.find((c) => route.path.includes(c.category_url));

  const briefId = categoryBrief?.category_id ?? undefined;

  const articleList = (await ArticleApi.getArticleList(briefId)) as [];
  articleObj.articleList = articleList.slice(0);

  console.log("--articleList--", articleObj);
});

const handlerRouter = (type) => {
  router.push({
    path: `/${route.params.id}/${type}`,
  });
};
</script>

<style scoped lang="less">
.view-content {
  //   max-width: 960px;
  width: 700px;
  //   margin: auto;
  background-color: #fff;
}
</style>
