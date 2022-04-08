

export interface ArticleInfo {
    article_id: string;
    user_id: string;
    category_id: string;
    tag_ids: any[];
    visible_level: number;
    link_url: string;
    cover_image: string;
    is_gfw: number;
    title: string;
    brief_content: string;
    is_english: number;
    is_original: number;
    user_index: number;
    original_type: number;
    original_author: string;
    content: string;
    ctime: string;
    mtime: string;
    rtime: string;
    draft_id: string;
    view_count: number;
    collect_count: number;
    digg_count: number;
    comment_count: number;
    hot_index: number;
    is_hot: number;
    rank_index: number;
    status: number;
    verify_status: number;
    audit_status: number;
    mark_content: string;
    display_count: number;
}

export interface University {
    university_id: string;
    name: string;
    logo: string;
}

export interface Major {
    major_id: string;
    parent_id: string;
    name: string;
}

export interface ExtraMap {
}

export interface AuthorUserInfo {
    user_id: string;
    user_name: string;
    company: string;
    job_title: string;
    avatar_large: string;
    level: number;
    description: string;
    followee_count: number;
    follower_count: number;
    post_article_count: number;
    digg_article_count: number;
    got_digg_count: number;
    got_view_count: number;
    post_shortmsg_count: number;
    digg_shortmsg_count: number;
    isfollowed: boolean;
    favorable_author: number;
    power: number;
    study_point: number;
    university: University;
    major: Major;
    student_status: number;
    select_event_count: number;
    select_online_course_count: number;
    identity: number;
    is_select_annual: boolean;
    select_annual_rank: number;
    annual_list_type: number;
    extraMap: ExtraMap;
    is_logout: number;
    annual_info: any[];
}

export interface Category {
    category_id: string;
    category_name: string;
    category_url: string;
    rank: number;
    back_ground: string;
    icon: string;
    ctime: number;
    mtime: number;
    show_type: number;
    item_type: number;
    promote_tag_cap: number;
    promote_priority: number;
}

export interface Tag {
    id: number;
    tag_id: string;
    tag_name: string;
    color: string;
    icon: string;
    back_ground: string;
    show_navi: number;
    ctime: number;
    mtime: number;
    id_type: number;
    tag_alias: string;
    post_article_count: number;
    concern_user_count: number;
}

export interface UserInteract {
    id: number;
    omitempty: number;
    user_id: number;
    is_digg: boolean;
    is_follow: boolean;
    is_collect: boolean;
}

export interface Org {
    org_info?: any;
    org_user?: any;
    is_followed: boolean;
}

export interface Status {
    push_status: number;
}

export interface Datum {
    article_id: string;
    article_info: ArticleInfo;
    author_user_info: AuthorUserInfo;
    category: Category;
    tags: Tag[];
    user_interact: UserInteract;
    org: Org;
    req_id: string;
    status: Status;
    author_interact?: any;
}

export interface ArticleResponse {
    err_no: number;
    err_msg: string;
    data: Datum[];
    cursor: string;
    count: number;
    has_more: boolean;
}


export interface RecommendArticle {
    item_info: Datum,
    item_type: Number
}


export interface ICategoryBriefs {
    category_id: string;
    category_name: string;
    category_url: string;
    rank: number;
    back_ground: string;
    icon: string;
    ctime: number;
    mtime: number;
    show_type: number;
    item_type: number;
    promote_tag_cap: number;
    promote_priority: number;
}


export interface IAdvert {
    id: number;
    advert_id: string;
    user_id: string;
    item_id: string;
    item_type: number;
    platform: number;
    layout: number;
    position: number;
    advert_type: number;
    station_type: number;
    author_name: string;
    author_id: number;
    title: string;
    brief: string;
    url: string;
    picture: string;
    avatar: string;
    start_time: string;
    end_time: string;
    ctime: string;
    mtime: string;
    sale_count: number;
    sale_price: number;
    discount_rate: number;
    digg_count: number;
    comment_count: number;
    topic: string;
    topic_id: string;
    status: number;
}


