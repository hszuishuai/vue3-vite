<template>
  <div class="sidebar-block banner-block">
    <div class="banner">
      <a :href="advert.url" target="_blank"
        ><img :src="advert.picture" width="240" height="200" class="banner-image"
      /></a>
      <div class="ctrl-box">
        <a
          class="label"
          href="https://bd.juejin.cn?utm_campaign=bd&amp;utm_source=web&amp;utm_medium=banner"
          target="_blank"
          ><span class="inco">投放</span> <span>广告</span></a
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import API from "@/api/article/type";

type Props = {
  advert: API.IAdvert;
};
defineProps<Props>();
</script>

<style scoped lang="less">
.banner {
  position: relative;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 5%);
  border-radius: 2px;
  .ctrl-box {
    position: absolute;
    bottom: 10px;
    right: 10px;
    font-size: 20px;
    line-height: 36px;
    height: 36px;
    z-index: 1;
    transform: scale(0.5);
    -webkit-transform: scale(0.5);
    transform-origin: right bottom;
    -webkit-transform-origin: right bottom;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.2);
    border: 1px solid #fff;
    border-radius: 6px;
    padding-left: 15px;
    padding-right: 15px;
    font-weight: 300;
    .label:hover {
      .inco {
        display: inline-block;
      }
    }
    .label {
      color: #fff;
      text-decoration: none;
      .inco {
        display: none;
      }
    }
  }
}
</style>
