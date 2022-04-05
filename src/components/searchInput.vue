<template>
  <div>
    <form
      role="search"
      :class="isResourceVisible ? 'active  isResourceVisible' : ''"
      class="search-form"
    >
      <input
        type="search"
        maxlength="32"
        v-model="searchValue"
        :placeholder="searchPlaceholder"
        class="search-input isResourceVisible"
        @focus="handlerFocus"
        @blur="handlerBlur"
      />
      <div
        @click.stop="handlerSearch"
        :class="isResourceVisible ? 'active-icon' : ''"
        class="search-icon-container"
      >
        <img
          src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/1e8ab9a22f0ddc36349f60b38900d0bd.svg"
          alt="搜索"
          class="search-icon"
        />
      </div>
      <div class="typehead" style="display: none">
        <div class="title"><span>搜索历史</span> <span class="clear"> 清空 </span></div>
        <div class="list">
          <div>1</div>
          <div>android http</div>
          <div>NDK dmg</div>
          <div>java学习路径</div>
          <div>docker自动化</div>
          <div>简历模版</div>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup>
import { computed, ref, defineEmits } from "vue";
const isResourceVisible = ref(false);
const searchValue = ref("");

const emit = defineEmits(["search"]);

const handlerFocus = () => {
  isResourceVisible.value = true;
  console.log("--handlerFocus--");
};

const searchPlaceholder = computed(() =>
  isResourceVisible.value ? "搜索文章/小册/标签/用户" : "探索稀土掘金"
);

const handlerBlur = () => {
  isResourceVisible.value = false;
  console.log("--handlerBlur--");
};

const handlerSearch = () => {
  console.log("--11--", searchValue.value);
  emit("search", searchValue.value);
};

defineExpose({
  isResourceVisible,
});
</script>

<style lang="less" scoped>
.search-form {
  width: 260px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #c2c8d1;
  border-radius: 4px;
  box-sizing: border-box;
  transition: width 0.8s;
  -moz-transition: width 0.8s; /* Firefox 4 */
  -webkit-transition: width 0.8s; /* Safari and Chrome */
  -o-transition: width 0.8s; /* Opera */
  .search-input {
    width: 216px;
    border: none;
    padding: 10px 12px;
    outline: none;
    box-sizing: border-box;
    border-radius: 4px;
    transition: width 1s;
    -moz-transition: width 1s; /* Firefox 4 */
    -webkit-transition: width 1s; /* Safari and Chrome */
    -o-transition: width 1s; /* Opera */
    &:focus {
      width: 316px;
      border: none;
    }
  }
  .search-icon-container {
    margin-right: 2px;
    width: 44px;
    height: 30px;
    background: #f2f3f5;
    border-radius: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .active-icon {
    background: #eaf2ff;
  }
}
.isResourceVisible {
  width: 360px;
}
.active {
  border: 1px solid #108eff;
}
</style>
