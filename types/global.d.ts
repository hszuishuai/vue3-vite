declare global {
    declare interface ViteEnv {
        VITE_ENV: string
        VITE_OUTPUT_DIR: string
        VITE_PUBLIC_PATH: string
        VITE_USE_MOCK: boolean
        VITE_SOURCE_MAP: boolean
        VITE_BUILD_COMPRESS: 'gzip' | 'brotli' | 'none'
        VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE: boolean
    }
}