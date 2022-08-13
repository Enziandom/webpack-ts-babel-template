下载到本地之后，终端打开项目根目录，安装依赖：

```shell
npm install
```

该项目是 Webpack + TypeScript + Babel 的模板，主入口文件是 `./src/main.ts`。

使用了 ts-loader、babel-loader。babel 的预设使用了 @babel/preset-typescript、@babel/preset-env，并使用了插件 @babel/preset-env。

初始的 package.json 脚本有 dev 和 build。build 少了 sourcemaps 功能，dev 可以使用 sourcemaps 功能，方便控制台调试。