<template>
  <nav class="view-nav">
    <div class="view-nav-main">
      <ul class="nav-list">
        <li class="nav-item" v-for="(brief, bIdx) in uiStore.menus.categoryBriefs" :key="bIdx">
          <router-link
            class="nav-link"
            active-class="active-link"
            :to="'/' + brief.category_url"
            >{{ brief.category_name }}</router-link
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { useUIStore } from "@/store";
import { watch } from "vue";

const uiStore = useUIStore();

// watch(categoryBriefs, (newValue, oldValue)=> {
//   console.log(newValue , "newValue")
// });
</script>

<style lang="less" scoped>
.view-nav {
  // position: fixed;
  // top: ;
  width: 100%;
  height: 50px;
  background-color: #fff;
  &-main {
    max-width: 960px;
    margin: auto;
    display: flex;
    align-items: center;
    height: 100%;
    .nav-list {
      display: flex;
      align-items: center;
      .nav-item {
        cursor: pointer;
        padding-right: 20px;
        .active-link {
          color: #007fff !important;
        }
        .nav-link {
          color: #717171;
          text-decoration: none;
          &:hover {
            color: #007fff;
          }
        }
      }
    }
  }
}
</style>
