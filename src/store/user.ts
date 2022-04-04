import { defineStore } from "pinia";
import  { StoreName} from "@/enums/storeEnum"
import { IUserStore } from "./type"

const useUserStore = defineStore(StoreName.User, {
    state: (): IUserStore => {
       return {
           user: {
               name: "huangsheng",
               password: "134",
               list: []
           },
           count: 1,
           list: []
       }
    },
    getters: {
    },
    actions: {
        setCount(count){
            this.count = count
        },
        setList(list){
            this.user.list = list
        }
    }
})

export default useUserStore;
