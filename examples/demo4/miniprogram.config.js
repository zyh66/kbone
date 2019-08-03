module.exports = {
    // 页面 origin，默认是 https://miniprogram.default
    origin: 'https://miniprogram.default',
    // 入口页面路由，默认是 /
    entry: '/',
    // 页面路由，用于页面间跳转
    router: {
        // 路由可以是多个值，支持动态路由
        app: [],
    },
    // 特殊路由跳转
    redirect: {
        // 跳转遇到同一个 origin 但是不在 router 里的页面时处理方式，支持的值：webview - 使用 web-view 组件打开；error - 抛出异常；none - 默认值；什么都不做，router 配置项中的 key
        notFound: 'app',
        // 跳转到 origin 之外的页面时处理方式，值同 notFound
        accessDenied: 'app',
    },
    // app 配置，同 https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html#window
    app: {
        navigationStyle: 'custom',
        // navigationBarTitleText: '',
        // navigationBarBackgroundColor: '#000000',
        // navigationBarTextStyle: 'white',
        backgroundColor: '#FFFFFF',
        backgroundTextStyle: 'dark',
        backgroundColorTop: '#FFFFFF',
        backgroundColorBottom: '#FFFFFF',
        enablePullDownRefresh: false,
        onReachBottomDistance: 50,
        pageOrientation: 'portrait',
    },
    // 全局配置
    global: {},
    // 页面配置，可以为单个页面做个性化处理，覆盖全局配置
    pages: {},
    // 优化
    optimization: {
        domSubTreeLevel: 5, // 将多少层级的 dom 子树作为一个自定义组件渲染，支持 1 - 5，默认值为 5

        // 对象复用，当页面被关闭时会回收对象，但是如果有地方保留有对象引用的话，注意要关闭此项，否则可能出问题
        elementMultiplexing: true, // element 节点复用
        textMultiplexing: true, // 文本节点复用
        commentMultiplexing: true, // 注释节点复用
        domExtendMultiplexing: true, // 节点相关对象复用，如 style、classList 对象等

        styleValueReduce: 50000, // 如果设置 style 属性时存在某个属性的值超过一定值，则进行删减
        attrValueReduce: 50000, // 如果设置 dom 属性时存在某个属性的值超过一定值，则进行删减
    },
    // app 补充配置，主要指 pages、window 等配置外的其他配置，同 https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html
    appExtraConfig: {},
    // 项目配置，会被合并到 project.config.json
    projectConfig: {
        appid: '',
        projectname: 'demo4',
    },
    // 包配置，会被合并到 package.json
    packageConfig: {
        name: 'demo4',
    },
    // vue-cli 相关配置
    vue: {
        entryFileName: 'main.mp.js',
        cdnPath: '',
        cdnLimit: '10000'
    },
}