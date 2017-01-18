export default [{
  title: 'TodoList（reactNative）',
  desc: '简单的tooList,结合redux共同使用，包括了navigator，listView等',
  link: 'https://github.com/lingmissing/reactNative-redux-todolist'
}, {
  title: '豆瓣电影（reactNative）',
  desc: '调用豆瓣电影的接口，展示了当前热映，即将上映以及top250,主要使用ScrollView实现滚动机制，ListView展示电影列表。',
  link: 'https://github.com/lingmissing/react-native-doubanMovie'
}, {
  title: '在线小工具集',
  children: [{
    id: 2,
    title: '在线Markdown',
    desc: '使用marked插件构建，自定义样式，并且数据存储在localStorage中，提供长期存储的功能',
    link: '#/markdown'
  }, {
    id: 3,
    title: '正则表达式测试',
    desc: '目前使用match的api，测试正则是否可用，并且提供部分常用正则',
    link: '#/reg'
  }, {
    id: 4,
    title: '图片base64转换',
    desc: '利用fileReader获取图片的base64编码',
    link: '#/base'
  }, {
    id: 5,
    title: '在线涂鸦工具',
    desc: '通过canvas进行绘制，主要使用moveTo、lineTo、stroke等api。',
    link: '#/draw'
  }, {
    id: 6,
    title: '图片处理（压缩，裁切）',
    desc: '利用canvas的toDataURL导出并压缩，使用cropImage实现图片切割',
    link: '#/dealimg/compress'
  }, {
    id: 7,
    title: '在线计算器',
    link: '#/cal'
  }]
}, {
  title: 'CSS动画',
  children: [{
    title: '哆啦A梦',
    link: '#/doraemon'
  }]
}]
