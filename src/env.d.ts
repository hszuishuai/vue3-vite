/// <reference types="vite/client" />
interface ImportMetaEnv {
  /**
   * 环境
   */
  readonly VITE_ENV: string
  /**
   * 打包目录
   */
  readonly VITE_OUTPUT_DIR: string
  /**
   * 公共路径
   */
  readonly VITE_PUBLIC_PATH: string
}
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}
