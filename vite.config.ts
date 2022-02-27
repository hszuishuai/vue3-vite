
import { defineConfig, ConfigEnv, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import viteCompression from 'vite-plugin-compression'
// import viteImagemin from 'vite-plugin-imagemin'
import importToCDN from 'vite-plugin-cdn-import'

export default defineConfig(({ command, mode }: ConfigEnv) => {
  const root = process.cwd() // 当前工作目录
  const env = loadEnv(mode, root) // 加载env环境
  const { VITE_PUBLIC_PATH, VITE_OUTPUT_DIR } = env

  return {
    base: VITE_PUBLIC_PATH,
    resolve: {
      alias: {
        '/images': 'src/assets/images',
        "@": resolve(__dirname, 'src'),
      },
    },
    plugins: [
      vue(),
      viteCompression({
        //生成压缩包gz
        verbose: true,
        disable: false,
        threshold: 10240,
        algorithm: 'gzip',
        ext: '.gz',
      }),
      // 配置CDN
      importToCDN({
        modules: [
          // {
          //   name: 'vue',
          //   var: 'Vue',
          //   path: 'https://unpkg.com/vue@next',
          // },
          // {
          //   name: 'element-plus',
          //   var: 'ElementPlus',
          //   path: `https://unpkg.com/element-plus`,
          //   css: 'https://unpkg.com/element-plus/dist/index.css',
          // },
        ],
      }),
      // viteImagemin({
      //   gifsicle: {
      //     optimizationLevel: 7,
      //     interlaced: false,
      //   },
      //   optipng: {
      //     optimizationLevel: 7,
      //   },
      //   mozjpeg: {
      //     quality: 50,
      //   },
      //   pngquant: {
      //     quality: [0.8, 0.9],
      //     speed: 4,
      //   },
      //   svgo: {
      //     plugins: [
      //       {
      //         name: 'removeViewBox',
      //       },
      //       {
      //         name: 'removeEmptyAttrs',
      //         active: false,
      //       },
      //     ],
      //   },
      // }),
    ],


    css: {
      postcss: {
        plugins: [
          {
            postcssPlugin: 'internal:charset-removal',
            AtRule: {
              charset: (atRule) => {
                if (atRule.name === 'charset') {
                  atRule.remove();
                }
              }
            }
          }
        ],
      },

      // 引入全局scss文件
      preprocessorOptions: {
        // scss: {
        //     additionalData: '@import "./src/styles/variables";',
        // },
      },
    },

    build: {
      outDir: VITE_OUTPUT_DIR,
      terserOptions: {
        compress: {
          //生产环境时移除console
          drop_console: true,
          drop_debugger: true,
        },
      },
      assetsDir: 'assets',
      brotliSize: false,

      // 取消计算文件大小，加快打包速度
      reportCompressedSize: false,
      sourcemap: false,
      // assetsDir: 'static/img',
      rollupOptions: {
        output: {
          chunkFileNames: 'js/[name]-[hash].js',
          entryFileNames: 'js/[name]-[hash].js',
          assetFileNames: '[ext]/[name]-[hash].[ext]',
        },
      },
    },
    server: {
      port: 4000, // 设置服务启动端口号
      open: true, // 设置服务启动时是否自动打开浏览器
      cors: true // 允许跨域
      // 设置代理，根据我们项目实际情况配置
      // proxy: {
      //   '/api': {
      //     target: 'http://xxx.xxx.xxx.xxx:8000',
      //     changeOrigin: true,
      //     secure: false,
      //     rewrite: (path) => path.replace('/api/', '/')
      //   }
      // }
    }
  }
})



