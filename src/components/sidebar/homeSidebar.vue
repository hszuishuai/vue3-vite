<template>
  <div class="sidebar">
    <div class="banner" v-for="(advert, idx) in adverts" :key="idx">
      <advert-item :advert="advert" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { AdvertItem } from "@/components";
import API from "@/api/article/type";

type Props = {
  adverts: Array<API.IAdvert | null>;
};
defineProps<Props>();
</script>

<style scoped lang="less">
.sidebar {
  flex: none;
  .banner{
    margin-bottom: 20px;
  }
}
</style>
