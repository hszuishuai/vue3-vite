<template>
  <div class="navigation">
    <!-- <div>导航页</div> -->
    <div class="navigation-container">
      <div class="logo">
        <img class="logo-img" src="/static/logo.svg" />
      </div>
      <nav class="nav">
        <ul class="nav-list">
          <li class="nav-item" v-for="(nav, idx) in navList" :key="idx">
            {{ nav.title }}
          </li>
        </ul>
        <div class="navigation-right">
          <div class="navigation-add">
            <SearchInput ref="search" />
            <el-button class="user-btn" v-show="!isSearchFocus">创作者中心</el-button>
          </div>
          <div class="navigation-button">
            <el-button class="login-btn">登录</el-button>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script setup lang="ts">
import { NAV_LIST } from "@/util/constant";
import { SearchInput } from "@/components";
import { ref, computed } from "vue";
const navList = Object.freeze(NAV_LIST);

interface SearchPros extends HTMLElement {
  isResourceVisible: Boolean;
}

const search = ref<SearchPros | null>(null);

const isSearchFocus = computed(() => search?.value?.isResourceVisible ?? false);
</script>

<style lang="less" scoped>
.navigation {
  position: relative;
  height: 60px;
  &-container {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 60px;
    background-color: #fff;
    border-bottom: 1px solid #f1f1f1;
    display: flex;
    align-items: center;
    .logo {
      margin-left: 20px;
      margin-right: 24px;
      &-img {
        display: block;
        height: 22px;
      }
    }
    .nav {
      display: flex;
      align-items: center;
      flex-grow: 1;
      justify-content: space-between;
      height: 100%;
      &-list {
        display: flex;
        align-items: center;
        height: 100%;
        cursor: pointer;
        .nav-item {
          position: relative;
          display: inline-block;
          margin: 0 20px;
          height: 100%;
          line-height: 60px;
          &:hover::before {
            content: "";
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            height: 2px;
            background: #007fff;
          }
        }
      }
      .navigation-right {
        display: flex;
        align-items: center;
        margin-left: 50px;
        justify-content: flex-end;
        .navigation-add {
          width: 420px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-right: 20px;
        }
        .navigation-button {
          display: flex;
          .login-btn {
            margin-right: 50px;
          }
        }
      }
    }
  }
}
</style>
