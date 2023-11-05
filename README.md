# vue_test2

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## ref 属性

    1.id的替代者
    2.应用在html的标签上获取真实DOM元素，应用在组件标签上是组件实例对象（vc）
    3.使用方式：
      <h1 v-text="msg" ref="xxx"></h1>  或  <SchoolComponent ref="xxx"/>
      获取：this.$refs.xxx
