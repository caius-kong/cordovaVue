# cordovaApp
使用cordova打包vue项目

1.安装cordova<br/>
`$ npm install -g cordova`<br/>
2.创建一个cordova项目<br/>
`$ cordova create cordovaProjectName com.kyh.appname AppName`<br/>
3.添加platforms<br/>
`$ cd cordovaProject`<br/>
`$ cordova platform add browser`<br/>
`$ cordova platform add ios`<br/>
`$ cordova platform add android`<br/>

4.将webapp导入到cordova项目根目录<br/>
`$ cp -r webapp .`<br/>
5.修改index.html<br/>
`$ cd webapp && 修改见①(模仿www/index.html)`<br/>
6.修改config/index.js<br/>
```java
index -> ../../www/index.html
assetsRoot -> ../../www
assetsPublicPath -> ./
```
7./webapp下，输出文件到www<br/>
`$ npm run build`<br/>
8./cordova下，打包成app<br/>
`$ cordova run android`<br/>
