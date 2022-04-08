<template>
    <div>
        <div class="entry">
            <div class="meta-container">
                <div class="user-message">
                    <div class="popover-box user-popover">
                        {{ article.author_user_info.user_name }}
                    </div>
                </div>
                <div class="date">2月前</div>
                <div class="tag_list">
                    <!-- <a href="/tag/%E7%88%AC%E8%99%AB" target="_blank" rel="" class="tag"> 爬虫 </a><a href="/tag/TensorFlow" target="_blank" rel="" class="tag"> TensorFlow </a> -->
                </div>
            </div>
            <div class="content-wrapper">
                <div class="content-main">
                    <div class="title-row">
                        <div class="title">{{ article.article_info.title }}</div>
                    </div>
                    <div class="abstract">
                        <a href="/post/7054528738981052453" target="_blank" rel="">
                            <div>{{ article.article_info.brief_content }}</div>
                        </a>
                    </div>
                    <ul class="action-list jh-timeline-action-area">
                        <li class="item view">
                            <img src="@/assets/view.png" />
                            <span>{{ article.article_info.view_count }}</span>
                        </li>
                        <li class="item like">
                            <img src="@/assets/like.png" /><span> {{ article.article_info.digg_count }} </span>
                        </li>
                        <li class="item comment">
                            <img src="@/assets/comment.png" /> <span> {{ article.article_info.comment_count }} </span>
                        </li>
                    </ul>
                </div>
                <img v-if="article.article_info.cover_image" :alt="article.article_info.brief_content" class="lazy thumb" :src="article.article_info.cover_image" loading="lazy" />
            </div>
            <!-- <div class="dislike-button"></div> -->
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import API from "@/api/article/type";

type Props = {
    article: API.Datum;
};
defineProps<Props>();
</script>

<style lang="less" scoped>
a {
    color: #000000;
    text-decoration: none;
}
.entry {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 20px;
    box-sizing: border-box;
    border-top: 1px solid #eee;
    &:hover {
        background: #eee;
    }
    .meta-container {
        display: flex;
        font-size: 14px;
        // margin-bottom: 16px;
        .user-message {
            margin-right: 10px;
        }
    }
    .content-wrapper {
        width: 100%;
        display: flex;
        align-items: center;
        .content-main {
            display: flex;
            flex-direction: column;
            // flex-grow: 1;
            .title-row {
                font-size: 20px;
                font-weight: bold;
                line-height: 56px;
                text-align: left;
                display: -webkit-box;
                overflow: hidden;
                text-overflow: ellipsis;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 1;
            }
            .abstract {
                color: #86909c;
                font-size: 13px;
                line-height: 22px;
                display: -webkit-box;
                overflow: hidden;
                text-overflow: ellipsis;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 1;
            }
            .action-list {
                display: flex;
                align-items: center;
                margin-top: 10px;
                font-size: 14px;
                .item {
                    display: flex;
                    align-items: center;
                    margin-right: 60px;
                    img {
                        width: 20px;
                        height: 20px;
                        margin-right: 10px;
                    }
                }
            }
        }
        .thumb {
            flex: none;
            width: 120px;
            height: 80px;
            margin-left: 24px;
            background-color: #fff;
            border-radius: 2px;
        }
    }
}
</style>
