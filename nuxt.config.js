import StyleLintPlugin from 'stylelint-webpack-plugin';
import imageminMozjpeg from 'imagemin-mozjpeg';
import ImageminPlugin from 'imagemin-webpack-plugin';

import { I18N } from './config';

const isDev = process.env.NODE_ENV !== 'production';

export default {
  mode: 'universal',
  ...(!isDev && {
    modern: 'client',
  }),
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'ButNotMovies',
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['normalize.css', '@/assets/scss/styles.scss'],

  rootDir: __dirname,

  router: {
    // middleware: ['resetBreacrumbs'],
    prefetchLinks: false,
  },

  loading: { color: '#2d9e61' },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: '@/plugins/vue-lazy-load.js' }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    '@nuxtjs/composition-api/module',
    '@nuxtjs/color-mode',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    ['nuxt-i18n', I18N],
  ],

  webfontloader: {
    events: false,
    google: {
      // families: ['Montserrat:400,500,600:cyrillic&display=swap'],
    },
    timeout: 5000,
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  colorMode: {
    preference: 'system', // default value of $colorMode.preference
    fallback: 'light',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    optimizeCss: false,
    filenames: {
      app: () => (isDev ? '[name].js' : 'js/[contenthash].js'),
      chunk: () => (isDev ? '[name].js' : 'js/[contenthash].js'),
      css: () => (isDev ? '[name].css' : 'css/[contenthash].css'),
      img: () => (isDev ? '[path][name].[ext]' : 'img/[contenthash:7].[ext]'),
      font: () => (isDev ? '[path][name].[ext]' : 'fonts/[contenthash:7].[ext]'),
      video: () => (isDev ? '[path][name].[ext]' : 'videos/[contenthash:7].[ext]'),
    },
    ...(!isDev && {
      html: {
        minify: {
          collapseBooleanAttributes: true,
          decodeEntities: true,
          minifyCSS: true,
          minifyJS: true,
          processConditionalComments: true,
          removeEmptyAttributes: true,
          removeRedundantAttributes: true,
          trimCustomFragments: true,
          useShortDoctype: true,
        },
      },
    }),
    splitChunks: {
      layouts: true,
      pages: true,
      commons: true,
    },
    optimization: {
      minimize: !isDev,
    },
    ...(!isDev && {
      extractCSS: {
        ignoreOrder: true,
      },
    }),
    transpile: ['vue-lazy-hydration', 'intersection-observer'],
    postcss: {
      plugins: {
        ...(!isDev && {
          cssnano: {
            preset: [
              'default',
              // {
              //   autoprefixer: false,
              //   cssDeclarationSorter: false,
              //   zindex: false,
              //   discardComments: {
              //     removeAll: true,
              //   },
              // },
            ],
          },
        }),
      },
      ...(!isDev && {
        preset: {
          browsers: 'cover 99.5%',
          autoprefixer: true,
        },
      }),
      order: 'cssnanoLast',
    },
    extend(config, ctx) {
      const ORIGINAL_TEST = '/\\.(png|jpe?g|gif|svg|webp)$/i';
      const vueSvgLoader = [
        {
          loader: 'vue-svg-loader',
          options: {
            svgo: false,
          },
        },
      ];
      const imageMinPlugin = new ImageminPlugin({
        pngquant: {
          quality: '5-30',
          speed: 7,
          strip: true,
        },
        jpegtran: {
          progressive: true,
        },
        gifsicle: {
          interlaced: true,
        },
        plugins: [
          imageminMozjpeg({
            quality: 70,
            // arithmetic: true,
            progressive: true,
          }),
        ],
      });
      if (!ctx.isDev) config.plugins.push(imageMinPlugin);
      config.module.rules.forEach((rule) => {
        if (rule.test.toString() === ORIGINAL_TEST) {
          rule.test = /\.(png|jpe?g|gif|webp)$/i;
          rule.use = [
            {
              loader: 'url-loader',
              options: {
                limit: 1000,
                name: ctx.isDev ? '[path][name].[ext]' : 'img/[contenthash:7].[ext]',
              },
            },
          ];
        }
      });
      const svgRule = {
        test: /\.svg$/,
        oneOf: [
          {
            resourceQuery: /inline/,
            use: vueSvgLoader,
          },
          {
            resourceQuery: /data/,
            loader: 'url-loader',
          },
          {
            resourceQuery: /raw/,
            loader: 'raw-loader',
          },
          {
            loader: 'file-loader', // By default, always use file-loader
          },
        ],
      };
      config.module.rules.push(svgRule); // Actually add the rule
      config.plugins.push(new StyleLintPlugin({ syntax: 'scss' }));
    },
  },

  styleResources: {
    scss: ['./assets/scss/_vars/*.scss', './assets/scss/_mixins/*.scss'],
  },

  server: {
    port: process.env.NUXT_APP_PORT,
    host: process.env.NUXT_APP_HOST,
  },

  render: {
    resourceHints: false,
  },
};
