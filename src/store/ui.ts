import { defineStore } from "pinia";
import { StoreName } from "@/enums/storeEnum"
import { IUIStore } from "./type"

const useUIStore = defineStore(StoreName.UI, {
  state: (): IUIStore => {
    return {
      menus: {
        categoryBriefs: []
      }

    }
  },
  getters: {
  },
  actions: {
    async setCategoryBrief(categoryBriefs) {
      console.log("--setCategoryBrief--", categoryBriefs)
      this.menus.categoryBriefs = categoryBriefs
    }
  }
})

export default useUIStore;
