# 安装说明

下载到本地之后，终端打开项目根目录，安装依赖：

```shell
npm install
```

# 项目介绍

该项目是 Webpack + TypeScript + Babel 的模板，主入口文件是 `./src/main.ts`。

## 依赖介绍

加载器有：ts-loader、babel-loader、source-map-loader。

babel 的预设器有：@babel/preset-typescript、@babel/preset-env。

package.json 脚本有 dev 和 build。build 少了 sourcemaps 功能，dev 可以使用 sourcemaps 功能，方便控制台调试。

# version1 分支

这个分支的 babel 配置选项不再 webpack.config.*.js 中，而是单独存在于 babel.config.json 文件。