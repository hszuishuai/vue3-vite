import { User } from "@/api/type";
import { ICategoryBriefs } from "@/api/article/type"

export type IUserStore = {
    user: User,
    count: number,
    list: Array<any>
}

export type IUIStore = {
    categoryBriefs: Array<ICategoryBriefs>
}
