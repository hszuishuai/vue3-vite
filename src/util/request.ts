import axios from "axios";
import type { AxiosRequestConfig } from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/configEnum';
import { ElMessage } from "element-plus"
import { NetStatus } from "@/enums/configEnum"


export interface RequestOptions {
    /** 当前接口权限, 不需要鉴权的接口请忽略， 格式：sys:user:add */
    permCode?: string;
    /** 是否直接获取data，而忽略message等 */
    isGetDataDirectly?: boolean;
    /** 请求成功是提示信息 */
    successMsg?: string;
    /** 请求失败是提示信息 */
    errorMsg?: string;
    /** 是否mock数据请求 */
    isMock?: boolean;
}

const UNKNOWN_ERROR = '未知错误，请重试';
// 是否生产环境
// const IS_PROD = ['production', 'prod'].includes(process.env.NODE_ENV);
/** 真实请求的路径前缀 */
const baseApiUrl: any = process.env.VITE_APP_BASE_API;
/** mock请求路径前缀 */
const baseMockUrl: any = process.env.VITE_APP_MOCK_API;

const service = axios.create({
    // baseURL: baseApiUrl,
    timeout: 6000,
});

service.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        const token = localStorage.getItem(ACCESS_TOKEN_KEY);
        if (config.headers) {
            // 请求头token信息，请根据实际情况进行修改
            // config.headers['Authorization'] = token;
            config.headers['Content-Type'] = "application/json; charset=utf-8"
        }
        return config;
    },
    (error) => {
        Promise.reject(error);
    },
);

service.interceptors.response.use(
    (response) => {
        const res = response.data;
        // if the custom code is not 200, it is judged as an error.
        if (res.err_msg !== NetStatus.SUCCESS) {
            ElMessage({
                type: "error",
                message: res.message
            })

            // Illegal token
            // if (res.code === 11001 || res.code === 11002) {
            //     window.localStorage.clear();
            //     window.location.reload();
            // }

            // throw other
            const error = new Error(res.message || UNKNOWN_ERROR) as Error & { code: any };
            error.code = res.code;
            return Promise.reject(error);
        } else {
            return res;
        }
    },
    (error) => {
        // 处理 422 或者 500 的错误异常提示
        const errMsg = error?.response?.data?.message ?? UNKNOWN_ERROR;
        ElMessage({
            type: "error",
            message: errMsg
        })
        error.message = errMsg;
        return Promise.reject(error);
    },
);

export type Response<T = any> = {
    code: number;
    message: string;
    data: T;
    err_msg?: string
};

export type BaseResponse<T = any> = Promise<Response<T>>;

/**
 *
 * @param method - request methods
 * @param url - request url
 * @param data - request data or params
 */
export const request = async <T = any>(
    config: AxiosRequestConfig,
    options: RequestOptions = {},
): Promise<T> => {
    try {
        const { successMsg, errorMsg, permCode, isMock, isGetDataDirectly = true } = options;
        // 如果当前是需要鉴权的接口 并且没有权限的话 则终止请求发起
        // if (permCode && !useUserStore().perms.includes(permCode)) {
        //     return $message.error('你没有访问该接口的权限，请联系管理员！');
        // }
        const fullUrl = `${(isMock ? baseMockUrl : baseApiUrl) + config.url}`;
        config.url = fullUrl.replace(/(?<!:)\/{2,}/g, '/');
        // if (IS_PROD) {
        //   // 保持api请求的协议与当前访问的站点协议一致
        //   config.url.replace(/^https?:/g, location.protocol);
        // }
        const res = await service.request(config);
        successMsg && ElMessage({
            type: "success",
            message: successMsg
        })
        errorMsg && ElMessage({
            type: "error",
            message: errorMsg
        });
        return isGetDataDirectly ? res.data : res;
    } catch (error: any) {
        return Promise.reject(error);
    }
};
