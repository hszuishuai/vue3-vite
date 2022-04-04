import { request } from "@/util/request";
import { API_CONFIG } from "@/enums/configEnum";
import API from "./type"

const ARTICLE_CONFIG = {
    limit: 20,
    cursor: "0",
    sort_type: 200,
    id_type: 2,
    client_type: 2608
}

async function getArticleList(cate_id: string | undefined) {
    const articleList = await request<Array<API.RecommendArticle>>({
        method: "POST",
        data: {
            cate_id,
            ...ARTICLE_CONFIG
        },
        url: "/recommend_api/v1/article/recommend_all_feed",
        params: {
            aid: API_CONFIG.AID,
            uuid: API_CONFIG.UUID,
        },
    });
    return articleList.reduce((_: Array<any>, article) => {
        article.item_type === 2 ? _.push(article.item_info) : false;
        return _;
    }, [])
}

async function getCategoryBriefs() {
    const categoryBriefs = await request<Array<API.ICategoryBriefs>>({
        method: "GET",
        url: "/tag_api/v1/query_category_briefs",
        params: {
            aid: API_CONFIG.AID,
            uuid: API_CONFIG.UUID,
        },
    });

    console.log("--categoryBriefs--", categoryBriefs);
    return categoryBriefs;
}

export default {
    getArticleList,
    getCategoryBriefs
}
