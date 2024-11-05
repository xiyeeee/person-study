module.exports = {
    base:'/person-study',
    theme: 'reco',
    title: '学习',
    description: '一个学习博客',
    themeConfig: {

        nav: [
            { text: '首页', link: '/book/index' },
            {
                text: 'xiye的博客',
                items: [
                    { text: 'Github', link: 'https://github.com/xiyeeee' },
                ]
            }
        ],
        sidebar:[ {
            title: '阮一峰阅读',
            path: '/book/index',
            collapsable: false, // 不折叠
            children: [
                { title: "1-3期", path: "/book/ruanyifeng1-3" }
            ]
        },]

    }
}