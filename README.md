# Typescript 源码调试

- 打包 yarn run build:compiler, 生产 map 文件
- 新建 input.ts 文件, 写上需要调试的代码

  ```js
  type Test<T> = T extends number ? 1 : 2;

  type res = Test<any>;
  ```

## 使用命令的调试

- 添加一个 node 调试配置

  ```js
      {
        "name": "调试 ts 源码",
        "program": "${workspaceFolder}/built/local/tsc.js",
        "request": "launch",
        "skipFiles": ["<node_internals>/**"],
        "console": "integratedTerminal",
        "args": ["./input.ts"],
        "type": "node"
      }
  ```

- 入口时 tsc ，找到 src/tsc/tsc.ts 打个断点，debug 启动，发现他断住了

## 使用 api 的调试

- 添加新的 node 调试配置, 再类型检查处打上断点，然后单步调试
  ```js
      {
        "name": "调试 ts 源码-api",
        "program": "${workspaceFolder}/test.js",
        "request": "launch",
        "skipFiles": ["<node_internals>/**"],
        "console": "integratedTerminal",
        "args": [],
        "type": "node"
      }
  ```
