import { defineStore } from "pinia";
import { StoreName } from "@/enums/storeEnum"
import { IUIStore } from "./type"

const useUIStore = defineStore(StoreName.UI, {
  state: (): IUIStore => {
    return {
      categoryBriefs: []
    }
  },
  getters: {
  },
  actions: {
    async setCategoryBrief(categoryBriefs) {
      console.log("--setCategoryBrief--", categoryBriefs)
      this.categoryBriefs = categoryBriefs
    }
  }
})

export default useUIStore;
