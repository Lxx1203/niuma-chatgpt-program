# NiuMa Chatgpt
本项目使用了 vue3+ts+pinia 作为客户端的前端，后端则使用 springboot + niuma-chatgpt-java-sdk 。  
**qq群讨论群：719537921**
## 目录
- niuma-chatgpt-web  前端项目
- niuma-chatgpt-web  后端项目
## 启动
前端启动（确保本机安装了 node 以及 yarn），项目默认端口为 5173，可以进入 `vite.config.ts` 中进行配置
```shell
cd niuma-chatgpt-web
yarn
yarn run dev
```
后端启动，项目默认端口为 8080  
**核心配置例子**
```yaml
niuma:
  chatgpt:
    client:
      key: 123123 # 设置从 OpenAI 中获取的 key
      proxy-host: 127.0.0.1 # 使用代理
      proxy-port: 7890 # 代理端口
```
**启动**
```
因为本项目依赖的 spring-boot-niuma-chatgpt-starter 未发布到网上，所以需要开发者者用 maven 自行安装
连接：https://github.com/Lxx1203/spring-boot-niuma-chatgpt-starter
用 idea 打开项目，加载对应的 jar 包，运行 Application 类
```
注意必须要设置代理，因为 open-ai 禁止大陆的 ip 访问
